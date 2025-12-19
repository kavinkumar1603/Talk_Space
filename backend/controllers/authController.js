/**
 * Auth Controller
 * Handles user registration and authentication logic.
 */
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Registers a new user.
 * 1. Checks if the user already exists.
 * 2. Hashes the password.
 * 3. Saves the new user to the database.
 * 4. Generates and returns a JWT token.
 * 
 * @param {Object} req - The request object containing name, email, and password.
 * @param {Object} res - The response object.
 */
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            token,
            user: { id: user._id, name, email },
            message: "User created successfully!"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Authenticates a user (Login).
 * 1. Checks if the user exists.
 * 2. Validates the password.
 * 3. Generates and returns a JWT token.
 * 
 * @param {Object} req - The request object containing email and password.
 * @param {Object} res - The response object.
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            token,
            user: { id: user._id, name: user.name, email },
            message: "Login successful!"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {register,login};