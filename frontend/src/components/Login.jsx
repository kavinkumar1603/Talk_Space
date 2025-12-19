import React, { useState } from 'react';
import { MessageSquare, ArrowRight, User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleMode = () => setIsLogin(!isLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 relative overflow-hidden font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-200/40 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-300/40 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute inset-0 bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(90deg,#e4e4e7_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            </div>

            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors z-20 font-medium"
            >
                <ArrowLeft size={20} /> Back
            </button>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-zinc-200 p-8 md:p-12 relative z-10 border border-zinc-100">
                
                <div className="flex justify-center mb-8">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-zinc-900/10">
                        <MessageSquare size={24} strokeWidth={2.5} />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-2">
                        {isLogin ? "Welcome back" : "Create account"}
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium">
                        {isLogin
                            ? "Please enter your details to sign in."
                            : "Join the workspace designed for focus."}
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>

                    {!isLogin && (
                        <div className="relative group">
                            <User
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent block p-4 pl-12 placeholder-zinc-400 transition-all outline-none font-medium"
                            />
                        </div>
                    )}

                    <div className="relative group">
                        <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors"
                            size={20}
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent block p-4 pl-12 placeholder-zinc-400 transition-all outline-none font-medium"
                        />
                    </div>

                    <div className="relative group">
                        <Lock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors"
                            size={20}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent block p-4 pl-12 placeholder-zinc-400 transition-all outline-none font-medium"
                        />
                    </div>

                    {isLogin && (
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
                            >
                                Forgot password?
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-zinc-900 text-white rounded-xl p-4 font-bold text-sm hover:bg-zinc-800 transition-colors shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-2 mt-6 cursor-pointer"
                    >
                        {isLogin ? "Sign In" : "Sign Up"} <ArrowRight size={18} />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
                    <p className="text-zinc-500 text-sm font-medium">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={toggleMode}
                            className="ml-2 text-zinc-900 font-bold hover:underline focus:outline-none cursor-pointer"
                        >
                            {isLogin ? "Sign up" : "Log in"}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;
