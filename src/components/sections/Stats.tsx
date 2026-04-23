export default function Stats() {
  const stats = [
    { value: "15m", label: "Avg. Delivery Time" },
    { value: "20+", label: "Campuses Expanding" },
    { value: "4.9★", label: "Platform Rating" },
    { value: "₦0", label: "Delivery Fee Today" },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-x border-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="py-12 flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
