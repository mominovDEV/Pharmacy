const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

// GetAllRegions
router.get("/", stockController.getAllRegion);

// CreateNewstock
router.post("/", stockController.Createregions);

//Get a single stock By id
router.get("/:id", stockController.GetregionsById);

// Update stock
router.put("/:id", stockController.Updateregions);

// Delete stock BY ID
router.delete("/:id", stockController.Deleteregions);

module.exports = router;
