const User = require('../Models/UserModel');

// Fetch user profile by userId
const getUserProfile = async (req, res) => {
    const { userId } = req.query;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            fullName: user.fullName,
            email: user.email,
            department: user.department,
            employmentId: user.employmentId,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getUserProfile };
