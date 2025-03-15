const express = require('express');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

//built-in middleware
app.use(express.json());

//custom middleware
app.use(logger); //logs every request

//protected route
app.get('/dashboard', auth, (req, res) => {
    res.send(`Hello, ${req.user}! Welcome to your dashboard.`);
});

//public route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send('Internal server error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});