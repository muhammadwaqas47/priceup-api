const express = require("express");
const {
  saveEstimate,
  getEstimate,
  getAll,
  updateEstimate,
  deleteEstimate,
} = require("../controllers/estimate");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getEstimate);
router.put("/:id", verifyToken, updateEstimate);
router.delete("/:id", verifyToken, deleteEstimate);
router.post("/save", verifyToken, saveEstimate);

module.exports = router;
