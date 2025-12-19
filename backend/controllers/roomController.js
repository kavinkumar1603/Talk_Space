/**
 * Room Controller
 * Handles logic for creating and retrieving room details.
 */
const Room = require('../models/Room');

/**
 * Creates a new room.
 * 1. Generates a unique 6-character room code.
 * 2. Saves the room with group name and max members to the database.
 * 
 * @param {Object} req - The request object containing groupName and maxMembers.
 * @param {Object} res - The response object returning the roomId.
 */
exports.createRoom = async (req, res) => {
    try {
        const { groupName, maxMembers } = req.body;

        // Generate a random 6-character code
        const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();

        const room = new Room({
            roomId,
            groupName,
            maxMembers
        });

        await room.save();

        res.json({ roomId });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * Retrieves room details by Room ID.
 * 
 * @param {Object} req - The request object containing the roomId parameter.
 * @param {Object} res - The response object returning the room details.
 */
exports.getRoom = async (req, res) => {
    try {
        console.log(`Searching for room with ID: ${req.params.roomId}`);
        const room = await Room.findOne({ roomId: req.params.roomId });

        if (!room) {
            console.log(`Room not found in DB for ID: ${req.params.roomId}`);
            return res.status(404).json({ msg: 'Room not found' });
        }

        console.log(`Room found: ${room.roomId}`);
        res.json(room);
    } catch (err) {
        console.error("Error in getRoom:", err.message);
        res.status(500).send('Server Error');
    }
};
