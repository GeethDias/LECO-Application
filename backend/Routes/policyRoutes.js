const express = require('express')
const { protect, adminOnly } = require('../Middleware/authMiddleware');
const { getPolicy, updatePolicy } = require('../controllers/policyController');


const router = express.Router()


router.get('/', getPolicy)
router.put('/', protect, adminOnly, updatePolicy)


module.exports = router
