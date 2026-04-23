import { motion } from "framer-motion";
import { ArrowRight, Flame, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-brand-500 min-h-screen flex items-center">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-black/20 text-white mb-10 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
                Now Live · Ibadan & Oyo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              Campus meals.<br />
              Delivered in<br />
              <span className="relative inline-block mt-4">
                <span className="relative z-10">15 min.</span>
                <span className="absolute -top-6 left-0 text-3xl md:text-4xl text-white/40 line-through font-bold italic tracking-normal">forever.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-lg mb-12 leading-relaxed font-medium"
            >
              The premium food delivery network built for Nigerian university campuses. Hot, fresh meals from top vendors — to your exact hostel door.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="w-full sm:w-auto bg-white text-brand-500 px-10 py-5 rounded-full text-sm font-black uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center justify-center">
                Order Now
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-[18px] rounded-full text-sm font-black uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center group">
                Explore Campuses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </motion.div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center h-full">
            {/* Visual elements */}
            <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full" />
            <div className="absolute w-[350px] h-[350px] border border-white/20 rounded-full" />
            
            <div className="flex flex-col space-y-6 relative z-10 w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white p-4 rounded-2xl shadow-2xl flex items-center space-x-4 self-end -mr-12"
              >
                <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white">
                  <Flame size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Trending Now</div>
                  <div className="font-black text-gray-900 tracking-tight">Spicy Chicken Wrap</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-white p-4 rounded-2xl shadow-2xl flex items-center space-x-4 self-start"
              >
                <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">ETA to Block C</div>
                  <div className="font-black text-gray-900 tracking-tight">12 Minutes</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="bg-brand-950 p-4 rounded-2xl shadow-2xl flex items-center space-x-4 self-end -mr-4"
              >
                <div className="w-12 h-12 bg-brand-500/20 text-brand-500 rounded-xl flex items-center justify-center">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Vendor Rating</div>
                  <div className="font-black text-white tracking-tight text-lg">4.9+ 200+ Reviews</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
