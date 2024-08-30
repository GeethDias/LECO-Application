const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usermodel = new Schema({
    EmploymentID: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('usermodel', usermodel)