require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const Route = require("./models/Route");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ================= PORT =================
const PORT = process.env.PORT || 1000;

// ================= DATABASE =================
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 30000 })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB Error:", err);
    process.exit(1);
  });

// ================= HELPER =================
function normalize(text) {
  return text.trim().toLowerCase();
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ================= APIs =================

// Get all routes
app.get("/api/routes", async (req, res, next) => {
  try {
    const routes = await Route.find({}, "busNumber stops").lean();
    res.json(routes);
  } catch (err) {
    next(err);
  }
});

// Search by bus number
app.get("/api/route/:bus", async (req, res, next) => {
  try {
    const busQuery = escapeRegex(req.params.bus.trim());
    if (!busQuery) return res.status(400).json({ message: "Bus number required" });

    const route = await Route.findOne({
      busNumber: { $regex: `^${busQuery}$`, $options: "i" },
    }).lean();

    if (!route) return res.status(404).json({ message: "Bus not found" });
    res.json(route);
  } catch (err) {
    next(err);
  }
});

// Search by source & destination
app.get("/api/search", async (req, res, next) => {
  try {
    let { source, destination } = req.query;

    if (!source || !destination) {
      return res.status(400).json({ message: "Both source and destination are required" });
    }

    source = normalize(source);
    destination = normalize(destination);

    if (source === destination) {
      return res.status(400).json({ message: "Source and destination cannot be the same" });
    }

    const routes = await Route.find().lean();
    const result = [];

    for (const r of routes) {
      const stopsNormalized = r.stops.map((s) => normalize(s));
      const s = stopsNormalized.indexOf(source);
      const d = stopsNormalized.indexOf(destination);

      if (s !== -1 && d !== -1 && s < d) {
        result.push({
          busNumber: r.busNumber,
          stops: r.stops.slice(s, d + 1),
          totalStops: d - s + 1,
        });
      }
    }

    result.sort((a, b) => a.totalStops - b.totalStops);

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// ================= FRONTEND =================
const frontendPath = path.resolve(__dirname, "../frontend");

app.use(express.static(frontendPath));

// ✅ FIXED fallback route (no "*")
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ================= GLOBAL ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});