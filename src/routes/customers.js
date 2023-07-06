const express = require("express");
const {
  saveCustomer,
  getCustomer,
  getAll,
} = require("../controllers/customer");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getCustomer);
router.post("/save", verifyToken, saveCustomer);

module.exports = router;
