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

// CREATE A NEW regions
exports.Createregions = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO regions(name) VALUES(?)", [name], (error, results) => {
    if (error) {
      console.log("Error creating regions:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    console.log(results);
    res.json({
      message: "regions create successfully",
      districtId: results.insertId,
    });
  });
};

//Get a single regions by ID
exports.GetregionsById = (req, res) => {
  const regionsId = req.params.id;
  db.query(
    "Select * from regions where id=?",
    [regionsId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING regions:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "regions not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a regions
exports.Updateregions = (req, res) => {
  const regionsId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE regions set name = ? where id = ?",
    [name, regionsId],
    (error) => {
      if (error) {
        console.log("Error Updating regions:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "regions update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a medicine_type
exports.Deleteregions = (req, res) => {
  const regionsId = req.params.id;
  db.query("Delete from regions where id=?", [regionsId], (error) => {
    if (error) {
      console.log("Error deleting regionsId:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "regions deleter successfully" });
  });
};
