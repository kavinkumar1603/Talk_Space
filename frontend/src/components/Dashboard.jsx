import React, { useState } from "react";
import { MessageSquare, Plus, LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Dashboard Component
 * The main hub for the user after logging in.
 * Provides options to create a NEW room or JOIN an existing one.
 */
const Dashboard = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
        navigate("/");
    };

    // Navigation handler for creating a room
    const handleCreateRoom = () => {
        navigate("/CreateRoom");
    };

    // Navigation handler for joining a room
    const handleJoinRoom = () => {
        if (!roomCode.trim()) return;
        navigate(`/room/${roomCode.trim()}`);
    };

    return (
        <div className="min-h-screen w-full bg-white font-sans flex flex-col overflow-x-hidden">

            {/* Header */}
            <header className="flex-none py-5 px-6 lg:px-8 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                            <MessageSquare size={20} />
                        </div>
                        <span className="text-xl font-bold text-zinc-900">
                            TalkSpace
                        </span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-zinc-500 hover:text-red-600 font-medium transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="hidden sm:inline">Log out</span>
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center px-6">

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Create Room */}
                    <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl p-10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <Plus size={22} />
                            </div>

                            <h2 className="text-2xl font-bold text-zinc-900 mb-2" onClick={handleCreateRoom}>
                                Create a room
                            </h2>
                            <p className="text-zinc-600">
                                Start a new conversation and invite others using a room code.
                            </p>
                        </div>

                        <button
                            onClick={handleCreateRoom}
                            className="mt-8 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Create Room
                        </button>
                    </div>

                    {/* Join Room */}
                    <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl p-10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-zinc-100 text-zinc-700 rounded-xl flex items-center justify-center mb-6">
                                <LogIn size={22} />
                            </div>

                            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                                Join a room
                            </h2>
                            <p className="text-zinc-600">
                                Enter an existing room code to join the conversation.
                            </p>

                            <input
                                type="text"
                                placeholder="Enter room code"
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                className="mt-6 w-full px-4 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 outline-none tracking-widest text-center font-semibold"
                            />
                        </div>

                        <button
                            onClick={handleJoinRoom}
                            className="mt-8 bg-zinc-900 text-white py-3 rounded-xl font-semibold hover:bg-zinc-800 transition"
                        >
                            Join Room
                        </button>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="flex-none py-4 text-center">
                <p className="text-xs text-zinc-400">
                    © 2025 TalkSpace Inc.
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
