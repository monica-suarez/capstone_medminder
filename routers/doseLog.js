const express = require("express");
const doseLogController = require("../controllers/doseLog");
const router = express.Router();

router.get("/", doseLogController.getAllDoses);

router.get("/:dose_id", doseLogController.getDoseLogById);

router.get("/:dose_time", doseLogController.getDoseTimeByDoseTime);

router.post("/", doseLogController.createDoseLog);

router.delete("/:dose_id", doseLogController.deleteDoseLogById);

module.exports = router;
