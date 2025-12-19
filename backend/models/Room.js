/**
 * Room Model
 * Defines the structure for room documents in the 'Room' collection.
 */
const mongoose = require('mongoose');

// Define the schema for a Room
const RoomSchema = new mongoose.Schema({
    // Unique identifier for the room (e.g., a 6-character code)
    roomId: {
        type: String,
        required: true,
        unique: true
    },
    // Name of the group or topic for the room
    groupName: {
        type: String,
        required: true
    },
    // Maximum number of members allowed in the room
    maxMembers: {
        type: Number,
        required: true
    },
    // Timestamp for when the room was created
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Room', RoomSchema);
