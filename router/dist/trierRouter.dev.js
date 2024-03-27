"use strict";

var express = require("express");

var trierController = require("../controller/trierController");

var router = express.Router();
router.get("/men", trierController.getProductsmen);
router.get("/women", trierController.getProductswomen);
router.get("/children", trierController.getProductschildren);
module.exports = router;