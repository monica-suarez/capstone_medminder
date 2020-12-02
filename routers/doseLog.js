const express = require("express");
const doseLogController = require("../controllers/doseLog");
const router = express.Router();

router.get("/dose_log", doseLogController.getAllDoses);

router.get("/dose_log/:dose_id", doseLogController.getDoseLogById);

router.get("/dose_log/:dose_time", doseLogController.getDoseTimeByDoseTime);

router.post("/dose_log", doseLogController.createDoseLog);

router.delete("/dose_log/:dose_id", doseLogController.deleteDoseLogById);

module.exports = router;
