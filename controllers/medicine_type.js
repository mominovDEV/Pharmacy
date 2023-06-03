const { reset } = require("nodemon");
const db = require("../config/db");

// getAllMedicine_type
exports.getAllMedicine_type = (req, res) => {
  db.query("SELECT * FROM medicine_type", (error, results) => {
    if (error) {
      console.log("Error retrieving medicine_type:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
