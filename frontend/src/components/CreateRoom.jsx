import React, { useState } from "react";
import { MessageSquare, Copy, ArrowRight, Users, Type } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

/**
 * CreateRoom Component
 * Allows users to create a new room by specifying a group name and member limit.
 * It interacts with the backend to generate a unique room code.
 */
const CreateRoom = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");
    const [groupName, setGroupName] = useState("");
    const [maxMembers, setMaxMembers] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    /**
   * Handles the room creation process.
   * Validates inputs, sends a request to the backend, and displays the generated room code.
   */
    const handleCreateRoom = async () => {
        if (!groupName || !maxMembers) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:3000/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ groupName, maxMembers: parseInt(maxMembers) })
            });
            if (response.ok) {
                const data = await response.json();
                setRoomCode(data.roomId);
                toast.success("Room created successfully!");
            } else {
                console.error("Failed to create room");
                toast.error("Failed to create room.");
            }
        } catch (error) {
            console.error("Error creating room:", error);
            toast.error("Error creating room.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(roomCode);
        toast.success("Room code copied to clipboard!");
    };

    const handleEnterRoom = () => {
        if (roomCode) navigate(`/room/${roomCode}`);
    };

    return (
        <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">

            {/* LEFT SIDE — Brand / Info */}
            <div className="hidden lg:flex flex-col justify-center px-16 bg-white">

                {/* Logo */}
                <div
                    className="flex items-center gap-3 mb-10 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
                        <MessageSquare size={22} />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900">
                        TalkSpace
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl font-extrabold text-zinc-900 leading-tight max-w-xl">
                    Your room is ready.
                    <br />
                    <span className="text-indigo-600">
                        Invite others to join.
                    </span>
                </h1>

                <p className="mt-6 text-lg text-zinc-600 max-w-lg">
                    Share the room code with your teammates to start a focused
                    real-time conversation.
                </p>
            </div>

            {/* RIGHT SIDE — Form & Room Code Card */}
            <div className="flex items-center justify-center bg-indigo-50 px-6">

                <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl shadow-xl p-10 text-center">

                    <h2 className="text-3xl font-bold text-zinc-900">
                        {roomCode ? "Room Created!" : "Create a room"}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500">
                        {roomCode ? "Share this code to invite others" : "Enter details to generate a room code"}
                    </p>

                    {!roomCode ? (
                        <div className="mt-8 space-y-4">
                            <div className="text-left space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 ml-1">Group Name</label>
                                <div className="relative">
                                    <Type className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                    <input
                                        type="text"
                                        value={groupName}
                                        onChange={(e) => setGroupName(e.target.value)}
                                        placeholder="Enter group name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                                    />
                                </div>
                            </div>

                            <div className="text-left space-y-2">
                                <label className="text-sm font-semibold text-zinc-700 ml-1">Number of Members</label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                    <input
                                        type="number"
                                        value={maxMembers}
                                        onChange={(e) => setMaxMembers(e.target.value)}
                                        placeholder="Enter max members"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCreateRoom}
                                disabled={isLoading}
                                className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 disabled:opacity-50 cursor-pointer"
                            >
                                {isLoading ? "Generating..." : "Generate Room Code"}
                                {!isLoading && <ArrowRight size={18} />}
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Room Code */}
                            <div className="mt-10 bg-zinc-50 border border-zinc-200 rounded-2xl py-6 px-4">
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                                    Room Code
                                </p>
                                <div className="text-4xl font-extrabold tracking-widest text-indigo-600">
                                    {roomCode}
                                </div>
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopy}
                                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-300 font-semibold text-zinc-700 hover:bg-zinc-50 transition cursor-pointer"
                            >
                                <Copy size={18} />
                                Copy room code
                            </button>

                            {/* Enter Room */}
                            <button
                                onClick={handleEnterRoom}
                                className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 cursor-pointer"
                            >
                                Enter room
                                <ArrowRight size={18} />
                            </button>
                        </>
                    )}

                    {/* Back */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mt-6 text-sm text-zinc-500 hover:text-zinc-700 cursor-pointer"
                    >
                        ← Back to dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateRoom;
