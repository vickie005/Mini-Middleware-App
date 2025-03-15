const auth = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token === 'Bearer mysecrettoken') {
        req.user = 'Victory';
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid or missing token');
    }
};

module.exports = auth;