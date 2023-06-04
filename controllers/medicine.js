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
  const { name, manufakture, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "INSERT INTO medicine_type(name) VALUES(?)",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error creating medicine_type:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "medicine_type create successfully",
        districtId: results.insertId,
      });
    }
  );
};

//Get a single medicine_type by ID
exports.Getmedicine_typeById = (req, res) => {
  const medicine_typeId = req.params.id;
  db.query(
    "Select * from medicine_type where id=?",
    [medicine_typeId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING medicine_type:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "medicine_type not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a medicine_type
exports.Updatemedicine_type = (req, res) => {
  const medicine_typeId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicine_type set name = ? where id = ?",
    [name, medicine_typeId],
    (error) => {
      if (error) {
        console.log("Error Updating medicine_type:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "medicine_type update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a medicine_type
exports.Deletemedicine_type = (req, res) => {
  const medicine_typeId = req.params.id;
  db.query(
    "Delete from medicine_type where id=?",
    [medicine_typeId],
    (error) => {
      if (error) {
        console.log("Error deleting medicine_typeId:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      res.json({ message: "medicine_type deleter successfully" });
    }
  );
};
