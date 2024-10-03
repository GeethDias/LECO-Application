const express = require('express');
const { registerUser, loginUser, unlockUser } = require('../controllers/authController');
const { body } = require('express-validator');
const router = express.Router();

// Register Route
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Enter a valid email'),
        body('password').isLength({ min: 8 }).matches(/[^A-Za-z0-9]/).withMessage('Password must contain at least one special character')
    ],
    registerUser
);

// Login Route
router.post('/login', loginUser);

// Unlock User Route
router.patch('/unlock/:id', unlockUser);

module.exports = router;
