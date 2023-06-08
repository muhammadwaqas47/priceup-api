const express = require("express");
const {
  saveHardware,
  getHardware,
  getAll,
} = require("../controllers/hardware");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getHardware);
router.post("/save", saveHardware);

module.exports = router;
