const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 100, // 1 minute
    max: 5, // limit each IP to 5 rrquests per minute
    message: 'Too many requests,please try again later.',
});

module.exports = limiter;