"use client";

import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { MapPin, Factory, Globe, ArrowRight, ChartArea } from "lucide-react";

export const InitiativeSection = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-quaternary relative overflow-hidden"
      aria-labelledby="dubai-initiative-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-plum/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-dusty-rose/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            id="dubai-initiative-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-6"
          >
            Dubai Impact: Where We’re Building Today
          </h2>
          <p className="text-lg text-[#4A3A4A] max-w-4xl mx-auto leading-relaxed">
            Our flagship operations are rooted in Dubai — a global hub for
            innovation, energy, and infrastructure. Here, we’re laying the
            groundwork for scalable, sustainable development that will expand
            across the Gulf and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image / Visual */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1640184713828-e48c36a3ded8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Gyan Group industrial facility in Dubai - modern infrastructure, energy plant, logistics hub"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-plum/70 to-transparent flex items-end justify-center p-6">
              <div className="text-white text-center">
                <MapPin className="inline mr-2" /> Dubai, UAE
              </div>
            </div>
          </div>

          {/* Right: Content + Stats */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-plum font-medium">
              <Factory className="w-6 h-6" />
              <span>Flagship Operations</span>
            </div>

            <p className="text-[#4A3A4A] leading-relaxed">
              Based in Dubai, our integrated facility supports infrastructure
              development, energy solutions, and financial services tailored to
              the region’s rapid growth. From solar-powered logistics hubs to
              smart industrial parks, we’re turning vision into tangible assets.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/70 p-4 rounded-lg border border-dusty-rose/30">
                <div className="text-2xl font-bold text-plum">
                  <MapPin className="mb-2" />
                </div>
                <div className="text-sm text-[#4A3A4A]">Dubai, UAE</div>
              </div>
              <div className="bg-white/70 p-4 rounded-lg border border-dusty-rose/30">
                <div className="text-2xl font-bold text-plum">
                  <ChartArea className="mb-2" />
                </div>
                <div className="text-sm text-[#4A3A4A]">Scalable Model</div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="bg-plum hover:bg-dusty-rose text-tertiary px-8 py-3 rounded-md text-base font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/initiatives">
                  Explore Our Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
