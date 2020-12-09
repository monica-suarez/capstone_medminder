const express = require("express");
const medController = require("../controllers/medications");
const router = express.Router();

router.get("/", medController.getAllMedications);

router.get("/:med_id", medController.getMedicationById);

router.post("/", medController.createMedication);

router.put("/:med_id", medController.updateMedicationById);

router.delete("/:med_id", medController.deleteMedicationById);

module.exports = router;
