const express = require("express");
const usersController = require("../controllers/users");
// const { authenticate } = require('../middleware');
const router = express.Router({ mergeParams: true });

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

// router.get("/:username", usersController.login);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUserById);

router.delete("/:username", usersController.deleteUserByUsername);

module.exports = router;
