const express = require("express");
const alertController = require("../controllers/medicationAlerts");
const router = express.Router();

router.get("/medication_alerts", alertController.getAllMedAlerts);

router.get("/medication_alerts/:alert_id", alertController.getMedAlertById);

router.get("medication_alerts/:alert_id", alertController.getMedAlertTimeById);

router.post("/medication_alerts", alertController.createMedAlert);

router.put("/medication_alerts/:alert_id", alertController.updateMedAlertById);

router.delete("/medication_alerts/:alert_id", alertController.deleteAlertById);

module.exports = router;
