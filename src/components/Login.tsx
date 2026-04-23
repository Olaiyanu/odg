import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Zap, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Get saved role or default to student
    const role = localStorage.getItem("userRole") || "student";
    localStorage.setItem("isLoggedIn", "true");

    if (role === "vendor") {
      navigate("/vendor-dashboard");
    } else if (role === "rider") {
      navigate("/rider-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Column: Visual & Testimonial */}
      <div className="hidden md:flex md:w-[45%] lg:w-[40%] bg-brand-950 relative overflow-hidden flex-col p-12 lg:p-16 justify-between">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        
        <div className="relative z-10">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white inline-block">
            ODG<span className="text-brand-500">.</span>
          </Link>
          
          <div className="mt-32">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[60px] lg:text-[72px] font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              Welcome <br />
              back to <br />
              <span className="text-brand-500">ODG.</span>
            </motion.h1>
            
            <p className="text-white/40 text-sm max-w-[280px] font-medium leading-relaxed">
              Your meals, your dashboard, your campus network — all in one place.
            </p>
          </div>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-sm"
        >
          <p className="text-white/80 text-[13px] leading-relaxed mb-6 font-medium">
            "I ordered from my hostel, and it arrived before I even locked my door. ODG is the real deal on this campus."
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-black text-xs">
              A
            </div>
            <div>
              <div className="text-white font-black text-xs tracking-tight">Adaeze O.</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-bold">200L, Lead City University</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Auth Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8 lg:p-24 overflow-y-auto">
        <div className="max-w-[400px] w-full">
          {/* Back to Home Link */}
          <Link to="/" className="flex items-center text-gray-400 hover:text-black text-[11px] font-black uppercase tracking-[0.2em] mb-12 group transition-colors">
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <div className="mb-12">
            <h2 className="text-4xl font-black text-black tracking-tighter mb-2">Sign in</h2>
            <p className="text-gray-500 text-[13px] font-medium tracking-tight">
              Enter your credentials to access your account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Email address</label>
              <input 
                required
                type="email" 
                placeholder="you@university.edu"
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-4 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Password</label>
              </div>
              <div className="relative">
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="Your password"
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-5 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-[11px] font-black text-brand-500 hover:underline uppercase tracking-wider">
                  Forgot password?
                </a>
              </div>
            </div>

            <button 
              disabled={isSubmitting}
              className="w-full bg-brand-500 text-white font-black py-5 rounded-[22px] shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all flex items-center justify-center space-x-2 text-xs uppercase tracking-widest mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <Zap size={14} fill="currentColor" />
                  <span>Sign in</span>
                </>
              )}
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 bg-white px-4">
              OR
            </div>
          </div>

          <button className="w-full border border-gray-100 bg-white text-black font-black py-4 rounded-[22px] hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 text-[12px] shadow-sm">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <p className="mt-12 text-center text-[11px] font-bold text-gray-400">
            Don't have an account? <Link to="/register" className="text-brand-500 hover:underline ml-1">Create one →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
