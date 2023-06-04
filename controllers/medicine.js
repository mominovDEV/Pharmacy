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

// CREATE A NEW medicine
exports.CreateMedicine = (req, res) => {
  const { name, manufakture, medicine, price, expiry_date, info } = req.body;
  db.query(
    "INSERT INTO medicine_type(name) VALUES(?)",
    [name, manufakture, medicine, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error creating medicine:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "medicine create successfully",
        districtId: results.insertId,
      });
    }
  );
};

//Get a single medicine by ID
exports.GetmedicineById = (req, res) => {
  const medicineId = req.params.id;
  db.query(
    "Select * from medicine where id=?",
    [medicineId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING medicine:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "medicine not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a medicine
exports.Updatemedicine = (req, res) => {
  const medicineId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicine set name = ? where id = ?",
    [name, medicineId],
    (error) => {
      if (error) {
        console.log("Error Updating medicine:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "medicine update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a medicine
exports.Deletemedicine = (req, res) => {
  const medicine_typeId = req.params.id;
  db.query("Delete from medicine where id=?", [medicine_typeId], (error) => {
    if (error) {
      console.log("Error deleting medicineId:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "medicine deleter successfully" });
  });
};
