const express = require("express");
const favorisController = require("../controller/favorisController");
const authMiddleware = require("../midllweare/authmidllwaere");

const router = express.Router();
router.get("/prosuit", authMiddleware, favorisController.getFavoriteProducts);
router.get("/:id", authMiddleware, favorisController.getFavoritesByUser);
router.put("/:id", authMiddleware, favorisController.updateFavorite);
router.put("/:id", authMiddleware, favorisController.deleteFavorite);
router.put("/", authMiddleware, favorisController.getAllFavorites);
module.exports = router;
