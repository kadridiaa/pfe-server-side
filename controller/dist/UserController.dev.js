"use strict";

// controllers/userController.js
var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var _require = require("@prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.loginUser = function _callee(req, res) {
  var _req$body, email, password, user, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password; // Find the user by email

          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.user.findUnique({
            where: {
              email: email
            }
          }));

        case 4:
          user = _context.sent;
          console.log(user); // Check if the user exists and the password is correct

          _context.t0 = !user;

          if (_context.t0) {
            _context.next = 11;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 10:
          _context.t0 = !_context.sent;

        case 11:
          if (!_context.t0) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            error: "Invalid credentials."
          }));

        case 13:
          // Generate a JWT token for the user
          token = jwt.sign({
            userId: user.id,
            email: user.email
          }, process.env.jwt); // Send the token in the response

          res.json({
            token: token,
            user: {
              id: user.id
            }
          });
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](0);
          console.error("Login error:", _context.t1);
          res.status(500).json({
            error: "Internal server error."
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}; // Get all users


exports.getAllUsers = function _callee2(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.user.findMany());

        case 3:
          users = _context2.sent;
          res.json(users);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching users:", _context2.t0);
          res.status(500).json({
            error: "Internal Server Error"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Get user by ID


exports.getUserById = function _callee3(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = parseInt(req.params.id);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.user.findUnique({
            where: {
              id: userId
            }
          }));

        case 4:
          user = _context3.sent;

          if (user) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: "User not found"
          }));

        case 7:
          res.json(user);
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.error("Error fetching user:", _context3.t0);
          res.status(500).json({
            error: "Internal Server Error"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // Create a new user


exports.createUser = function _callee4(req, res) {
  var _req$body2, firstName, lastName, username, email, password, isAdmin, hashedPassword, newUser, token;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, username = _req$body2.username, email = _req$body2.email, password = _req$body2.password, isAdmin = _req$body2.isAdmin; // Hash the password

          _context4.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 3:
          hashedPassword = _context4.sent;
          _context4.prev = 4;
          _context4.next = 7;
          return regeneratorRuntime.awrap(prisma.user.create({
            data: {
              firstName: firstName,
              lastName: lastName,
              username: username,
              email: email,
              password: hashedPassword,
              isAdmin: isAdmin
            }
          }));

        case 7:
          newUser = _context4.sent;
          // Generate JWT token
          token = jwt.sign({
            userId: newUser.id
          }, "your_secret_key", {
            expiresIn: "1h"
          });
          res.json({
            token: token
          });
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](4);
          console.error("Error creating user:", _context4.t0);
          res.status(500).json({
            error: "Internal server error"
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[4, 12]]);
}; // Update user by ID


exports.updateUser = function _callee5(req, res) {
  var userId, _req$body3, username, email, firstName, lastName, isAdmin, updatedUser;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          userId = parseInt(req.params.id);
          _req$body3 = req.body, username = _req$body3.username, email = _req$body3.email, firstName = _req$body3.firstName, lastName = _req$body3.lastName, isAdmin = _req$body3.isAdmin;
          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(prisma.user.update({
            where: {
              id: userId
            },
            data: {
              username: username,
              email: email,
              firstName: firstName,
              lastName: lastName,
              isAdmin: isAdmin
            }
          }));

        case 5:
          updatedUser = _context5.sent;
          res.json(updatedUser);
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          console.error("Error updating user:", _context5.t0);
          res.status(500).json({
            error: "Internal Server Error"
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 9]]);
}; // Delete user by ID


exports.deleteUser = function _callee6(req, res) {
  var userId;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          userId = parseInt(req.params.id);
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(prisma.user["delete"]({
            where: {
              id: userId
            }
          }));

        case 4:
          res.status(204).end();
          _context6.next = 11;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](1);
          console.error("Error deleting user:", _context6.t0);
          res.status(500).json({
            error: "Internal Server Error"
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 7]]);
};