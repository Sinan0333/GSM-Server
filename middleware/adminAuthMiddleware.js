const {verifyToken} = require('../utils/jwt');

exports. adminAuthMiddleware = (req, res, next) => {
    const adminToken = req.headers.authorization?.split(' ')[1];
    
    if (!adminToken) {     
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decodedToken = verifyToken(adminToken);

        if (decodedToken.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
        }

        next(); 
    } catch (error) {
            if (error.message === 'Token expired') {  
                return res.status(401).json({ message: 'Unauthorized: Token expired' });
            }
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    return
};