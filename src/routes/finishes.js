const express = require("express");
const { saveFinish, getFinish, getAll } = require("../controllers/finish");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getFinish);
router.post("/save", verifyToken, saveFinish);

module.exports = router;
