/**
 * Main Server Entry Point
 * Sets up the Express server, connects to the database, and defines routes.
 * Integrates Socket.IO for real-time communication on the same port.
 */
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*", // Allow connection from any frontend
        methods: ["GET", "POST"],
    },
});

// Socket.IO Logic
// Store users per room: Map<roomId, Set<user>> or similar. 
// Let's use an object { roomId: [ { id, username } ] } or Map.
const roomItems = new Map(); // Map<roomId, Array<{id, username, online}>> - Users per room

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    // Event: User joins a room
    socket.on("join_room", (data) => {
        const { roomId, username } = data;
        socket.join(roomId);

        // Store user info in socket session for disconnect handling
        socket.userData = { roomId, username };

        // Add user to room list
        if (!roomItems.has(roomId)) {
            roomItems.set(roomId, []);
        }
        const users = roomItems.get(roomId);

        // check if user already exists in room
        const existingUserIndex = users.findIndex((u) => u.username === username);

        if (existingUserIndex !== -1) {
            // Update existing user's socket ID to the new connection
            users[existingUserIndex].id = socket.id;
            users[existingUserIndex].online = true;
        } else {
            // Add new user
            users.push({ id: socket.id, username, online: true });
        }

        roomItems.set(roomId, users);

        console.log(`User ${username} joined room: ${roomId}`);

        // Notify others in the room
        socket.to(roomId).emit("receive_message", {
            message: `${username} has joined the room`,
            username: "System",
        });

        // Broadcast updated user list
        io.to(roomId).emit("room_users", roomItems.get(roomId));
    });

    // Event: User sends a message
    socket.on("send_message", (data) => {
        const { roomId, message, username } = data;

        // Broadcast message to everyone in the room (including sender)
        io.to(roomId).emit("receive_message", {
            message: message,
            username: username,
        });
    });

    // Event: User disconnects
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
        if (socket.userData) {
            const { roomId, username } = socket.userData;

            // Remove user from room list
            if (roomItems.has(roomId)) {
                let users = roomItems.get(roomId);
                users = users.filter(user => user.id !== socket.id);
                if (users.length === 0) {
                    roomItems.delete(roomId);
                } else {
                    roomItems.set(roomId, users);
                    // Broadcast updated user list
                    io.to(roomId).emit("room_users", users);
                }
            }

            // Notify room that user left
            socket.to(roomId).emit("receive_message", {
                message: `${username} has left the room`,
                username: "System",
            });
        }
    });
});

// Routes
// Define Application Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/rooms', require('./routes/roomRoutes'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server and Socket.IO running on port ${PORT}`));
