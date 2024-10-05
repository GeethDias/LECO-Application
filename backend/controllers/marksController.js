const Marks = require('../Models/MarksModel');

// Fetch user's marks by userId
const getUserMarks = async (req, res) => {
    const { userId } = req.query;

    try {
        console.log("user id, ", userId)
        const marks = await Marks.find({ userId });
        console.log("Marks ", marks)

        if (!marks.length) {
            return res.status(404).json({ message: 'No marks found for this user' });
        }

        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add user's marks by userId
const addUserMarks = async (req, res) => {
    const { userId, moduleId, moduleName, newMarks } = req.body;
    console.log("user id ", userId, "\nmodule id", moduleId,"\nmoduleName", moduleName, "\nnew Marks", newMarks)
    // Check if required fields are provided
    if (!userId || !moduleId || !moduleName || newMarks == null) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if marks already exist for this user and module
        const existingMarks = await Marks.findOne({ userId, moduleId });

        let previousMarks = 0; // Default value for previousMarks if no existing marks

        if (!existingMarks) {
            // No existing marks found, so create a new entry
            const newMarksEntry = new Marks({
                userId,
                moduleId,
                moduleName,
                previousMarks: 0, // No previous marks as it's a new entry
                newMarks
            });

            // Save to database
            const savedMarks = await newMarksEntry.save();
            return res.status(201).json({ message: 'New marks added successfully', data: savedMarks });
        } else {
            // Existing marks found, update the existing entry
            previousMarks = existingMarks.newMarks;

            // Update the existing marks with new marks and previous marks
            const updatedMarks = await Marks.findOneAndUpdate(
                { userId, moduleId },
                {
                    previousMarks: previousMarks,
                    newMarks: newMarks
                },
                { new: true } // Return the updated document
            );

            return res.status(200).json({ message: 'Marks updated successfully', data: updatedMarks });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getUserMarks, addUserMarks };