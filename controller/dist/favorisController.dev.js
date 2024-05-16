"use strict";

var _require = require("@prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient(); // Controller function to get favorited products by current user

exports.createFavorite = function _callee(req, res) {
  var productId, userId, newFavorite;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          productId = req.body.productId;
          userId = req.user.userId; // Extracted from the token

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(prisma.favorite.create({
            data: {
              userId: userId,
              productId: productId
            }
          }));

        case 5:
          newFavorite = _context.sent;
          res.json(newFavorite);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.error("Error creating favorite:", _context.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}; // Controller function to get all favorites


exports.getAllFavorites = function _callee2(req, res) {
  var allFavorites;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.favorite.findMany({
            include: {
              product: true
            }
          }));

        case 3:
          allFavorites = _context2.sent;
          res.json(allFavorites);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching all favorites:", _context2.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Controller function to get all favorites of a user


exports.getFavoritesByUser = function _callee3(req, res) {
  var userId, favorites;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Controller function to get all favorites of a user
          userId = req.user.userId; // Extracted from the token

          if (!(!userId || typeof userId !== "number")) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: "Invalid userId"
          }));

        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(prisma.favorite.findMany({
            where: {
              userId: userId // Provide the userId directly

            },
            include: {
              product: true
            }
          }));

        case 6:
          favorites = _context3.sent;
          res.json(favorites);
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.error("Error fetching favorites:", _context3.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 10]]);
}; // Controller function to update a favorite


exports.updateFavorite = function _callee4(req, res) {
  var favoriteId, productId, updatedFavorite;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          favoriteId = req.params.favoriteId;
          productId = req.body.productId;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(prisma.favorite.update({
            where: {
              id: parseInt(favoriteId)
            },
            data: {
              productId: productId
            }
          }));

        case 5:
          updatedFavorite = _context4.sent;
          res.json(updatedFavorite);
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          console.error("Error updating favorite:", _context4.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 9]]);
}; // Controller function to delete a favorite


exports.deleteFavorite = function _callee5(req, res) {
  var favoriteId;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          favoriteId = req.params.favoriteId;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(prisma.favorite["delete"]({
            where: {
              id: parseInt(favoriteId)
            }
          }));

        case 4:
          res.json({
            message: "Favorite deleted successfully"
          });
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          console.error("Error deleting favorite:", _context5.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7]]);
};