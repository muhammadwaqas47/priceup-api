const express = require("express");
const { saveCompany, getCompany, getAll } = require("../controllers/company");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getCompany);
router.post("/save", saveCompany);

module.exports = router;
