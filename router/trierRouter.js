const express = require("express");
const trierController = require("../controller/trierController");

const router = express.Router();
router.get("/men", trierController.getProductsmen);
router.get("/women", trierController.getProductswomen);
router.get("/children", trierController.getProductschildren);
module.exports = router;
