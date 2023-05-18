const express = require("express");
const {saveCategory,getCategory,getAll} = require("../controllers/hardwareCategory");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getCategory);
router.post("/save", saveCategory);

module.exports = router;
