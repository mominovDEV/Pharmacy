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

// CREATE A NEW medicine
exports.Createpharmacies = (req, res) => {
  const { name, adress, medicine, price, expiry_date, info } = req.body;
  db.query(
    "INSERT INTO pharmacies(name) VALUES(?)",
    [name, manufakture, medicine, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error creating pharmacies:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "pharmacies create successfully",
        districtId: results.insertId,
      });
    }
  );
};

//Get a single pharmacies by ID
exports.GetpharmaciesById = (req, res) => {
  const pharmaciesId = req.params.id;
  db.query(
    "Select * from pharmacies where id=?",
    [pharmaciesId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING pharmacies:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "pharmacies not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a pharmacies
exports.Updatepharmacies = (req, res) => {
  const pharmaciesId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE pharmacies set name = ? where id = ?",
    [name, pharmaciesId],
    (error) => {
      if (error) {
        console.log("Error Updating pharmacies:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "pharmacies update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a pharmacies
exports.Deletepharmacies = (req, res) => {
  const pharmaciesId = req.params.id;
  db.query("Delete from pharmacies where id=?", [pharmaciesId], (error) => {
    if (error) {
      console.log("Error deleting pharmaciesId:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "pharmacies deleter successfully" });
  });
};
