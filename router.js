const express = require("express");
const login = require("./login");
const home = require("./home");

let router = express.Router();

router.post("/login", login);
router.get("/", home);

module.exports = router;
