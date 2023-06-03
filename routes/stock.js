const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

// GetAllRegions
router.get("/", regionController.getAllRegion);

module.exports = router;
