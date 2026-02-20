const express = require("express");
const router = express.Router();
const { createQuiz, addQuestion } = require("../controllers/quizController");
const { verifyToken } = require("../middleware/authMiddleware");
const { getAllQuizzes } = require("../controllers/quizController");

router.post("/create", verifyToken, createQuiz);
router.post("/add-question", verifyToken, addQuestion);
router.get("/all", getAllQuizzes);

module.exports = router;