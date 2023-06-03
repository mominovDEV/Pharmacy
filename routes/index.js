const express = require("express");
const router = express.Router();

const regionRoutes = require("./region");
const districtRoutes = require("./district");
const medicine_typeRoutes = require("./medicine_type");
const medicineRoutes = require("./medicine");
const pharmaciesRoutes = require("./pharmacies");
const stockRoutes = require("./stock");

router.use("/region", regionRoutes);
router.use("/district", districtRoutes);
router.use("/medicine_type", medicine_typeRoutes);
router.use("/medicine", medicineRoutes);
router.use("/pharmacies", pharmaciesRoutes);
router.use("/stock", stockRoutes);

module.exports = router;
