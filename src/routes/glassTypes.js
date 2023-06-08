const express = require("express");
const {
  saveGlassType,
  getGlassType,
  getAll,
} = require("../controllers/glassType");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getGlassType);
router.post("/save", saveGlassType);

module.exports = router;
