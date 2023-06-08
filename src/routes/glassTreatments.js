const express = require("express");
const {
  saveGlassTreatment,
  getGlassTreatment,
  getAll,
} = require("../controllers/glassTreatment");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getGlassTreatment);
router.post("/save", saveGlassTreatment);

module.exports = router;
