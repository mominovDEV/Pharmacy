const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

// GetAllRegions
router.get("/", regionController.getAllRegion);

// CreateNewregion
router.post("/", regionController.Createregions);

//Get a single region By id
router.get("/:id", regionController.GetregionsById);

// Update region
router.put("/:id", regionController.Updateregions);

// Delete region BY ID
router.delete("/:id", regionController.Deleteregions);

module.exports = router;
