const express = require("express");
const {
  saveFinish,
  getFinish,
  getAll,
  deleteFinish,
  updateFinish,
} = require("../controllers/finish");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getFinish);
router.post("/save", verifyToken, saveFinish);
router.delete("/:id", verifyToken, deleteFinish);
router.put("/:id", verifyToken, updateFinish);

module.exports = router;
