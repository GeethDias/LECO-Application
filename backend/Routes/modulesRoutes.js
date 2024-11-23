const express = require('express')
const multer = require('multer');
const path = require('path');
const { createModule, getModules, getModulesByTitle, deleteModules } = require('../controllers/moduleController')
const { protect, adminOnly } = require('../Middleware/authMiddleware');

const router = express.Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileType = file.mimetype.split('/')[0];
        if (fileType === 'video') {
            cb(null, './uploads/videos');
        } else if (fileType === 'image') {
            cb(null, './uploads/images');
        } else {
            cb(new Error('Invalid file type'), false);
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

router.post('/upload-module', protect, adminOnly, upload.fields([{ name: 'video' }, { name: 'image' }]), createModule)
router.get('/', protect, getModules)
router.get('/module-content', protect, getModulesByTitle)
router.delete('/:id', protect, adminOnly, deleteModules)

module.exports = router;