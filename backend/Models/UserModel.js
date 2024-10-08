const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    employmentId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['NormalUser', 'AdminUser'], default: 'NormalUser' },
    failedLoginAttempts: {
        type: Number,
        default: 0,
    },
    isLocked: { type: Boolean, default: false },
    lockUntil: {
        type: Date,
        default: null,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

