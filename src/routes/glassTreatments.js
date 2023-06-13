const express = require("express");
const {
  saveGlassTreatment,
  getGlassTreatment,
  getAll,
  updateGlassTreatment,
  deleteGlassTreatmentOptions,
  addGlassTreatmentOptions,
  deleteGlassTreatment,
} = require("../controllers/glassTreatment");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getGlassTreatment);
router.put("/:id", verifyToken, updateGlassTreatment);
router.delete("/:id/:optionId", verifyToken, deleteGlassTreatmentOptions);
router.patch("/:id", verifyToken, addGlassTreatmentOptions);
router.delete("/:id", verifyToken, deleteGlassTreatment);
router.post("/save", verifyToken, saveGlassTreatment);

module.exports = router;
