const Marks = require('../Models/MarksModel');

// Fetch user's marks by userId
const getUserMarks = async (req, res) => {
    const { userId } = req.query;

    try {
        const marks = await Marks.find({ userId });

        if (!marks.length) {
            return res.status(404).json({ message: 'No marks found for this user' });
        }

        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getUserMarks };
