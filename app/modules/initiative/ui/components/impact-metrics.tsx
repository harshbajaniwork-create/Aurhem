import { Leaf, Zap, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "500MW+",
    label: "Clean Energy Generated",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    value: "$2B+",
    label: "Capital Deployed",
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
  },
  {
    value: "15k+",
    label: "Jobs Created Directly",
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
  {
    value: "300k",
    label: "Tons CO2 Offset",
    icon: <Leaf className="w-8 h-8 text-emerald-500" />,
  },
];

export const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-plum text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tertiary rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dusty-rose rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4 text-tertiary">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-bold text-tertiary mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
