const Quiz = require("../models/Quiz");
const Question = require("../models/Question");

// CREATE QUIZ
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({
      title: req.body.title,
      description: req.body.description
    });

    res.json(quiz);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// ADD QUESTION
exports.addQuestion = async (req,res)=>{
  const question = await Question.create({
    quizId: req.body.quizId,
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer
  });

  res.json(question);
};

// GET ALL QUIZZES
exports.getAllQuizzes = async (req,res)=>{
  try{
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch(err){
    res.status(500).json({ msg: "Server error" });
  }
};
