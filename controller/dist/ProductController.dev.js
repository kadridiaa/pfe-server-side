"use strict";

var _require = require("@prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.createProduct = function _callee(req, res) {
  var _req$body, product_id, availability, name, price, oldPrice, displayDiscountPercentage, familyName, subfamilyName, sectionName, img, link, websiteName, newProduct;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, product_id = _req$body.product_id, availability = _req$body.availability, name = _req$body.name, price = _req$body.price, oldPrice = _req$body.oldPrice, displayDiscountPercentage = _req$body.displayDiscountPercentage, familyName = _req$body.familyName, subfamilyName = _req$body.subfamilyName, sectionName = _req$body.sectionName, img = _req$body.img, link = _req$body.link, websiteName = _req$body.websiteName;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.products.create({
            data: {
              product_id: product_id,
              availability: availability,
              name: name,
              price: price,
              oldPrice: oldPrice,
              displayDiscountPercentage: displayDiscountPercentage,
              familyName: familyName,
              subfamilyName: subfamilyName,
              sectionName: sectionName,
              img: img,
              link: link,
              websiteName: websiteName
            }
          }));

        case 4:
          newProduct = _context.sent;
          res.json(newProduct);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getAllProducts = function _callee2(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.products.findMany());

        case 3:
          products = _context2.sent;
          res.json(products);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getProductById = function _callee3(req, res) {
  var productId, product;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          productId = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.products.findUnique({
            where: {
              product_id: productId
            }
          }));

        case 4:
          product = _context3.sent;

          if (!product) {
            res.status(404).json({
              error: "Product not found"
            });
          } else {
            res.json(product);
          }

          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.updateProduct = function _callee4(req, res) {
  var productId, _req$body2, availability, name, price, oldPrice, displayDiscountPercentage, familyName, subfamilyName, sectionName, img, link, updatedProduct;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          productId = req.params.id;
          _req$body2 = req.body, availability = _req$body2.availability, name = _req$body2.name, price = _req$body2.price, oldPrice = _req$body2.oldPrice, displayDiscountPercentage = _req$body2.displayDiscountPercentage, familyName = _req$body2.familyName, subfamilyName = _req$body2.subfamilyName, sectionName = _req$body2.sectionName, img = _req$body2.img, link = _req$body2.link;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(prisma.products.update({
            where: {
              product_id: productId
            },
            data: {
              availability: availability,
              name: name,
              price: price,
              oldPrice: oldPrice,
              displayDiscountPercentage: displayDiscountPercentage,
              familyName: familyName,
              subfamilyName: subfamilyName,
              sectionName: sectionName,
              img: img,
              link: link
            }
          }));

        case 5:
          updatedProduct = _context4.sent;
          res.json(updatedProduct);
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          console.error(_context4.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

exports.deleteProduct = function _callee5(req, res) {
  var productId, deletedProduct;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          productId = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(prisma.products["delete"]({
            where: {
              product_id: productId
            }
          }));

        case 4:
          deletedProduct = _context5.sent;
          res.json(deletedProduct);
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          console.error(_context5.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
};