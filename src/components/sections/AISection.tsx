import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function AISection() {
  const [prompt, setPrompt] = useState("");

  return (
    <section id="ai" className="py-24 bg-[#F9FAFB] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-brand-500 font-black tracking-[0.2em] uppercase text-[10px] mb-6"
          >
            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
            <span>ODG Food AI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-[68px] font-black text-black mb-8 leading-[0.8] tracking-tighter"
          >
            What are you <br />
            <span className="text-brand-500 italic block mt-2">craving?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm mb-12 max-w-md mx-auto font-medium"
          >
            Describe your mood, budget, or dietary needs — our AI matches you with the best campus vendors instantly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative group flex flex-col sm:block">
              <Search className="absolute left-6 top-6 sm:top-1/2 sm:-translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors z-10" size={20} />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'budget ₦2500, something spicy near Block D'"
                className="w-full bg-white border border-gray-200 rounded-[24px] sm:rounded-full pl-16 pr-6 sm:pr-40 py-6 text-black text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all shadow-xl shadow-gray-200/50"
              />
              <button className="mt-4 sm:mt-0 sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 bg-brand-500 text-white px-8 py-5 sm:py-4 rounded-[20px] sm:rounded-full flex items-center justify-center space-x-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20 active:scale-95 transition-transform">
                <Search size={16} fill="currentColor" />
                <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap">Find Food</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
