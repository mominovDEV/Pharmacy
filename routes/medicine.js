const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicine");

// GetAllmedicine
router.get("/", medicineController.getAllMedicine);

module.exports = router;
