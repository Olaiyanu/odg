import { motion } from "framer-motion";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black flex items-center">
              ODG<span className="text-brand-500">.</span>
            </Link>
            
            <div className="flex items-center">
              <div className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold text-gray-900 whitespace-nowrap">
                  1 <span className="hidden sm:inline">Active Order</span>
                  <span className="sm:hidden">Order</span>
                </span>
              </div>
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
    </nav>
  );
}
