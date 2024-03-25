"use strict";

var express = require("express");

var cors = require('cors');

var productRouter = require("./router/ProductRouter");

var app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json()); // Use the product router

app.use("/products", productRouter);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});