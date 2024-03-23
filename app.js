const express = require("express");
const productRouter = require("./router/ProductRouter");
const userRoutes = require("./router/UserRouter");
const trierRouter = require("./router/trierRouter");
const app = express();

app.use(express.json());

// Use the product router
app.use("/products", productRouter);
app.use("/users", userRoutes);
app.use("/trier", trierRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
