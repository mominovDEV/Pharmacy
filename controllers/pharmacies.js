const { reset } = require("nodemon");
const db = require("../config/db");

// getAllPharmasy
exports.getAllpharmacies = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, results) => {
    if (error) {
      console.log("Error retrieving pharmacies:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
