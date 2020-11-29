const express = require("express");
const medController = require("../controllers/medications");
const router = express.Router();

router.get("/medications", medController.getAllMedications);

router.get("/users/:med_id", medController.getMedicationById);

router.post("/medications", medController.createMedication);

router.put("/medications/:med_id", medController.updateMedicationById);

router.delete("/users/:med_id", medController.deleteMedicationById);

module.exports = router;
