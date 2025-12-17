"use client";

import { useRef, useState, useEffect } from "react";
import { Home, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  backgroundImages: string[];
}

export const Hero = ({ title, description, backgroundImages }: HeroProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
        });
      }

      if (descriptionRef.current) {
        tl.from(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
      }

      if (buttonRef.current) {
        tl.from(buttonRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        });
      }
    },
    { scope: bannerRef }
  );

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden"
    >
      {/* Image Slider with Fade */}
      <div className="absolute inset-0 h-full w-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image}
              alt={`${title} – Slide ${index + 1}`}
              className="object-cover object-center h-full w-full"
            />
          </div>
        ))}

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-plum/40 to-dusty-rose/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <h1
          ref={titleRef}
          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        >
          {title}
        </h1>

        <p
          ref={descriptionRef}
          className="text-white text-base md:text-lg lg:text-xl max-w-5xl leading-relaxed text-center"
        >
          {description}
        </p>

        <Button
          ref={buttonRef}
          className="bg-white text-plum hover:text-tertiary hover:bg-plum transition-colors duration-300 px-6 py-2 mt-6 rounded-md font-semibold"
          asChild
        >
          <Link to="/about">Learn more</Link>
        </Button>
      </div>
    </div>
  );
};
