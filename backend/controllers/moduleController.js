const mongoose = require('mongoose')
const Module = require('../Models/ModuleModel')


const createModule = async (req, res) => {
    try {
        const { title, description, department, content } = req.body;
        const moduleData = {
            title,
            description,
            department,
            content,
            videoPath: req.files['video'] ? req.files['video'][0].path : null,
            imagePath: req.files['image'] ? req.files['image'][0].path : null,
        };
                
        const newModule = new Module(moduleData);
        await newModule.save();
        
        res.status(200).json({ message: 'Module uploaded successfully', newModule });
    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error });
    }
};

const getModules = async (req, res) => {
    try {
        const { department } = req.query; // Get department filter from query params
        const filter = department ? { department } : {};
        const modules = await Module.find(filter); // Filter by department if provided
        
        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch modules', error });
    }
};

const getModulesByTitle = async (req, res) => {
    const { moduleId } = req.query;
    console.log("Module ID br", moduleId)
    const modules = await Module.findById(moduleId);
    if (modules) {
        
        res.json(modules);
    } else {
        res.status(404).json({ error: 'Module content not found' });
    }
};


const deleteModules = async (req, res) => {
    const { id } = req.params; // Extract the module ID from request parameters

    try {
        // Find and delete the module by its ID
        const deletedModule = await Module.findByIdAndDelete(id);

        if (!deletedModule) {
            return res.status(404).json({ message: 'Module not found' });
        }

        res.status(200).json({ message: 'Module deleted successfully', module: deletedModule });
    } catch (error) {
        console.error('Error deleting module:', error);
        res.status(500).json({ message: 'An error occurred while deleting the module' });
    }
};


module.exports = { createModule, getModules, getModulesByTitle, deleteModules }