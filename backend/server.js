require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const Route = require("./models/Route");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors()); // You can restrict origin if frontend is separate
app.use(express.json());
app.use(helmet()); // Basic security headers

// Simple request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ================= PORT =================
const PORT = process.env.PORT || 3000;

// ================= DATABASE =================
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 30000 })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("DB Error:", err);
    process.exit(1);
  });

// ================= HELPER =================
function normalize(text) {
  return text.trim().toLowerCase();
}

// ================= APIs =================

// Get all routes
app.get("/api/routes", async (req, res, next) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (err) {
    next(err);
  }
});

// Search by bus number
app.get("/api/route/:bus", async (req, res, next) => {
  try {
    const busQuery = req.params.bus.trim();
    const route = await Route.findOne({
      busNumber: { $regex: `^${busQuery}$`, $options: "i" },
    });
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
    if (!source || !destination)
      return res.status(400).json({ message: "Invalid params" });

    source = normalize(source);
    destination = normalize(destination);

    const routes = await Route.find();
    const result = [];

    routes.forEach((r) => {
      const stopsNormalized = r.stops.map((s) => s.toLowerCase());
      const s = stopsNormalized.indexOf(source);
      const d = stopsNormalized.indexOf(destination);
      if (s !== -1 && d !== -1 && s < d) {
        result.push({
          busNumber: r.busNumber,
          stops: r.stops.slice(s, d + 1),
        });
      }
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// ================= FRONTEND =================
const frontendPath = path.resolve(__dirname, "../frontend");

app.use(express.static(frontendPath));
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ================= GLOBAL ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});