const express = require("express");
const {
  saveCompany,
  getCompany,
  getAll,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getCompany);
router.put("/:id", verifyToken, updateCompany);
router.delete("/:id", verifyToken, deleteCompany);
router.post("/save", verifyToken, saveCompany);

module.exports = router;
