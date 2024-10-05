const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("token", token)
    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded ", decoded)
        req.user = decoded;  // attaching user info to request object
        
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user.role !== 'AdminUser') {
        console.log("Access denied")
        return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next();
};

module.exports = { protect, adminOnly };
