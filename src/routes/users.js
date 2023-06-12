const express = require("express");
const {
  saveUser,
  getUser,
  getAll,
  updateUser,
  loginUser,
} = require("../controllers/user");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.post("/save", saveUser);
router.post("/login", loginUser);

module.exports = router;
