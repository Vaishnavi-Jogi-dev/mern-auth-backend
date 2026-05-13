const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");


// ADMIN ROUTE
router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {

    res.json({
      message: "Welcome Admin"
    });
  }
);


// STUDENT ROUTE
router.get(
  "/student",
  authMiddleware,
  roleMiddleware("student", "admin"),
  (req, res) => {

    res.json({
      message: "Welcome Student"
    });
  }
);