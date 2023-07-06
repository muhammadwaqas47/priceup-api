const express = require("express");
const {
  getAll,
  loginAdmin,
} = require("../controllers/admin");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.post("/login", loginAdmin);
module.exports = router;
