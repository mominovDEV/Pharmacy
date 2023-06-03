const { reset } = require("nodemon");
const db = require("../config/db");

// getAllMedicine
exports.getAllMedicine = (req, res) => {
  db.query("SELECT * FROM medicine", (error, results) => {
    if (error) {
      console.log("Error retrieving medicine:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
