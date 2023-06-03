const express = require("express");
const router = express.Router();
const medicine_typeController = require("../controllers/medicine_type");

// GetAllmedicine_type
router.get("/", medicine_typeController.getAllMedicine_type);

module.exports = router;
