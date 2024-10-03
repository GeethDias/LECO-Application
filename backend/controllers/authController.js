const User = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Register User
const registerUser = async (req, res) => {
    const { fullName, employmentId, email, department, password } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    try {
        const newUser = new User({
            fullName,
            employmentId,
            email,
            department,
            password: hashedPassword,
            role: 'NormalUser'
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message)
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    // Check if user is locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
        user.isLocked = true; // Set isLocked to true if account is still locked
        await user.save();
        return res.status(403).json({ error: `Account locked. Try again after ${new Date(user.lockUntil).toLocaleTimeString()}` });
    }

    // If lockUntil has passed, reset isLocked to false
    if (user.lockUntil && user.lockUntil <= Date.now()) {
        user.isLocked = false;  // Unlock the user after 20 minutes
        user.lockUntil = null;   // Reset lockUntil
        user.failedLoginAttempts = 0; // Reset failed attempts
        await user.save();
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        user.failedLoginAttempts += 1;

        // Lock account if 3 failed attempts are reached
        if (user.failedLoginAttempts >= 3) {
            user.lockUntil = Date.now() + 20 * 60 * 1000; // Lock for 20 minutes
            user.isLocked = true; // Set isLocked to true when locked
            user.failedLoginAttempts = 0;  // Reset failed attempts after locking
        }

        await user.save();
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Reset failed login attempts and lockUntil if login is successful
    user.failedLoginAttempts = 0;
    user.lockUntil = null;
    user.isLocked = false; // Ensure user is unlocked after successful login
    await user.save();

    // Create and send token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, role: user.role, userid: user._id });
};


// Unlock User
const unlockUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the user and unlock their account
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Reset lock and failed login attempts
        user.isLocked = false;
        user.lockUntil = null;
        user.failedLoginAttempts = 0;

        await user.save();

        res.status(200).json({ message: 'User unlocked successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = { registerUser, loginUser, unlockUser };
