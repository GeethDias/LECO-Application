// Add this line at the top to import protect middleware
const { protect, adminOnly } = require('../Middleware/authMiddleware');

const express = require('express')
const {
  createquestion,
  getQuestions,
  deleteQuestions
} = require('../controllers/questionController')


const router = express.Router()

// GET ALL question
// router.get('/', getQuestions)
router.get('/', protect, getQuestions);

// POST a new question
// router.post('/', createquestion)
router.post('/', protect, adminOnly, createquestion);

// DELETE a question
// router.delete('/:id', deleteQuestions)
router.delete('/:id', protect, adminOnly, deleteQuestions);

// Update a workout
//router.patch('/:id', updateWorkout)

module.exports = router
