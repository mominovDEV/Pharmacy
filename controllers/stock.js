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

// CREATE A NEW stock
exports.Createstock = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "INSERT INTO regions(name) VALUES(?)",
    [pharmacy_id, medicine_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating stock:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "stock create successfully",
        stocktId: results.insertId,
      });
    }
  );
};

//Get a single stock by ID
exports.GetstockById = (req, res) => {
  const stockId = req.params.id;
  db.query("Select * from stock where id=?", [stockId], (error, results) => {
    if (error) {
      console.log("Error RETREVING stock:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "stock not found" });
    }
    res.json(results[0]);
  });
};

// Update a stock
exports.Updatestock = (req, res) => {
  const stockId = req.params.id;
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "UPDATE stock set pharmacy_id=?, medicine_id=?, quantity=?  where id = ?",
    [pharmacy_id, medicine_id, quantity, stockId],
    (error) => {
      if (error) {
        console.log("Error Updating stock:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "stock update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a stock
exports.Deletestock = (req, res) => {
  const stockId = req.params.id;
  db.query("Delete from stock where id=?", [stockId], (error) => {
    if (error) {
      console.log("Error deleting stockId:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "stock deleter successfully" });
  });
};
