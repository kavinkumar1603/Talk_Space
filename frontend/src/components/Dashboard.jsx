import React from 'react';
import { MessageSquare, History, Plus, ArrowRight, LogOut, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">

            {/* Header */}
            <header className="px-8 py-6 border-b border-zinc-100 bg-white/50 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-zinc-900/10">
                        <MessageSquare size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        TalkSpace
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-zinc-100 rounded-full border border-zinc-200">
                        <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">
                            JD
                        </div>
                        <span className="text-sm font-semibold text-zinc-700">
                            John Doe
                        </span>
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">

                {/* Greeting */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">
                        Good morning, John.
                    </h1>
                    <p className="text-zinc-500 text-lg font-medium">
                        Ready to collaborate? Choose how you'd like to connect.
                    </p>
                </div>

                {/* Action Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Join Chat */}
                    <div className="group bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Plus size={120} />
                        </div>

                        <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-zinc-900/20 group-hover:scale-110 transition-transform">
                            <Plus size={28} strokeWidth={3} />
                        </div>

                        <h2 className="text-2xl font-bold mb-3 text-zinc-900">
                            Join a Chat
                        </h2>
                        <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
                            Start a new conversation or join an existing session with a secure room ID.
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">
                            Connect now <ArrowRight size={18} />
                        </div>
                    </div>

                    {/* Chat History */}
                    <div className="group bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <History size={120} />
                        </div>

                        <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <History size={28} strokeWidth={2.5} />
                        </div>

                        <h2 className="text-2xl font-bold mb-3 text-zinc-900">
                            Chat History
                        </h2>
                        <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
                            Access your archives, search past conversations, and review shared files.
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">
                            View archives <ArrowRight size={18} />
                        </div>
                    </div>
                </div>

                {/* Recent Sessions */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-zinc-900">
                            Recent Sessions
                        </h3>

                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                                size={16}
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-white border border-zinc-200 rounded-lg pl-9 pr-4 py-2 text-sm font-medium focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-lg shadow-zinc-100">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="group flex items-center justify-between p-5 border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors last:border-0 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs ring-4 ring-white">
                                        DS
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 text-sm">
                                            Design Sprint Review
                                        </h4>
                                        <p className="text-xs text-zinc-400 font-medium">
                                            Last active 2 hours ago
                                        </p>
                                    </div>
                                </div>

                                <ArrowRight
                                    size={16}
                                    className="text-zinc-300 group-hover:text-zinc-900 transition-colors opacity-0 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Dashboard;
