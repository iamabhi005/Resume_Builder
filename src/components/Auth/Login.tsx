import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, Lock, Chrome, ArrowRight, Github, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Login: React.FC = () => {
    const { login } = useResume();
    const [method, setMethod] = useState<'email' | 'phone'>('email');
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since this is a mock, we just call login
        if (method === 'email') {
            login('email', { email });
        } else {
            login('phone', { phone });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#030712] p-4 overflow-hidden relative font-sans">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-900/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-900/10 rounded-full blur-[80px] animate-float" />

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-[440px] z-10"
            >
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>

                    <motion.div variants={itemVariants} className="text-center mb-10">
                        <div className="relative inline-block mb-6">
                            <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full animate-pulse"></div>
                            <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl shadow-primary-500/40 text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                                <ShieldCheck size={40} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-gray-400 text-lg">
                            {isSignUp ? 'Join thousands of professionals' : 'Sign in to access your resumes'}
                        </p>
                    </motion.div>

                    {/* Social Authentication */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={() => login('google')}
                            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 dark:text-white border border-white/10 py-3.5 rounded-2xl transition-all duration-300 font-semibold active:scale-95 group"
                        >
                            <Chrome size={20} className="group-hover:rotate-12 transition-transform text-red-400" />
                            <span>Google</span>
                        </button>
                        <button
                            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 dark:text-white border border-white/10 py-3.5 rounded-2xl transition-all duration-300 font-semibold active:scale-95 group"
                        >
                            <Github size={20} className="group-hover:rotate-[-12deg] transition-transform text-white" />
                            <span>GitHub</span>
                        </button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0f172a] px-4 text-gray-500 font-bold tracking-widest">Or continue with</span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex p-1.5 bg-black/40 rounded-[1.25rem] mb-8 border border-white/5">
                        <button
                            onClick={() => setMethod('email')}
                            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${method === 'email' ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Email
                        </button>
                        <button
                            onClick={() => setMethod('phone')}
                            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${method === 'phone' ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Phone
                        </button>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {method === 'email' ? (
                                <motion.div
                                    key="email"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="relative group/input"
                                >
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="text-gray-500 group-focus-within/input:text-primary-400 transition-colors" size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="glass-input w-full pl-12 pr-4 py-4 dark:text-white placeholder:text-gray-600"
                                        required
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="phone"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="relative group/input"
                                >
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone className="text-gray-500 group-focus-within/input:text-primary-400 transition-colors" size={20} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="glass-input w-full pl-12 pr-4 py-4 dark:text-white placeholder:text-gray-600"
                                        required
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="relative group/input">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="text-gray-500 group-focus-within/input:text-primary-400 transition-colors" size={20} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="glass-input w-full pl-12 pr-4 py-4 dark:text-white placeholder:text-gray-600"
                                required
                            />
                        </div>

                        {!isSignUp && (
                            <div className="flex justify-end">
                                <a href="#" className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors">
                                    Forgot Password?
                                </a>
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white py-4 rounded-2xl font-bold transition-all shadow-[0_10px_20px_-10px_rgba(2,132,199,0.5)] active:shadow-none group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                            <span className="relative z-10">{isSignUp ? 'Create Free Account' : 'Sign In Now'}</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </form>
                </div>

                <motion.p variants={itemVariants} className="text-center text-gray-500 mt-10">
                    {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}{' '}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-primary-400 font-bold hover:text-primary-300 underline underline-offset-4 transition-colors"
                    >
                        {isSignUp ? 'Sign In' : 'Sign up for free'}
                    </button>
                </motion.p>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </div>
    );
};
