const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicine");

// GetAllmedicine
router.get("/", medicineController.getAllMedicine);

// CreateNewmedicine
router.post("/", medicineController.CreateMedicine);

//Get a single medicine By id
router.get("/:id", medicineController.GetmedicineById);

// Update medicine
router.put("/:id", medicineController.Updatemedicine);

// Delete medicine BY ID
router.delete("/:id", medicineController.Deletemedicine);

module.exports = router;
