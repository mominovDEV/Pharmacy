const { reset } = require("nodemon");
const db = require("../config/db");

// GetAllDistricts
exports.getAllDistricts = (req, res) => {
  db.query("SELECT * FROM district", (error, results) => {
    if (error) {
      console.log("Error retrieving district:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

// CREATE A NEW DISTRICT
exports.CreateDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO district(name, region_id) VALUES(?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("Error creating district:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "district create successfully",
        districtId: results.insertId,
      });
    }
  );
};

//Get a single district by ID
exports.GetDistrictById = (req, res) => {
  const districtId = req.params.id;
  db.query(
    "Select * from district where id=?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING district:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "district not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a District
exports.UpdateDistrict = (req, res) => {
  const districtId = req.params.id;
  const { name, region_id } = req.body;
  db.query(
    "UPDATE district set name = ?, region_id=? where id = ?",
    [name, region_id, districtId],
    (error) => {
      if (error) {
        console.log("Error Updating district:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "district update successfully" });

      res.json(results[0]);
    }
  );
};
