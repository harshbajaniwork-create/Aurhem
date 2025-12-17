import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Building,
  Landmark,
  Zap,
  Waves,
  Network,
  Factory,
  Ship,
  Smartphone,
  Droplets,
  Hospital,
  Hotel,
  Globe,
} from "lucide-react";

export const services = [
  {
    title: "Infrastructure",
    description:
      "End-to-end development of roads, ports, telecom networks, power grids, industrial parks, SEZs, water systems, and rural IT infrastructure.",
    icon: <Network className="w-8 h-8" />,
  },
  {
    title: "Financial Services",
    description:
      "Inclusive financial solutions, investment vehicles, and capital structuring to support large-scale development and SME growth.",
    icon: <Landmark className="w-8 h-8" />,
  },
  {
    title: "Oil & Gas",
    description:
      "Strategic investments across upstream and midstream segments, focusing on operational efficiency and energy security.",
    icon: <Waves className="w-8 h-8" />,
  },
  {
    title: "Energy",
    description:
      "Renewable and conventional power generation, transmission, and storage accelerating the transition to sustainable energy systems.",
    icon: <Zap className="w-8 h-8" />,
  },
];

const infrastructureHighlights = [
  { icon: <Ship className="w-5 h-5" />, label: "Ports & Logistics" },
  { icon: <Factory className="w-5 h-5" />, label: "Industrial Parks & SEZs" },
  { icon: <Building className="w-5 h-5" />, label: "Townships & Real Estate" },
  { icon: <Hospital className="w-5 h-5" />, label: "Healthcare Facilities" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hospitality" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Rural Digital Access" },
  { icon: <Droplets className="w-5 h-5" />, label: "Water Infrastructure" },
  { icon: <Globe className="w-5 h-5" />, label: "Mass Transit & Smart Cities" },
];

export const About = () => {
  return (
    <main>
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-tertiary"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Gyan Group infrastructure and energy projects - roads, solar farms, industrial parks, and financial services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-plum/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum leading-tight"
            >
              Building the Foundations of a Sustainable Future
            </h2>

            <p className="text-lg text-[#4A3A4A] leading-relaxed">
              Aurhem is a global investment platform driving transformative
              growth across critical sectors—Infrastructure, Financial Services,
              Oil & Gas, and Clean Energy. We partner with governments,
              institutions, and communities to develop integrated ecosystems
              that power economic progress and social equity.
            </p>

            <p className="text-lg text-[#4A3A4A] leading-relaxed">
              Our portfolio spans strategic assets including highways, ports,
              telecom networks, renewable energy plants, industrial corridors,
              Special Economic Zones (SEZs), water infrastructure, rural digital
              access, hospitality, healthcare facilities, and scalable financial
              solutions. With a long-term vision and local-first approach, we
              turn capital into lasting impact.
            </p>

            <div className="pt-4">
              <Button
                asChild
                className="bg-plum hover:bg-dusty-rose text-tertiary px-8 py-3 rounded-md text-base font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/about">Discover Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-6"
            >
              Our Focus Areas
            </h2>
            <p className="text-lg text-[#4A3A4A] max-w-4xl mx-auto leading-relaxed">
              We deploy capital with purpose building resilient assets that
              drive economic growth, energy access, and inclusive development
              across emerging markets.
            </p>
          </div>

          {/* Core Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-tertiary/40 p-6 rounded-xl border border-dusty-rose/20 transition-all duration-300 hover:shadow-md hover:bg-tertiary/60"
              >
                <div className="text-plum mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-plum mb-3">
                  {service.title}
                </h3>
                <p className="text-[#4A3A4A] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Infrastructure Highlights */}
          <div className="bg-plum/5 p-8 rounded-2xl border border-plum/10">
            <h3 className="text-2xl font-bold text-plum text-center mb-6">
              Infrastructure in Action
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {infrastructureHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-dusty-rose/30"
                >
                  <span className="text-dusty-rose">{item.icon}</span>
                  <span className="text-sm font-medium text-[#4A3A4A]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
