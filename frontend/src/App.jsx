/**
 * Main App Component
 * Handles client-side routing and global layout/providers (like Toaster).
 */
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';
import './App.css';

function App() {
    return (
        <Router>
            <Toaster position="top-center" />
            {/* Route Definitions */}
            <Routes>
                {/* Landing Page Route */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/CreateRoom" element={<CreateRoom />} />
                <Route path="/room/:roomId" element={<Room />} />
            </Routes>
        </Router>
    );
}

export default App;
