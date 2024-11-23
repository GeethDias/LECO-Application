const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    department: String,
    content: String,
    videoPath: String,
    imagePath: String,
    uploadedDate: { type: Date, default: Date.now },
});

const Module = mongoose.model('Module', moduleSchema);
module.exports = Module