// Basic initial dependencies to start the server connection
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001;
// Each instance of app, use express middleware
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Listen up!
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}.`)
    });
});
