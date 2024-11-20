const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Report = new Schema({
    EmploymentID: {
        type: String,
        required: true
    },
    Report: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
    }
}, { timestamps: true })


module.exports = mongoose.model('Report', Report)