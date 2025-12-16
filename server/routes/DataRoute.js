const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/DataController.js");

router.get("/:filename", getData);

module.exports = router;
