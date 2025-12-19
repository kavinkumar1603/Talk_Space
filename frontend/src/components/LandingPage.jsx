import React, { useState } from 'react';
import {
    MessageSquare,
    ArrowRight,
    Menu,
    X,
    MoreHorizontal,
    Smile,
    Paperclip,
    Send,
    CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * LandingPage Component
 * The public-facing home page of the application.
 * Features a hero section, feature highlights, and navigation to Login/Signup.
 */
const LandingPage = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden flex flex-col">

            {/* Navigation */}
            <nav className="flex-none w-full z-50 py-5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                            <MessageSquare size={20} strokeWidth={3} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-zinc-900">TalkSpace</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => navigate('/login')} className="text-sm font-semibold text-zinc-600 hover:text-zinc-900">
                            Log in
                        </button>
                        <button onClick={() => navigate('/signup')} className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-800 shadow-lg active:scale-95">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-zinc-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 shadow-xl md:hidden z-50">
                        <button onClick={() => navigate('/login')} className="text-base font-medium text-zinc-600">Log in</button>
                        <button onClick={() => navigate('/signup')} className="bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold">
                            Get Started
                        </button>
                    </div>
                )}
            </nav>

            {/* Main Content (FIXED HEIGHT) */}
            <main className="flex-1 flex items-center relative overflow-hidden">

                {/* Background Blobs */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-[-15%] left-[-15%] w-[420px] h-[420px] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-[-15%] right-[-15%] w-[520px] h-[520px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                v2.0 is now live
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-5 leading-tight">
                            Connect with your team, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                                without the noise.
                            </span>
                        </h1>

                        <p className="text-base text-zinc-500 mb-8 max-w-lg">
                            The communication platform designed for focus.
                            Real-time messaging and seamless collaboration tools.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => navigate('/signup')} className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold text-base flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20">
                                Start for free <ArrowRight size={18} />
                            </button>
                            <button onClick={() => navigate('/demo')} className="bg-white text-zinc-900 border border-zinc-200 px-7 py-3.5 rounded-xl font-bold text-base hover:bg-zinc-50">
                                View Demo
                            </button>
                        </div>

                        <div className="mt-6 flex items-center gap-6 text-sm text-zinc-400">
                            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> No credit card</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> 14-day trial</span>
                        </div>
                    </div>

                    {/* RIGHT CHAT VISUAL (HEIGHT FIXED) */}
                    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">

                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-white rounded-[2.5rem] rotate-3 scale-105 opacity-50 -z-10"></div>

                        <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden">
                            <div className="px-5 py-3 border-b border-zinc-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">JD</div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900 text-sm">John Doe</h3>
                                        <p className="text-xs text-indigo-500">Typing…</p>
                                    </div>
                                </div>
                                <MoreHorizontal size={18} className="text-zinc-400" />
                            </div>

                            <div className="p-5 bg-slate-50/50 h-[300px] flex flex-col gap-4">
                                <div className="text-[10px] text-zinc-400 text-center font-bold">Today</div>

                                <div className="bg-white border border-zinc-100 p-3 rounded-2xl text-sm text-zinc-600 max-w-[80%]">
                                    The new dashboard layout looks amazing! 🚀
                                </div>

                                <div className="bg-zinc-900 p-3 rounded-2xl text-sm text-white max-w-[80%] ml-auto">
                                    Glad you like it! We focused on simplicity.
                                </div>

                                <div className="mt-auto bg-white border border-zinc-200 rounded-xl p-2 flex items-center gap-2">
                                    <Smile size={18} className="text-zinc-400" />
                                    <span className="text-sm text-zinc-300 flex-1">Type your message…</span>
                                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                                        <Send size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="flex-none py-4 text-center">
                <p className="text-xs text-zinc-400">
                    © 2025 TalkSpace Inc. Crafted for focus.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
