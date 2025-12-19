const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", // Allow connection from any frontend
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    // Event: User joins a room
    socket.on("join_room", (data) => {
        const { roomId, username } = data;
        socket.join(roomId);

        // Store user info in socket session for disconnect handling
        socket.userData = { roomId, username };

        console.log(`User ${username} joined room: ${roomId}`);

        // Notify others in the room
        socket.to(roomId).emit("receive_message", {
            message: `${username} has joined the room`,
            username: "System",
        });
    });

    // Event: User sends a message
    socket.on("send_message", (data) => {
        const { roomId, message, username } = data;

        // Broadcast message to everyone in the room (including sender if needed, but usually just others. 
        // Requirement says "received by everyone in the same room". 
        // Usually 'to' excludes sender. 'io.in().emit()' includes sender.
        // Let's use io.in(roomId).emit() so the sender also gets confirmation if they want, 
        // or socket.to(roomId).emit() if they handle their own display. 
        // Simple chat apps often want the echo back or just display locally.
        // I'll use io.to(roomId).emit() to ensure consistency for everyone.
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
            // Notify room that user left
            socket.to(roomId).emit("receive_message", {
                message: `${username} has left the room`,
                username: "System",
            });
        }
    });
});

server.listen(3001, () => {
    console.log("Socket.IO Server running on port 3001");
});
