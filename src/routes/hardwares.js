const express = require("express");
const {
  saveHardware,
  getHardware,
  getAll,
  getHardwaresByCategory,
  updateHardware,
  deleteHardware,
  deleteHardwareFinishes,
  addHardwareFinishes,
} = require("../controllers/hardware");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getHardware);
router.put("/:id", updateHardware);
router.delete("/:id/:finishItemId", deleteHardwareFinishes);
router.patch("/:id/", addHardwareFinishes);
router.delete("/:id", deleteHardware);
router.get("/category/:slug", verifyToken, getHardwaresByCategory);
router.post("/save", saveHardware);

module.exports = router;
