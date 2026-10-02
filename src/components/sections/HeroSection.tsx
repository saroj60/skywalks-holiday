"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Plane,
  Hotel,
  Globe,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/common/SearchBar";

const HERO_SLIDES = [
  {
    id: "flights",
    serviceName: "Flight Booking",
    icon: Plane,
    badge: "International & Domestic Flights",
    title: "Fly to Anywhere in the World",
    subtitle:
      "Search & book international flights from Kathmandu with competitive fares, instant e-tickets, and 24/7 Nepal support.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
    alt: "Airplane flying above clouds — Skywalk Holidays Flight Booking",
    ctaText: "Book Flights Now",
    ctaLink: "/flights",
  },
  {
    id: "hotels",
    serviceName: "Hotel Booking",
    icon: Hotel,
    badge: "Luxury Resorts & Boutique Stays",
    title: "Handpicked Premium Stay Destinations",
    subtitle:
      "Exclusive deals on luxury beachfront resorts, boutique city hotels, and cozy lodges worldwide with guaranteed best rates.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=90",
    alt: "Luxury resort pool overview — Skywalk Holidays Hotel Booking",
    ctaText: "Explore Hotels",
    ctaLink: "/hotels",
  },
  {
    id: "packages",
    serviceName: "Holiday Packages",
    icon: Globe,
    badge: "Curated International Tours",
    title: "Unforgettable Holiday Experiences",
    subtitle:
      "All-inclusive tour packages to Dubai, Bali, Thailand, Europe, Maldives & beyond — fully customized for your dream vacation.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90",
    alt: "Tropical beach resort with palms — Skywalk Holidays Tour Packages",
    ctaText: "Browse Packages",
    ctaLink: "/holiday-packages",
  },
  {
    id: "visa",
    serviceName: "Visa Assistance",
    icon: FileCheck,
    badge: "Expert Visa Guidance & Clearance",
    title: "Hassle-Free Visa Processing",
    subtitle:
      "Fast-track tourist, business, and visit visa documentation support for Schengen, UAE, USA, UK, Japan, Australia & more.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1920&q=90",
    alt: "Passports and travel documents — Skywalk Holidays Visa Assistance",
    ctaText: "Apply for Visa",
    ctaLink: "/visa-services",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slideshow every 5.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0a1628] select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Sliding Background Image Slideshow with Framer Motion */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-stage dark navy gradient overlays for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/95 z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0a1628]/50 to-[#0a1628]/90 z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 container-custom pt-10 md:pt-16 pb-8 flex flex-col items-center text-center">
        {/* Interactive Service Selector Pills Header */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 max-w-4xl px-2">
          {HERO_SLIDES.map((slide, index) => {
            const Icon = slide.icon;
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0ea5e9] text-white shadow-lg shadow-sky-500/40 scale-105"
                    : "bg-white/10 hover:bg-white/20 text-white/80 border border-white/15 backdrop-blur-md"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-[#0ea5e9]"} />
                <span>{slide.serviceName}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-badge display */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-xl">
          <Sparkles size={14} className="text-[#f97316] animate-pulse" />
          <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wider uppercase">
            {currentSlide.badge}
          </span>
        </div>

        {/* Headline with animated content switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + "-text"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center max-w-5xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md min-h-[1.2em]">
              {currentSlide.title}
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mb-8 leading-relaxed font-normal drop-shadow">
              {currentSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8 w-full sm:w-auto">
              <Button
                size="xl"
                asChild
                className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white font-bold shadow-2xl shadow-orange-500/30 text-base md:text-lg"
              >
                <Link href={currentSlide.ctaLink}>
                  {currentSlide.ctaText}
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button
                size="xl"
                variant="outline-white"
                asChild
                className="w-full sm:w-auto text-base md:text-lg backdrop-blur-sm border-white/30 hover:bg-white/15"
              >
                <Link href="/services/custom">
                  <Compass size={20} className="text-[#0ea5e9]" />
                  Plan Custom Trip
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrow Controls */}
        <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 pointer-events-none z-30">
          <button
            onClick={handlePrev}
            aria-label="Previous service slide"
            className="pointer-events-auto p-3 rounded-full bg-black/30 hover:bg-[#0ea5e9] text-white border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-xl cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next service slide"
            className="pointer-events-auto p-3 rounded-full bg-black/30 hover:bg-[#0ea5e9] text-white border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-xl cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="hidden sm:flex items-center justify-center gap-6 text-white/70 text-xs font-semibold tracking-wide uppercase mt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#0ea5e9]" />
            100% Guaranteed Booking
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span>
            50,000+ Happy Travelers
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div>24/7 Expert Support</div>
        </div>
      </div>

      {/* Floating Booking / Inquiry Search Card at the Bottom */}
      <div className="relative z-20 container-custom pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto shadow-2xl transform transition-transform hover:-translate-y-1">
          <SearchBar
            activeTab={currentSlide.id}
            onTabChange={(tabId) => {
              const idx = HERO_SLIDES.findIndex((s) => s.id === tabId);
              if (idx !== -1) {
                setCurrentIndex(idx);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
