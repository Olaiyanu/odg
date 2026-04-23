import { motion } from "framer-motion";
import { Clock, MapPin, Star, Sparkles, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Clock size={20} className="text-brand-500" />,
    title: "15-Minute Guarantee",
    description: "Our rider network is geo-optimised around campus layouts. Your food is hot when it arrives, not when it leaves."
  },
  {
    icon: <MapPin size={20} className="text-brand-500" />,
    title: "Hostel-Precise Delivery",
    description: "Drop a pin at your exact block and room number. No more \"meet me at the gate\" situations."
  },
  {
    icon: <Star size={20} className="text-brand-500" />,
    title: "Curated 4.7★+ Vendors",
    description: "Every restaurant on ODG passes our taste and hygiene audit. Mediocre food doesn't ship."
  },
  {
    icon: <Sparkles size={20} className="text-brand-500" />,
    title: "AI-Powered Matching",
    description: "Tell us your budget, craving, and dietary needs. Our AI surfaces the best options in seconds."
  },
  {
    icon: <Shield size={20} className="text-brand-500" />,
    title: "Secure Payments",
    description: "Pay with cards, bank transfers, or campus wallets. Every transaction is encrypted end-to-end."
  },
  {
    icon: <BarChart3 size={20} className="text-brand-500" />,
    title: "Vendor Analytics",
    description: "Restaurant partners get real-time dashboards, peak-hour insights, and order flow management tools."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-brand-500 font-black tracking-[0.2em] uppercase text-[10px] mb-6"
          >
            <Sparkles size={12} fill="currentColor" />
            <span>Why ODG</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-[68px] font-black text-black leading-[0.9] tracking-tighter mb-8"
          >
            Built for campus life.<br />
            <span className="text-brand-500">Nothing else.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm max-w-lg font-medium"
          >
            Every feature engineered around how students actually eat, order, and live on campus.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] border border-gray-100 bg-white hover:border-brand-500/20 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-8 border border-brand-100">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-black mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[13px] font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
