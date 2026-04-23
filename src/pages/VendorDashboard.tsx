import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  BarChart3, 
  CreditCard, 
  Bell, 
  LogOut, 
  ArrowUpRight,
  ListOrdered,
  CheckCircle2,
  Store
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => (
  <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
    active 
    ? "bg-red-500/10 text-red-500 border-l-4 border-red-500 rounded-l-none" 
    : "text-slate-400 hover:text-white hover:bg-slate-800"
  }`}>
    {icon}
    <span className="text-[13px] font-bold tracking-tight">{label}</span>
  </div>
);

export default function VendorDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const stats = [
    {
      title: "AVAILABLE BALANCE",
      value: "₦0",
      type: "balance",
      action: "Withdraw Funds"
    },
    {
      title: "Active Orders",
      value: "0",
      type: "stat",
      icon: <ListOrdered size={20} className="text-red-500" />,
      iconBg: "bg-red-50"
    },
    {
      title: "Total Completed",
      value: "0",
      type: "stat",
      icon: <CheckCircle2 size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      trend: "₦0 today"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0f172a] text-white flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-8 pb-12">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center">
            ODG<span className="text-red-500">.</span>
          </Link>
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1">BUSINESS PORTAL</div>
        </div>

        <div className="flex-1 px-4 space-y-8">
          <div>
            <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4 px-4">OVERVIEW</div>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
              <SidebarItem icon={<UtensilsCrossed size={18} />} label="Menu Management" />
              <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
            </div>
          </div>

          <div>
            <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4 px-4">ACCOUNT</div>
            <div className="space-y-1">
              <SidebarItem icon={<CreditCard size={18} />} label="Payouts" />
              <SidebarItem icon={<Bell size={18} />} label="Notifications" />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800">
          <div 
            onClick={handleLogout}
            className="bg-slate-900/50 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center font-black text-white">
                j
              </div>
              <div>
                <div className="text-xs font-black">jksdhbk</div>
                <div className="text-[10px] font-medium text-slate-500">Vendor</div>
              </div>
            </div>
            <LogOut size={16} className="text-slate-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-black text-emerald-600 uppercase tracking-wider">Store Open</span>
            </div>
            <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-all">
              <Bell size={18} />
            </button>
          </div>
        </header>

        <div className="p-10 space-y-10">
          {/* Welcome Area */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">Welcome back, jksdhbk 👋</h2>
            <p className="text-slate-400 text-sm font-medium">All caught up! All orders complete.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Balance Card */}
            <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">AVAILABLE BALANCE</div>
                  <div className="text-[56px] font-black tracking-tighter leading-none mb-10">₦0</div>
                </div>
                <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl w-fit transition-all backdrop-blur-md border border-white/10">
                  <ArrowUpRight size={16} />
                  <span className="text-[11px] font-black uppercase tracking-wider">Withdraw Funds</span>
                </button>
              </div>
            </div>

            {/* Other Stats */}
            {stats.slice(1).map((stat, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
                <div className="flex justify-between items-start">
                  <div className={`${stat.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  {stat.trend && (
                    <div className="flex items-center space-x-1 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                      <BarChart3 size={12} />
                      <span>{stat.trend}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[56px] font-black text-slate-900 tracking-tighter leading-none mb-1">0</div>
                  <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-6 border-b border-slate-100 pb-px">
            <button className="text-[13px] font-black text-slate-900 border-b-2 border-red-500 pb-4 h-full">Orders</button>
            <button className="text-[13px] font-black text-slate-400 hover:text-slate-600 pb-4 h-full transition-colors">Menu (0)</button>
          </div>

          {/* Active Pipeline */}
          <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
            <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900 tracking-tighter">Active Pipeline</h3>
              <div className="bg-red-50 text-red-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest animate-pulse border border-red-100flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>0 LIVE</span>
              </div>
            </div>
            <div className="p-20 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-3xl mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">All caught up!</h4>
                <p className="text-slate-400 text-sm font-medium">New orders appear here in real-time.</p>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col h-[400px]">
              <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8">Recent Deliveries</h3>
              <div className="flex-1 flex items-center justify-center text-slate-400 text-sm font-medium">
                No completed orders yet.
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8">Store Summary</h3>
              <div className="space-y-4">
                {[
                  { label: "Store Name", value: "jksdhbk" },
                  { label: "Owner", value: "—" },
                  { label: "Status", value: "Open", isStatus: true },
                  { label: "Rating", value: "No ratings yet" },
                  { label: "Total Revenue", value: "₦0" },
                  { label: "All Orders", value: "0" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                    <span className="text-sm font-bold text-slate-400">{row.label}</span>
                    <div className="flex items-center space-x-2">
                      {row.isStatus && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                      <span className="text-sm font-black text-slate-900">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
