const express = require("express");
const {
  saveHardware,
  getHardware,
  getAll,
  getHardwaresByCategory,
} = require("../controllers/hardware");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getHardware);
router.get("/category/:slug", getHardwaresByCategory);
router.post("/save", saveHardware);

module.exports = router;
