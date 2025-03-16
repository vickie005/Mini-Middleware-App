const express = require('express');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const validateUser = require('./middleware/validateUser');
const limiter = require('./middleware/rateLimiter');

const app = express();
const PORT = 3000;

//built-in middleware
app.use(express.json());

//global middleware
app.use(logger);
app.use(limiter); //applies rate limiting to all route

app.get('/dashboard', auth, (req, res) => {
    res.send(`Hello, ${req.user}! Welcome to your dashboard.`);
});

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.post('/register', validateUser, (req, res) => {
    const { name, email } = req.body;
    res.status(201).send(`User ${name} with email ${email} registered successfully!`);
});

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});