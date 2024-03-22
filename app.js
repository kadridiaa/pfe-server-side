const express = require("express");
const productRouter = require("./router/ProductRouter");
const userRoutes = require("./router/UserRouter");

const app = express();

app.use(express.json());

// Use the product router
app.use("/products", productRouter);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
