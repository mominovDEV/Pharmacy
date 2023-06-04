const express = require("express");
const router = express.Router();
const DistrictController = require("../controllers/district");

// GetAllDistricts
router.get("/", DistrictController.getAllDistricts);

// CreateNewDistrict
router.post("/", DistrictController.CreateDistrict);

//Get a single district By id
router.get("/:id", DistrictController.GetDistrictById);

// Update district
router.put("/:id", DistrictController.UpdateDistrict);

// Delete district BY ID
router.delete("/:id", DistrictController.DeleteDistrict);

module.exports = router;
