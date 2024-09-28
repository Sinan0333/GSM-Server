const jwt = require('jsonwebtoken');

 exports.verifyToken = (token) => {
    if (!process.env.JWT_SECRET) throw new Error('JWT secret is not defined');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded ;
    } catch (error) {
        if(error.name === 'TokenExpiredError') throw new Error('Token expired');
        throw new Error('Token verification failed');
    }
};