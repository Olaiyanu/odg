import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, UtensilsCrossed, Store, Bike, Eye, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState(searchParams.get("role") || "student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const role = searchParams.get("role");
    if (role) setSelectedRole(role);
  }, [searchParams]);

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    setSearchParams({ role });
  };

  const roles = [
    { id: "student", label: "Student", icon: <UtensilsCrossed size={18} /> },
    { id: "vendor", label: "Vendor", icon: <Store size={18} /> },
    { id: "rider", label: "Rider", icon: <Bike size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Column: Red Branding */}
      <div className="hidden md:flex md:w-[45%] lg:w-[48%] bg-brand-500 relative overflow-hidden flex-col p-12 lg:p-20 justify-between">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        
        <div className="relative z-10">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white inline-block">
            ODG<span className="text-black">.</span>
          </Link>
          
          <div className="mt-40">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[64px] lg:text-[84px] font-black text-white leading-[0.85] tracking-tighter mb-10"
            >
              Join the <br />
              campus <br />
              network.
            </motion.h1>
            
            <p className="text-white/80 text-[15px] max-w-[340px] font-medium leading-relaxed">
              Students, vendors, and riders powering the fastest food delivery on Nigerian campuses.
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="relative z-10 space-y-6">
          <div className="flex items-center space-x-6 group">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-white/20 transition-all">
              <UtensilsCrossed size={20} />
            </div>
            <p className="text-white text-[13px] font-bold tracking-tight">
              Students — <span className="text-white/60 font-medium">hot meals in 15 minutes, hostel-precise.</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-6 group">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-white/20 transition-all">
              <Store size={20} />
            </div>
            <p className="text-white text-[13px] font-bold tracking-tight">
              Vendors — <span className="text-white/60 font-medium">live orders, analytics, zero commission setup.</span>
            </p>
          </div>

          <div className="flex items-center space-x-6 group">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-white/20 transition-all">
              <Bike size={20} />
            </div>
            <p className="text-white text-[13px] font-bold tracking-tight">
              Riders — <span className="text-white/60 font-medium">flexible earnings, daily payouts.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8 lg:p-20 overflow-y-auto">
        <div className="max-w-[420px] w-full">
          {/* Back to Home Link */}
          <Link to="/" className="flex items-center text-gray-400 hover:text-black text-[11px] font-black uppercase tracking-[0.2em] mb-12 group transition-colors">
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <div className="mb-10">
            <h2 className="text-4xl font-black text-black tracking-tighter mb-2">
              {selectedRole === "student" && "Join as Student"}
              {selectedRole === "vendor" && "Partner as Vendor"}
              {selectedRole === "rider" && "Earn as Rider"}
            </h2>
            <p className="text-gray-500 text-[13px] font-medium tracking-tight">
              {selectedRole === "student" && "Access the best meals on your campus instantly."}
              {selectedRole === "vendor" && "Digitalize your restaurant and reach thousands of students."}
              {selectedRole === "rider" && "The most flexible way to earn on your own schedule."}
            </p>
          </div>

          {/* Role Switcher */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleChange(role.id)}
                className={`p-6 rounded-[20px] border flex flex-col items-center justify-center transition-all ${
                  selectedRole === role.id 
                  ? "border-brand-500 bg-white ring-1 ring-brand-500" 
                  : "border-gray-100 bg-[#F9FAFB] hover:border-gray-200"
                }`}
              >
                <div className={`${selectedRole === role.id ? "text-brand-500" : "text-gray-400"}`}>
                  {role.icon}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-wider mt-3 ${selectedRole === role.id ? "text-brand-500" : "text-gray-400"}`}>
                  {role.label}
                </span>
              </button>
            ))}
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">
                {selectedRole === "vendor" ? "Restaurant name" : "Full name"}
              </label>
              <input 
                type="text" 
                placeholder={selectedRole === "vendor" ? "Restaurant name" : "Full name"}
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-4 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Email address</label>
              <input 
                type="email" 
                placeholder={selectedRole === "student" ? "student@university.edu" : "your@email.com"}
                className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-4 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Min 8 characters"
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-4 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Confirm password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Repeat your password"
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[18px] px-6 py-4 text-[13px] text-black focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium"
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <button className="w-full bg-brand-500 text-white font-black py-5 rounded-[22px] shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all flex items-center justify-center space-x-2 text-xs uppercase tracking-widest mt-4">
              <Zap size={14} fill="currentColor" />
              <span>
                {selectedRole === "student" && "Sign up as Student"}
                {selectedRole === "vendor" && "Register Restaurant"}
                {selectedRole === "rider" && "Become a Rider"}
              </span>
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
            Already have an account? <Link to="/login" className="text-brand-500 hover:underline ml-1 font-bold">Sign in →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
