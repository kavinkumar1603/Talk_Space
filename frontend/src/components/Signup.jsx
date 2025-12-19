import React, { useState } from "react";
import toast from "react-hot-toast";
import { User, Mail, Lock, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Signup Component
 * Handles new user registration.
 * Collects user details, validates input (e.g., password length), and creates a new account via the backend.
 */
const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Updates form state on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submits the registration form to the backend API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (formData.password.length < 8) {
            const msg = "Password must be at least 8 characters";
            setError(msg);
            toast.error(msg);
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || "Signup failed");
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            toast.success("User created successfully!");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans">

            {/* LEFT SIDE — Brand / Message */}
            <div className="flex flex-col justify-center px-10 sm:px-16 bg-white">

                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                        <MessageSquare size={22} />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900">
                        TalkSpace
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl font-extrabold text-zinc-900 leading-tight max-w-xl">
                    Connect with your team,
                    <br />
                    <span className="text-indigo-600">
                        without the noise.
                    </span>
                </h1>

                <p className="mt-6 text-lg text-zinc-600 max-w-lg">
                    Real-time messaging built for focus.
                    Clean conversations. Seamless collaboration.
                </p>
            </div>

            {/* RIGHT SIDE — Signup Form */}
            <div className="flex items-center justify-center bg-indigo-50 px-6">

                <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl shadow-xl p-10">

                    <h2 className="text-3xl font-bold text-zinc-900 text-center">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500 text-center">
                        Start chatting in seconds
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">
                                Full name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-zinc-400" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-zinc-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@company.com"
                                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-zinc-400" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 outline-none"
                                />
                            </div>
                            <p className="mt-1 text-xs text-zinc-500">
                                Minimum 8 characters
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 disabled:opacity-70"
                        >
                            {loading ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-center text-zinc-600">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
