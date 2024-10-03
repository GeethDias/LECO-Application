const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    employmentId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['NormalUser', 'AdminUser'], default: 'NormalUser' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

