// Use mongoose
const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_media';

connect(connectionString, {
    // New parser and topology - ensure new method used
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
