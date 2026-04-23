import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Campuses() {
  const campuses = [
    { name: "Lead City University", location: "Ibadan, Oyo", eta: "12m", status: "LIVE NOW" },
    { name: "Ajayi Crowther University", location: "Oyo, Oyo", eta: "15m", status: "LIVE NOW" },
    { name: "University of Ibadan", location: "Ibadan, Oyo", eta: "20m", status: "COMING SOON" },
    { name: "The Polytechnic Ibadan", location: "Ibadan, Oyo", eta: "—", status: "COMING SOON" }
  ];

  return (
    <section id="campuses" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-brand-500 font-black tracking-[0.2em] uppercase text-[10px] mb-6"
          >
            <MapPin size={12} fill="currentColor" />
            <span>Coverage</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-[68px] font-black text-black leading-[0.9] tracking-tighter mb-8"
          >
            Active <span className="text-brand-500">campuses.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm max-w-lg font-medium"
          >
            We're live on the highest-density student campuses in Oyo State, with rapid expansion underway.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {campuses.map((campus, i) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 flex items-center justify-between group hover:border-brand-500/20 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${campus.status === 'LIVE NOW' ? 'bg-brand-500 animate-pulse' : 'bg-gray-300'}`} />
                  <span className={`text-[10px] uppercase font-black tracking-widest ${campus.status === 'LIVE NOW' ? 'text-brand-500' : 'text-gray-400'}`}>
                    {campus.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black tracking-tight">{campus.name}</h3>
                  <div className="flex items-center text-gray-400 text-[11px] font-bold mt-1">
                    <MapPin size={12} className="mr-1" />
                    {campus.location}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-black tracking-tighter">{campus.eta}</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Avg. ETA</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
