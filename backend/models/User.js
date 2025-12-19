/**
 * User Model
 * Defines the structure for user documents in the 'User' collection.
*/
const mongoose = require('mongoose');

// Define the schema for a User
const UserSchema = new mongoose.Schema({
    // User's full name
    name: { type: String, required: true },
    // User's email address (must be unique)
    email: { type: String, required: true, unique: true },
    // Hashed password for security
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
