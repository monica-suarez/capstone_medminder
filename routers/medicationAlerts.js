const express = require("express");
const alertController = require("../controllers/medicationAlerts");
const router = express.Router();

router.get("/med_alerts", alertController.getAllMedAlerts);

router.get("/med_alerts/:alert_id", alertController.getMedAlertById);

router.get("/med_alerts/:alert_id", alertController.getMedAlertTimeByAlert);

router.post("/med_alerts", alertController.createMedAlert);

router.put("/med_alerts/:alert_id", alertController.updateMedAlertById);

router.delete("/med_alerts/:alert_id", alertController.deleteAlertById);

module.exports = router;
