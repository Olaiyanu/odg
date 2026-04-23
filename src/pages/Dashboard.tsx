import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Bell, 
  LogOut, 
  MapPin, 
  Clock, 
  Utensils, 
  Plus, 
  X, 
  Trash2, 
  CreditCard, 
  Download, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import confetti from "canvas-confetti";

interface MealData {
  id: number;
  image: string;
  vendor: string;
  name: string;
  time: string;
  category: string;
  price: string;
  description?: string;
  icon: ReactNode;
}

interface FoodCardProps extends MealData {
  onOrder: (meal: MealData) => void;
  key?: number | string;
}

const FoodCard = ({ vendor, name, time, category, price, description, icon, onOrder, id, image }: FoodCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[40px] border border-gray-100/80 shadow-sm overflow-hidden flex flex-col h-full"
  >
    <div className="h-48 bg-[#F9FAFB] flex items-center justify-center border-b border-gray-50">
      <div className="scale-[2.5]">
        {icon}
      </div>
    </div>
    <div className="p-7 flex flex-col flex-1">
      <div className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.2em] mb-2">{vendor}</div>
      <h3 className="text-2xl font-black text-black tracking-tighter mb-3 leading-tight">{name}</h3>
      
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex items-center text-gray-400 text-[11px] font-bold">
          <Clock size={14} className="mr-1" />
          {time}
        </div>
        <div className="bg-gray-50 text-gray-400 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </div>
      </div>

      {description && (
        <p className="text-gray-400 text-[13px] font-medium leading-relaxed mb-6">{description}</p>
      )}

      <div className="mt-auto flex items-center justify-between">
        <div className="text-2xl font-black text-black tracking-tighter">₦{price}</div>
        <button 
          onClick={() => onOrder({ id, vendor, name, time, category, price, description, icon, image })}
          className="bg-[#FF0000] text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20 group"
        >
          <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          <span className="text-sm font-black uppercase tracking-wider">Order</span>
        </button>
      </div>
    </div>
  </motion.div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [categories] = useState(["All", "Main", "Sides", "Protein"]);
  const [cart, setCart] = useState<MealData[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleAddToCart = (meal: MealData) => {
    setCart((prev) => [...prev, meal]);
  };

  const removeFromCart = (id: number) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + parseInt(item.price.replace(/,/g, '')), 0);
  };

  const handlePay = async () => {
    setIsPaying(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsPaying(false);
    setIsPaid(true);
    
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF0000', '#000000', '#FFFFFF']
    });

    setTimeout(() => {
      setIsPaid(false);
      setCart([]);
      setIsCartOpen(false);
    }, 4000);
  };

  const foods: MealData[] = [
    {
      id: 1,
      image: "",
      vendor: "GLORIOUS EAT",
      name: "Rice",
      time: "15 mins",
      category: "Main",
      price: "300",
      icon: <span className="text-4xl">🍚</span>
    },
    {
      id: 2,
      image: "",
      vendor: "GLORIOUS EAT",
      name: "Beans",
      time: "15 mins",
      category: "Sides",
      price: "300",
      icon: <Utensils className="text-gray-900" />
    },
    {
      id: 3,
      image: "",
      vendor: "GLORIOUS EAT",
      name: "Egg",
      time: "15 mins",
      category: "Protein",
      price: "200",
      icon: <Utensils className="text-gray-900" />
    },
    {
      id: 4,
      image: "",
      vendor: "ACU",
      name: "Crisp Chicken",
      time: "15 mins",
      category: "Protein",
      price: "3,000",
      description: "Full Crisp Chicken with coleslaw",
      icon: <span className="text-4xl">🍗</span>
    },
    {
      id: 5,
      image: "",
      vendor: "CHARLES FABUNMI",
      name: "JollofRice",
      time: "5 mins",
      category: "Main",
      price: "7,000",
      icon: <span className="text-4xl">🍚</span>
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-500/10 overflow-x-hidden">
      {/* Dashboard Nav */}
      <nav className="h-20 border-b border-gray-100 px-4 md:px-12 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link to="/dashboard" className="text-2xl font-black tracking-tighter text-black flex items-center">
          ODG<span className="text-[#FF0000]">.</span>
        </Link>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <button className="hidden lg:flex items-center space-x-2 bg-gray-50/50 border border-gray-100 px-5 py-2.5 rounded-[18px] hover:bg-gray-100 transition-all">
            <MapPin size={16} className="text-[#FF0000]" />
            <span className="text-[11px] font-black text-black uppercase tracking-tight">Set address</span>
          </button>
          
          <motion.button 
            onClick={() => setIsCartOpen(true)}
            animate={cart.length > 0 ? { 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            } : {}}
            transition={{ duration: 0.4 }}
            key={cart.length}
            className="w-10 h-10 rounded-[14px] bg-gray-50 flex items-center justify-center text-gray-500 hover:text-black transition-colors relative"
          >
            <Bell size={18} />
            <AnimatePresence>
              {cart.length > 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FF0000] text-white text-[9px] font-black flex items-center justify-center rounded-full border-2 border-white"
                >
                  {cart.length}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          <div className="flex items-center space-x-3 bg-gray-50/50 pl-1 pr-4 py-1 rounded-[16px] border border-gray-100">
            <div className="w-8 h-8 bg-[#FF0000] rounded-[10px] flex items-center justify-center text-white font-black text-sm">
              J
            </div>
            <span className="text-[11px] font-black text-black hidden xs:inline">johnson</span>
          </div>
          
          <button 
            onClick={handleLogout}
            className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-black transition-colors group"
          >
            <LogOut size={16} className="group-hover:translate-x-0.5 transition-transform" />
            <span className="text-[11px] font-black uppercase tracking-widest">Sign out</span>
          </button>
        </div>
      </nav>

      {/* Cart/Notifications Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col p-8"
            >
              {isPaid ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-emerald-500 rounded-[32px] flex items-center justify-center text-white mb-8 shadow-xl shadow-emerald-500/30">
                    <CheckCircle2 size={48} strokeWidth={3} />
                  </div>
                  <h2 className="text-3xl font-black text-black tracking-tighter mb-4">Payment Successful!</h2>
                  <p className="text-gray-400 font-medium mb-10">Your order has been confirmed and is being prepared.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-4 rounded-[22px] bg-[#0F172A] text-white font-black text-xs uppercase tracking-widest"
                  >
                    Back to menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h2 className="text-3xl font-black text-black tracking-tighter">Your Orders</h2>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{cart.length} ITEMS SELECTED</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-6 no-scrollbar">
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                        <Utensils size={48} className="mb-4" />
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Your tray is empty</p>
                      </div>
                    ) : (
                      <AnimatePresence mode="popLayout">
                        {cart.map((item, i) => (
                          <motion.div 
                            key={`${item.id}-${i}`}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -20 }}
                            className="flex items-center justify-between group"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="text-sm font-black text-black tracking-tight">{item.name}</h4>
                                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{item.vendor}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="text-sm font-black text-black tracking-tighter">₦{item.price}</span>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
                      {/* Invoice Summary */}
                      <div className="bg-gray-50 rounded-[32px] p-6 space-y-3">
                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-gray-400">
                          <span>Subtotal</span>
                          <span className="text-black">₦{calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-gray-400">
                          <span>Delivery Fee</span>
                          <span className="text-black">₦200</span>
                        </div>
                        <div className="h-px bg-gray-200 my-2" />
                        <div className="flex justify-between items-center tabular-nums">
                          <span className="text-sm font-black text-black uppercase tracking-widest">Total Pay</span>
                          <span className="text-2xl font-black text-black racking-tighter">₦{calculateTotal() + 200}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center space-x-2 border border-gray-100 py-4 rounded-[22px] hover:bg-gray-50 transition-all font-black text-[10px] uppercase tracking-widest">
                          <Download size={14} />
                          <span>Invoice</span>
                        </button>
                        <button 
                          onClick={handlePay}
                          disabled={isPaying}
                          className="flex items-center justify-center space-x-2 bg-[#FF0000] text-white py-4 rounded-[22px] hover:bg-red-600 transition-all font-black text-[10px] uppercase tracking-widest shadow-lg shadow-red-500/20 disabled:opacity-50"
                        >
                          {isPaying ? (
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <CreditCard size={14} />
                              <span>Pay Now</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        {/* Floating View Cart (Mobile Focused) */}
        <AnimatePresence>
          {cart.length > 0 && !isCartOpen && (
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={() => setIsCartOpen(true)}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] bg-[#0F172A] text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-4 hover:scale-105 transition-transform"
            >
              <div className="flex items-center space-x-2 border-r border-white/10 pr-4">
                <Bell size={18} fill="currentColor" />
                <span className="text-xs font-black">{cart.length}</span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest">View Orders</span>
              <ChevronRight size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Hero Welcome */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-[52px] font-black text-black tracking-tighter leading-none mb-4">
            Hey johnson 👋
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-tight">
            What are you eating today?
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-8 mb-20">
          <div className="relative group w-full">
            <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none text-gray-300 group-focus-within:text-[#FF0000] transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <input 
              type="text" 
              placeholder="Search meals, vendors, or categories..."
              className="w-full bg-white border border-gray-100 rounded-[28px] pl-18 pr-10 py-6 text-sm font-medium shadow-sm outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-[#FF0000]/20 transition-all placeholder:text-gray-300"
            />
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  i === 0 
                  ? "bg-[#0F172A] text-white" 
                  : "bg-white border border-gray-100 text-gray-400 hover:border-gray-300 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-black tracking-tighter">Trending Near You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food) => (
              <FoodCard 
                key={food.id} 
                {...food}
                onOrder={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
