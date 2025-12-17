"use client";

import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dusty-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-6 leading-tight">
          Ready to Transform Your Vision?
        </h2>

        <p className="text-lg md:text-xl text-plum/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with Aurhem to build sustainable, scalable infrastructure that
          shapes the future of emerging markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-plum text-quaternary hover:bg-white hover:text-plum px-8 py-6 text-lg font-semibold rounded-md transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-tertiary text-plum hover:bg-tertiary/10  px-8 py-6 text-lg font-semibold rounded-md transition-all duration-300 backdrop-blur-sm"
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
