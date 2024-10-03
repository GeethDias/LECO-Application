const express = require('express');
const { getUserMarks } = require('../controllers/marksController');
const router = express.Router();

// Route to fetch user marks
router.get('/marks', getUserMarks);

module.exports = router;
