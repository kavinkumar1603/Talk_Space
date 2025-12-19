/**
 * Database Configuration
 * Handles the connection to MongoDB using Mongoose.
 */
const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database.
 * Logs a success message upon connection or an error message if it fails.
 */
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected to Talkspace');
    } catch (err) {
        // Log connection errors and exit the process with failure code
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
