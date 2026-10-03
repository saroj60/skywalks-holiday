import React, { Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";
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
      {/* Hero Banner Section */}
      <section className="bg-[#0a1628] text-white overflow-hidden py-2 sm:py-4">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[2.5/1]">
            <Image
              src="/images/services-hero-banner.png"
              alt="Explore Our Holiday Packages — Skywalks Holidays"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
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
