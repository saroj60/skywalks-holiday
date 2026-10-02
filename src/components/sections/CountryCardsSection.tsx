"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, MapPin, Sparkles } from "lucide-react";
import { POPULAR_COUNTRIES } from "@/lib/constants";
import SectionHeader from "@/components/common/SectionHeader";

export default function CountryCardsSection() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Explore by Country"
          title="Popular Travel Destinations"
          subtitle="Discover curated holiday packages categorized by top travel countries across Asia, Europe & beyond."
        />

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {POPULAR_COUNTRIES.map((country) => (
            <Link
              key={country.id}
              href={country.href}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-slate-200/80 flex flex-col justify-between p-5"
            >
              {/* Country Background Image */}
              <Image
                src={country.image}
                alt={`${country.name} holiday packages`}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Badges Row */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Flag + Badge */}
                <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0a1628] shadow-lg border border-white/60">
                  <span className="text-sm">{country.flag}</span>
                  <span>{country.badge}</span>
                </div>

                {/* Number of Packages Pill */}
                <div className="inline-flex items-center gap-1.5 bg-[#0ea5e9] text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md shadow-sky-500/30 group-hover:bg-[#f97316] transition-colors duration-300">
                  <Package size={13} />
                  <span>{country.packagesCount} Packages</span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 text-left mt-auto">
                <div className="text-xs font-medium text-sky-300 flex items-center gap-1 mb-1">
                  <MapPin size={12} className="text-sky-400" />
                  <span>{country.subtitle}</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight leading-snug mb-2 group-hover:text-sky-300 transition-colors">
                  {country.name}
                </h3>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-white/90">
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-semibold">
                      Packages From
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      NPR {country.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm group-hover:bg-[#0ea5e9] group-hover:text-white flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-10">
          <Link
            href="/services/packages/international"
            className="inline-flex items-center gap-2.5 bg-[#0a1628] hover:bg-[#0ea5e9] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Sparkles size={16} className="text-amber-400" />
            <span>Browse All Country Holiday Packages</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
