const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto");

router.get("/", function (req, res) {
  res.render("views/index");
});

module.exports = router;
