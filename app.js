const express = require("express");
const productRouter = require("./router/ProductRouter");

const app = express();

app.use(express.json());

// Use the product router
app.use("/products", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
