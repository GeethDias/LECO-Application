const mongoose = require('mongoose')
const Policy = require('../Models/PolicyModel')


//Get current policy
const getPolicy = async (req, res) => {
    try {
      const policy = await Policy.findOne();
      if (!policy) {
        return res.status(404).json({ message: 'Policy not found' });
      }
      res.json(policy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const updatePolicy = async (req, res) => {
    try {
      const { content } = req.body;
  
      let policy = await Policy.findOne();
      if (!policy) {
        // Create a new document if none exists
        policy = new Policy({ content });
      } else {
        // Update existing document
        policy.content = content;
        policy.lastUpdated = new Date();
      }
  
      await policy.save();
      res.json({ message: 'Policy updated successfully', policy });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


module.exports = { getPolicy, updatePolicy }