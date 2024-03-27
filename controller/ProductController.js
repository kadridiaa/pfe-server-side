const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  const {
    product_id,
    availability,
    name,
    price,
    oldPrice,
    displayDiscountPercentage,
    familyName,
    subfamilyName,
    sectionName,
    img,
    link,
    websiteName,
  } = req.body;
  try {
    const newProduct = await prisma.products.create({
      data: {
        product_id,
        availability,
        name,
        price,
        oldPrice,
        displayDiscountPercentage,
        familyName,
        subfamilyName,
        sectionName,
        img,
        link,
        websiteName,
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    res.json(products);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await prisma.products.findUnique({
      where: {
        product_id: productId,
      },
    });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const {
    availability,
    name,
    price,
    oldPrice,
    displayDiscountPercentage,
    familyName,
    subfamilyName,
    sectionName,
    img,
    link,
  } = req.body;
  try {
    const updatedProduct = await prisma.products.update({
      where: {
        product_id: productId,
      },
      data: {
        availability,
        name,
        price,
        oldPrice,
        displayDiscountPercentage,
        familyName,
        subfamilyName,
        sectionName,
        img,
        link,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await prisma.products.delete({
      where: {
        product_id: productId,
      },
    });
    res.json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

