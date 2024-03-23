// controller.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Controller function to get favorited products by current user
exports.getFavoriteProducts = async (req, res) => {
  const userId = req.user.id; // Assuming userId is available through authentication middleware

  try {
    const favoriteProducts = await prisma.favorite.findMany({
      where: {
        userId: userId,
      },
      include: {
        product: true,
      },
    });

    res.json(favoriteProducts.map((favorite) => favorite.product));
  } catch (error) {
    console.error("Error fetching favorite products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.createFavorite = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const newFavorite = await prisma.favorite.create({
      data: {
        userId,
        productId,
      },
    });

    res.json(newFavorite);
  } catch (error) {
    console.error("Error creating favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Controller function to get all favorites
exports.getAllFavorites = async (req, res) => {
  try {
    const allFavorites = await prisma.favorite.findMany({
      include: {
        product: true,
      },
    });

    res.json(allFavorites);
  } catch (error) {
    console.error("Error fetching all favorites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Controller function to get all favorites of a user
exports.getFavoritesByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        product: true,
      },
    });

    res.json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to update a favorite
exports.updateFavorite = async (req, res) => {
  const favoriteId = req.params.favoriteId;
  const { productId } = req.body;

  try {
    const updatedFavorite = await prisma.favorite.update({
      where: {
        id: parseInt(favoriteId),
      },
      data: {
        productId,
      },
    });

    res.json(updatedFavorite);
  } catch (error) {
    console.error("Error updating favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a favorite
exports.deleteFavorite = async (req, res) => {
  const favoriteId = req.params.favoriteId;

  try {
    await prisma.favorite.delete({
      where: {
        id: parseInt(favoriteId),
      },
    });

    res.json({ message: "Favorite deleted successfully" });
  } catch (error) {
    console.error("Error deleting favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
