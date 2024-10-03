const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const router = express.Router();

// Route to fetch user profile
router.get('/profile', getUserProfile);

module.exports = router;
