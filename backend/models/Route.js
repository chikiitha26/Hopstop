const mongoose = require("mongoose");

/* ---------- STOP NORMALIZER ---------- */
function normalizeStop(stop) {
  return stop
    .toLowerCase()
    .trim()
    .replace(/\broads\b/g, "road"); // converts roads -> road
}

const routeSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true
    },

    stops: {
      type: [String],
      required: true,

      set: arr =>
        [...new Set(
          arr
            .map(normalizeStop)
            .filter(Boolean)
        )],

      validate: {
        validator: arr => arr.length > 1,
        message: "Route must have at least two stops"
      }
    }
  },
  { timestamps: true }
);

/* PERFORMANCE INDEX */
routeSchema.index({ stops: 1 });

module.exports = mongoose.model("Route", routeSchema);
