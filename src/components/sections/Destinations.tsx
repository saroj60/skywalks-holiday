import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Package } from "lucide-react";
import { DESTINATIONS } from "@/lib/constants";
import SectionHeader from "@/components/common/SectionHeader";

export default function Destinations() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Popular Destinations"
          title="Where Do You Want to Go?"
          subtitle="From the majestic Himalayas to the beaches of Bali — we cover every dream destination."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DESTINATIONS.map((dest, index) => (
            <Link
              key={dest.name}
              href={`/destinations/${dest.name.toLowerCase().replace(/,?\s+/g, "-")}`}
              className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative ${index < 2 ? "h-72" : "h-56"} overflow-hidden`}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-white/80 text-xs mb-1">
                    <MapPin size={12} />
                    {dest.name}
                  </div>
                  <h3 className="text-white font-bold text-xl leading-snug">{dest.name}</h3>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Package size={12} />
                      {dest.packages} Packages
                    </div>
                    <div className="text-white text-sm font-semibold">
                      From NPR {dest.startingFrom.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0ea5e9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services/packages/international"
            className="inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:gap-3 transition-all"
          >
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
