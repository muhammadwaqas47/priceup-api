const express = require("express");
const {
  saveCategory,
  getCategory,
  getAll,
} = require("../controllers/hardwareCategory");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getCategory);
router.post("/save", verifyToken, saveCategory);

module.exports = router;
