import React from 'react';
import { ArrowRight, MessageSquare, MoreHorizontal, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">

            {/* Left Section */}
            <div className="w-full lg:w-[55%] flex flex-col h-screen relative z-10 bg-[#FAFAFA]">

                {/* Header */}
                <header className="flex-none p-8 lg:p-12 flex items-center gap-3">
                    <div className="w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-zinc-900/10">
                        <MessageSquare size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-zinc-900">
                        TalkSpace
                    </span>
                </header>

                {/* Main Content */}
                <main className="flex-grow flex flex-col justify-center px-8 lg:px-24 w-full max-w-4xl mx-auto">

                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 w-fit">
                        <span className="flex h-2 w-2 relative">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            v2.0 Now Live
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-8">
                        <span className="block text-zinc-900">Focus on</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                            Context.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
                        Experience the clarity of monochrome messaging. Designed for professionals who value focus over noise. Secure, fast, and elegantly simple.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20 ring-4 ring-transparent hover:ring-zinc-100 cursor-pointer"
                        >
                            Start Chatting <ArrowRight size={20} />
                        </button>

                        <button
                            onClick={() => navigate('/login')}
                            className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-zinc-300 transition-all shadow-sm cursor-pointer"
                        >
                            Log In
                        </button>
                    </div>

                    <div className="mt-16 flex items-center gap-8 text-zinc-400">
                        <div className="flex items-center gap-2">
                            <Shield size={18} />
                            <span className="text-sm font-semibold">End-to-End Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={18} />
                            <span className="text-sm font-semibold">Lightning Fast</span>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="flex-none p-8 lg:p-12 text-sm text-zinc-400 font-medium">
                    © 2025 TalkSpace Inc. — Crafted for focus.
                </footer>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[45%] bg-zinc-100 relative flex items-center justify-center p-8 lg:p-20 overflow-hidden min-h-[500px] lg:min-h-screen">

                {/* Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zinc-200/50 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-zinc-300/50 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-zinc-200/50 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(90deg,#e4e4e7_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
                </div>

                {/* Chat UI Mock */}
                <div className="relative w-full max-w-md">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-zinc-400/20 overflow-hidden border border-zinc-100">

                        {/* Header */}
                        <div className="bg-zinc-50 px-6 py-4 flex items-center justify-between border-b border-zinc-100">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-500">JD</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center text-[10px] font-bold text-zinc-600">AS</div>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-zinc-900">Design Team</h3>
                                    <p className="text-[10px] text-zinc-500 font-medium">2 active now</p>
                                </div>
                            </div>
                            <MoreHorizontal size={18} className="text-zinc-400" />
                        </div>

                        {/* Messages */}
                        <div className="p-6 space-y-6 bg-white min-h-[300px]">

                            <div className="text-center text-xs text-zinc-300 font-medium my-4">
                                Today 9:41 AM
                            </div>

                            <div className="flex items-end gap-3">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-100">
                                    <span className="text-[10px] font-bold text-zinc-500">JD</span>
                                </div>
                                <div className="bg-zinc-100 px-5 py-3 rounded-2xl rounded-bl-sm text-zinc-700 text-sm max-w-[85%]">
                                    The monochrome updated palette looks incredible. <span className="font-semibold text-zinc-900">Clean and distraction-free.</span>
                                </div>
                            </div>

                            <div className="flex items-end gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold">
                                    ME
                                </div>
                                <div className="bg-zinc-900 px-5 py-3 rounded-2xl rounded-br-sm text-zinc-50 text-sm max-w-[85%]">
                                    Exactly. It really helps focus on the content.
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-zinc-100 bg-white">
                            <div className="h-12 bg-zinc-50 rounded-full border border-zinc-200 flex items-center px-4 justify-between">
                                <span className="text-sm text-zinc-400">Type a message...</span>
                                <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
