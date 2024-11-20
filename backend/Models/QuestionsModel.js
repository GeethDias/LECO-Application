const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    moduleId: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to the Module model
        ref: 'Module',                        // Name of the model to reference
        required: true                        // Ensure that every question is linked to a module
    },
    questionText: String,      // The quiz question
    options: [String],         // Possible answer options
    correctAnswer: String, 
    content: String     // The correct answer
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
