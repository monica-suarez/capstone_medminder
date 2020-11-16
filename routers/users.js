const express = require("express");
const usersController = require("../controllers/users");
const { authenticate } = require("../middleware");
const router = express.Router();

router.post("/signup", authenticate, usersController.createUser);
