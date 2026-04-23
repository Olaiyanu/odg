import { motion } from "framer-motion";
import { UtensilsCrossed, Store, Bike, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Roles() {
  const roles = [
    {
      icon: <UtensilsCrossed size={18} fill="currentColor" />,
      role: "Student",
      title: "Order from top campus vendors in minutes.",
      link: "/register?role=user",
    },
    {
      icon: <Store size={18} fill="currentColor" />,
      role: "Vendor",
      title: "List your restaurant, manage orders, grow revenue.",
      link: "/register?role=vendor",
    },
    {
      icon: <Bike size={18} fill="currentColor" />,
      role: "Rider",
      title: "Deliver on your schedule and earn daily.",
      link: "/register?role=rider",
    }
  ];

  return (
    <section id="join" className="py-32 bg-brand-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-white/40 font-black tracking-[0.2em] uppercase text-[10px] mb-6"
            >
              <Zap size={12} fill="currentColor" />
              <span>Join the network</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-[68px] font-black text-white leading-[0.9] tracking-tighter mb-10"
            >
              Your account.<br />
              <span className="text-brand-500">Your role.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm max-w-sm font-medium mb-12"
            >
              Sign up as a student to start ordering, or as a vendor to manage your restaurant and unlock live dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <Link
                to="/register"
                className="bg-brand-500 text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-brand-600 transition-all flex items-center group shadow-xl shadow-brand-500/10"
              >
                <Zap className="mr-2" size={16} fill="currentColor" />
                Create Account
              </Link>
              <span className="text-white/40 text-[11px] font-bold">
                Already have an account? <Link to="/login" className="text-white hover:underline">Sign in →</Link>
              </span>
            </motion.div>
          </div>

          <div className="space-y-4">
            {roles.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="group block p-6 bg-white/5 border border-white/5 rounded-[24px] hover:bg-white/10 hover:border-white/10 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{item.role}</h3>
                      <p className="text-white/40 text-[11px] font-medium max-w-[200px] leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
