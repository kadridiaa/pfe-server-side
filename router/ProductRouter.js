const express = require("express");
const productController = require("../controller/ProductController");

const router = express.Router();

// Create a new product
router.post("/", productController.createProduct);

// Get a product by ID
router.get("/:id", productController.getProductById);

// Update a product
router.put("/:id", productController.updateProduct);

// Delete a product
router.delete("/:id", productController.deleteProduct);

// Get all products
router.get("/", productController.getAllProducts);



module.exports = router;
