const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    moduleId: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to the Module model
        ref: 'Module',                        // Name of the model to reference
        required: true                        // Ensure that every question is linked to a module
    },
    moduleName: { type: String, required: true },
    previousMarks: { type: Number, default: 0 },
    newMarks: { type: Number, default: 0 }
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;