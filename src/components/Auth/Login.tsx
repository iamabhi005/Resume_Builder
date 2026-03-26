import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, Lock, Chrome, ArrowRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Login: React.FC = () => {
    const { login } = useResume();
    const [method, setMethod] = useState<'email' | 'phone'>('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (method === 'email') {
            login('email', { email });
        } else {
            login('phone', { phone });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-950 dark:to-gray-900 p-4 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md z-10"
            >
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800 p-8 rounded-3xl shadow-2xl overflow-hidden relative">
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12 }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl shadow-lg shadow-primary-500/30 text-white mb-6"
                        >
                            <Lock size={32} />
                        </motion.div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Welcome Back</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to manage your professional resumes</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <button
                            onClick={() => login('google')}
                            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium active:scale-95 group"
                        >
                            <Chrome size={20} className="text-primary-600 scale-110 group-hover:rotate-12 transition-transform" />
                            <span>Continue with Google</span>
                        </button>
                        <button
                            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium active:scale-95 group"
                        >
                            <Github size={20} className="text-gray-900 dark:text-white group-hover:rotate-[-12deg] transition-transform" />
                            <span>Continue with GitHub</span>
                        </button>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-gray-800"></div></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-gray-900 px-3 text-gray-500 font-medium">Or email/phone</span></div>
                    </div>

                    <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6">
                        <button
                            onClick={() => setMethod('email')}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === 'email' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Email
                        </button>
                        <button
                            onClick={() => setMethod('phone')}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === 'phone' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Phone
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {method === 'email' ? (
                                <motion.div
                                    key="email"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="relative"
                                >
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                                        required
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="phone"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="relative"
                                >
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                                        required
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20 active:scale-95 group"
                        >
                            Sign In
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
                    Don't have an account? <a href="#" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">Sign up for free</a>
                </p>
            </motion.div>
        </div>
    );
};
