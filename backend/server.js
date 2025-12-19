/**
 * Main Server Entry Point
 * Sets up the Express server, connects to the database, and defines routes.
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
// Middleware to enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Routes
// Define Application Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/rooms', require('./routes/roomRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
