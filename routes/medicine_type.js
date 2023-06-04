const express = require("express");
const router = express.Router();
const medicine_typeController = require("../controllers/medicine_type");

// GetAllmedicine_type
router.get("/", medicine_typeController.getAllMedicine_type);

// CreateNewmedicine_type
router.post("/", medicine_typeController.CreateMedicineType);

//Get a single medicine_type By id
router.get("/:id", medicine_typeController.Getmedicine_typeById);

// Update medicine_type
router.put("/:id", medicine_typeController.Updatemedicine_type);

// Delete medicine_type BY ID
router.delete("/:id", medicine_typeController.Deletemedicine_type);

module.exports = router;
