const express = require('express');
const router = express.Router();
// Import room controller functions
const { createRoom, getRoom } = require('../controllers/roomController');

/**
 * @route   POST /api/rooms
 * @desc    Create a new room
 * @access  Public
 */
router.post('/', createRoom);

/**
 * @route   GET /api/rooms/:roomId
 * @desc    Get room details by ID
 * @access  Public
 */
router.get('/:roomId', getRoom);

module.exports = router;
