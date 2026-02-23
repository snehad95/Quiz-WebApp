const express  = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { getProfile } = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");


router.get("/profile", verifyToken, getProfile);

router.post("/register", register);
router.post("/login", login);

module.exports = router;