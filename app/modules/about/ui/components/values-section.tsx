import { Lightbulb, Shield, Users, Leaf } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technology to solve complex infrastructure challenges.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Integrity",
    description:
      "Transparency and ethical governance are the cornerstones of our partnerships.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Sustainability",
    description:
      "We differ from others by prioritizing long-term environmental and social impact.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Community",
    description:
      "Empowering local communities through inclusive development and job creation.",
    icon: <Users className="w-8 h-8" />,
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-plum mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-[#4A3A4A] max-w-3xl mx-auto">
            These principles guide every investment decision and partnership we
            build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-tertiary/20 p-6 rounded-xl border border-dusty-rose/20 text-center hover:bg-tertiary/40 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-plum/10 rounded-full text-plum mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-plum mb-2">{item.title}</h3>
              <p className="text-[#4A3A4A] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
