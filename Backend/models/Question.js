const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz"
    },
    question: String,
    options: [String],
    correctAnswer: String
});

module.exports = mongoose.model("Question", questionSchema);