const express = require("express");
const {
  saveUser,
  getUser,
  getAll,
  updateUser,
  loginUser,
} = require("../controllers/user");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.post("/save", verifyToken, saveUser);
router.post("/login", loginUser);

module.exports = router;
