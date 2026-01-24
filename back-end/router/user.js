const express = require("express");
const router = express.Router();

const { userLogin, userRegister, showAllUsers } = require("../controller/user");

// User login
router.post("/login", userLogin);

// User registration
router.post("/register", userRegister);

// Show all users (for testing purposes)
router.get("/", showAllUsers);

module.exports = router;
