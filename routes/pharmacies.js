const express = require("express");
const router = express.Router();
const pharmaciesController = require("../controllers/pharmacies");

// GetAllpharmacies
router.get("/", pharmaciesController.getAllpharmacies);

// CreateNewpharmacies
router.post("/", pharmaciesController.Createpharmacies);

//Get a single pharmacies By id
router.get("/:id", pharmaciesController.GetpharmaciesById);

// Update pharmacies
router.put("/:id", pharmaciesController.Updatepharmacies);

// Delete pharmacies BY ID
router.delete("/:id", pharmaciesController.Deletepharmacies);

module.exports = router;
