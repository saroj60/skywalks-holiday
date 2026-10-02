import React, { Suspense } from "react";
import { Metadata } from "next";
import { Globe, Sparkles } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";
import HolidayPackagesListing from "@/components/packages/HolidayPackagesListing";

export const metadata: Metadata = {
  title: "Explore Our Holiday Packages | Skywalks Holidays",
  description: "Curated domestic Nepal tours and international holiday packages. Dubai, Thailand, Bali, Pokhara, Mustang, Europe & more.",
};

export default function HolidayPackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#163058] to-[#0ea5e9] py-20 md:py-28 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Globe size={16} className="text-[#0ea5e9]" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Curated International &amp; Domestic Tour Packages
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-white">
              Holiday Packages
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Handcrafted holiday itineraries with round-trip flights, handpicked luxury stays, transfers, and guided sightseeing — with full visa assistance.
          </p>
        </div>
      </section>

      {/* Main Listing & Filters Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Handcrafted Journeys"
            title="Choose Your Next Destination"
            subtitle="Filter by destination, duration, budget, or category to find your ideal holiday package."
          />

          <Suspense fallback={<div className="text-center py-12 font-medium text-slate-500">Loading holiday packages...</div>}>
            <HolidayPackagesListing />
          </Suspense>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Looking for a Completely Customized Holiday?"
        subtitle="Our travel designers craft bespoke private itineraries tailored precisely to your preferences, dates, and budget."
        primaryLabel="Design Custom Package"
        primaryHref="/services/custom"
        secondaryLabel="Talk to Tour Expert"
        secondaryHref="tel:+97798XXXXXXXX"
      />
    </>
  );
}
