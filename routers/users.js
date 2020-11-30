const express = require("express");
const usersController = require("../controllers/users");
// const { authenticate } = require('../middleware');
const router = express.Router();

router.get("/users", usersController.getAllUsers);

router.get("/users/:id", usersController.getUserById);

router.get("users/:username", usersController.login);

router.post("/users", usersController.createUser);

router.put("/users/:id", usersController.updateUserById);

router.delete("/users/:username", usersController.deleteUserByUsername);

module.exports = router;
