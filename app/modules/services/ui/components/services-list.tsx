import {
  Network,
  Landmark,
  Waves,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export const servicesData = [
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "End-to-end development of roads, ports, telecom networks, power grids, industrial parks, SEZs, water systems, and rural IT infrastructure. We build the backbone of modern economies.",
    icon: <Network className="w-10 h-10" />,
    image:
      "https://images.unsplash.com/photo-1701313056413-0915e1adf204?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Digital Connectivity", "Smart Logistics", "Urban Planning"],
    link: "/initiatives",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Inclusive financial solutions, investment vehicles, and capital structuring to support large-scale development and SME growth. Bridging the gap between capital and opportunity.",
    icon: <Landmark className="w-10 h-10" />,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Capital Structuring", "SME Lending", "Wealth Management"],
    link: "/contact",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description:
      "Strategic investments across upstream and midstream segments, focusing on operational efficiency and energy security while transitioning towards cleaner practices.",
    icon: <Waves className="w-10 h-10" />,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Upstream Exploration",
      "Pipeline Infrastructure",
      "Efficiency Tech",
    ],
    link: "/initiatives",
  },
  {
    id: "energy",
    title: "Renewable Energy",
    description:
      "Powering the future with renewable and conventional power generation, transmission, and storage solutions. Accelerating the global transition to sustainable energy systems.",
    icon: <Zap className="w-10 h-10" />,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Solar Parks", "Wind Farms", "Grid Storage"],
    link: "/initiatives",
  },
];

export const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[400px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-plum/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-tertiary/30 rounded-full text-plum">
                {service.icon}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-plum">
                {service.title}
              </h2>

              <p className="text-lg text-[#4A3A4A] leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-plum/80 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-tertiary" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="py-16">
                <Button
                  asChild
                  variant="outline"
                  className="border-plum text-plum hover:bg-plum hover:text-white px-6 py-2 rounded-md transition-all duration-300"
                >
                  <Link to={service.link}>
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
