import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="max-w-xs">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black mb-8 block">
              ODG<span className="text-brand-500">.</span>
            </Link>
            <p className="text-gray-500 text-[13px] leading-relaxed font-medium mb-6">
              The premium food delivery network for Nigerian university campuses. Hot meals. Fast riders. Zero compromise.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:col-span-2 gap-12 lg:pl-12">
            <div>
              <h4 className="text-black font-black mb-8 text-[11px] uppercase tracking-[0.2em]">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#ai" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">ODG Food AI</a></li>
                <li><a href="#campuses" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">Campuses</a></li>
                <li><Link to="/register" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">Create Account</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-black font-black mb-8 text-[11px] uppercase tracking-[0.2em]">Partner</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">List Your Restaurant</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">Become a Rider</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black text-[13px] font-medium transition-colors">Contact Sales</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[11px] font-semibold">
            © 2026 ODG Deliveries Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-black text-[11px] font-semibold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-black text-[11px] font-semibold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
