// Controller function to retrieve products with sectionName "man"
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getProductsmen = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      where: {
        sectionName: "MAN", 
      },
    });
    console.log(products); // Print products in the console
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getProductswomen = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      where: {
        sectionName: "WOMAN", 
      },
    });
    console.log(products); // Print products in the console
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getProductschildren = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      where: {
        sectionName: "CHILDREN",
      },
    });
    console.log(products); // Print products in the console
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
