const express = require("express");
const favorisController = require("../controller/favorisController");
const authMiddleware = require("../midllweare/authmidllwaere");

const router = express.Router();
router.get("/produit", authMiddleware, favorisController.getFavoritesByUser);
router.get("/:id", authMiddleware, favorisController.getFavoritesByUser);
router.put("/:id", authMiddleware, favorisController.updateFavorite);
router.delete("/:id", authMiddleware, favorisController.deleteFavorite);
router.get("/", favorisController.getAllFavorites);
router.post("/", authMiddleware, favorisController.createFavorite);
module.exports = router;
