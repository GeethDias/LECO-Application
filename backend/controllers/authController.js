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

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // Create and send token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, role: user.role, userid:user._id });
};

module.exports = { registerUser, loginUser };
