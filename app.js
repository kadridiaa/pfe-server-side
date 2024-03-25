const express = require("express");
const cors = require('cors');
const productRouter = require("./router/ProductRouter");

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json());

// Use the product router
app.use("/products", productRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
