import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bgImage?: string;
}

export default function CTABanner({
  title = "Ready for Your Dream Vacation?",
  subtitle = "Let our travel experts craft the perfect itinerary for you. Personalized, affordable, unforgettable.",
  primaryLabel = "Plan My Trip",
  primaryHref = "/services/custom",
  secondaryLabel = "Talk to an Expert",
  secondaryHref = "/contact",
  bgImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=85",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a1628]">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Travel Background"
        fill
        className="object-cover object-center scale-105"
        sizes="100vw"
      />

      {/* Light Overlay for clear image visibility & text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/65 via-[#0a1628]/40 to-[#0a1628]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/70" />

      <div className="relative container-custom py-20 text-center z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 mx-auto shadow-xl">
          <Sparkles size={24} className="text-[#f97316]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 max-w-3xl mx-auto leading-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" asChild className="bg-[#f97316] hover:bg-[#ea580c] shadow-2xl shadow-orange-500/40 text-white font-bold">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button size="xl" variant="outline-white" asChild className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white hover:text-[#0a1628] font-bold">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
