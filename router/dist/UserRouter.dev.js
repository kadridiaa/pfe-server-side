"use strict";

var express = require("express");

var router = express.Router();

var userrouter = require("../controller/UserController");

router.get("/", userrouter.getAllUsers);
router.get("/:id", userrouter.getUserById);
router.post("/", userrouter.createUser);
router.put("/:id", userrouter.updateUser);
router["delete"]("/:id", userrouter.deleteUser);
router.post("/login", userrouter.loginUser);
module.exports = router;