import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X, Clock, MapPin, Bike, ChevronRight, Utensils } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black flex items-center">
              ODG<span className="text-brand-500">.</span>
            </Link>
            
            <div className="flex items-center">
              <button 
                onClick={() => setIsOrderOpen(true)}
                className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm hover:bg-brand-50 hover:border-brand-100 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold text-gray-900 whitespace-nowrap group-hover:text-brand-600 transition-colors">
                  1 <span className="hidden sm:inline">Active Order</span>
                  <span className="sm:hidden">Order</span>
                </span>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#ai" className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black transition-colors">
              ODG AI
            </a>
            <a href="#campuses" className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black transition-colors">
              Campuses
            </a>
            <a href="#join" className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black transition-colors">
              Join
            </a>
            <Link to="/login" className="bg-brand-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2"
        >
          <a
            href="#ai"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            ODG AI
          </a>
          <a
            href="#campuses"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Campuses
          </a>
          <a
            href="#join"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Join
          </a>
          <button className="w-full mt-4 bg-brand-600 text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-brand-700 transition-colors">
            Get Started
          </button>
        </motion.div>
      )}
      {/* Minimal Active Order Popup */}
      <AnimatePresence>
        {isOrderOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrderOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60]"
            />
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[70] w-[calc(100%-2rem)] max-w-[320px] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-5 pointer-events-auto relative overflow-hidden"
              >
                <button 
                  onClick={() => setIsOrderOpen(false)}
                  className="absolute right-4 top-4 text-gray-300 hover:text-black transition-colors"
                >
                  <X size={14} />
                </button>

                <div className="flex items-center space-x-4 mb-5">
                  <motion.div
                    animate={{ 
                      y: [0, -4, 0],
                      x: [-1, 1, -1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut" 
                    }}
                    className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-500/20"
                  >
                    <Bike size={20} strokeWidth={2.5} />
                  </motion.div>
                  
                  <div>
                    <h4 className="text-sm font-black text-black tracking-tight leading-none">Arriving in 12 min</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Transit on campus</p>
                  </div>
                </div>

                {/* Micro Progress Bar */}
                <div className="relative pt-1">
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, ease: "circOut" }}
                      className="h-full bg-brand-500 rounded-full"
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-500" 
                    />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
