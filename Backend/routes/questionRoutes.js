const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// add question
router.post("/", async (req, res) => {
  const question = new Question(req.body);
  const saved = await question.save();
  res.json(saved);
});

// get all questions
router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

module.exports = router;