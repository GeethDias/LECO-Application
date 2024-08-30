const express = require('express')
const {
  createquestion,
  getQuestions,
  deleteQuestions
} = require('../controllers/questionController')

const router = express.Router()

// GET ALL question
router.get('/', getQuestions)

// GET a single workout
//router.get('/:id', getWorkout)

// POST a new question
router.post('/', createquestion)

// DELETE a question
router.delete('/:id', deleteQuestions)

// Update a workout
//router.patch('/:id', updateWorkout)

module.exports = router
