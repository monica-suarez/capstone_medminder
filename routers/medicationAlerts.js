const express = require("express");
const alertController = require("../controllers/medicationAlerts");
const router = express.Router();

router.get("/", alertController.getAllMedAlerts);

router.get("/:alert_id", alertController.getMedAlertById);

router.get("/:alert_time", alertController.getMedAlertTimeByAlert);

router.post("/", alertController.createMedAlert);

router.put("/:alert_id", alertController.updateMedAlertById);

router.delete("/:alert_id", alertController.deleteAlertById);

module.exports = router;
