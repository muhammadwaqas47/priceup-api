const express = require("express");
const { saveLayout, getLayout, getAll } = require("../controllers/layout");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getLayout);
router.post("/save", saveLayout);

module.exports = router;
