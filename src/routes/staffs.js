const express = require("express");
const {
  saveStaff,
  getStaff,
  getAll,
  updateStaff,
  deleteStaff,
} = require("../controllers/staff");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getStaff);
router.put("/:id", verifyToken, updateStaff);
router.delete("/:id", verifyToken, deleteStaff);
router.post("/save", verifyToken, saveStaff);

module.exports = router;
