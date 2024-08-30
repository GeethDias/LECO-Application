const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    moduleId: String,          // ID of the module
    questionText: String,      // The quiz question
    options: [String],         // Possible answer options
    correctAnswer: String      // The correct answer
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
