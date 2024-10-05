const express = require('express');
const { getUserMarks, addUserMarks } = require('../controllers/marksController');
const router = express.Router();

// Route to fetch user marks
router.get('/marks', getUserMarks);

// Route to add user marks
router.post('/marks', addUserMarks);




module.exports = router