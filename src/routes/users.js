const express = require("express");
const {saveUser,getUser,getAll} = require("../controllers/user");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getUser);
router.post("/save", saveUser);

module.exports = router;
