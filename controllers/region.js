const { reset } = require("nodemon");
const db = require("../config/db");

// GetAllRegions
exports.getAllRegion = (req, res) => {
  db.query("SELECT * FROM region", (error, results) => {
    if (error) {
      console.log("Error retrieving region:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
