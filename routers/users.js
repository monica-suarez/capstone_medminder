const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/users", usersController.createUser);

router.put("/users/:id", usersController.updateUserById);

router.delete("users/:username", usersController.deleteUserByUsername);

module.exports = router;
