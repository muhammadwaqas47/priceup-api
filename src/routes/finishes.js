const express = require("express");
const {saveFinish,getFinish,getAll} = require("../controllers/finish");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getFinish);
router.post("/save", saveFinish);

module.exports = router;
