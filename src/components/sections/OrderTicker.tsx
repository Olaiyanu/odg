import { motion } from "framer-motion";
import { Flame, CheckCircle, Package, Truck } from "lucide-react";

const orders = [
  { id: "ACU-102", item: "Chicken Burger", time: "12m away", status: "delivering", icon: <Truck size={14} className="text-orange-400" /> },
  { id: "#LCU-44", item: "Jollof Rice", time: "Delivered", status: "success", icon: <CheckCircle size={14} className="text-green-500" /> },
  { id: "UI-90", item: "Parfait XL", time: "Preparing", status: "prep", icon: <Package size={14} className="text-blue-400" /> },
  { id: "ACU-114", item: "Beef Shawarma", time: "8m away", status: "delivering", icon: <Flame size={14} className="text-orange-500" /> },
];

export default function OrderTicker() {
  const duplicatedOrders = [...orders, ...orders, ...orders];

  return (
    <div className="bg-brand-950 py-4 overflow-hidden border-b border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex space-x-12 items-center"
        >
          {duplicatedOrders.map((order, i) => (
            <div key={i} className="flex items-center space-x-3 group">
              {order.icon}
              <span className="text-white text-[11px] font-bold tracking-tight">
                <span className="text-white/40">Order</span> #{order.id}:{" "}
                <span className="text-white">{order.item}</span>
                <span className="mx-2 text-white/20">—</span>
                <span className={`${order.status === 'success' ? 'text-green-500' : 'text-white/60'}`}>
                  {order.time}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
