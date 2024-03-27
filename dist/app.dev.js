"use strict";

var express = require("express");

var cors = require('cors');

var productRouter = require("./router/ProductRouter");

var userRoutes = require("./router/UserRouter");

var trierRouter = require("./router/trierRouter");

var favorisRouter = require("./router/favorisRouter");

var app = express(); // Enable CORS for requests from http://localhost:3000

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json()); // Use the product router

app.use("/products", productRouter);
app.use("/users", userRoutes);
app.use("/trier", trierRouter);
app.use("/favoris", favorisRouter);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});