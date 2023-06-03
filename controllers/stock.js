const { reset } = require("nodemon");
const db = require("../config/db");

// GetAllstock
exports.getAllstock = (req, res) => {
  db.query("SELECT * FROM stock", (error, results) => {
    if (error) {
      console.log("Error retrieving stock:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
