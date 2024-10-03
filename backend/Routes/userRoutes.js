const express = require('express');
const { getUserProfile, getUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Route to get all users
router.get('/users', getUsers);

// Route to delete a user
router.delete('/users/:id', deleteUser);

// Route to fetch user profile
router.get('/profile', getUserProfile);

module.exports = router;
