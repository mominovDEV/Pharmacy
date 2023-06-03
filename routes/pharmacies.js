const express = require("express");
const router = express.Router();
const pharmaciesController = require("../controllers/pharmacies");

// GetAllpharmacies
router.get("/", pharmaciesController.getAllpharmacies);

module.exports = router;
