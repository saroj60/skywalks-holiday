"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plane, Headset, Tag, RefreshCw, Globe2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";
import FlightInquiryForm from "@/components/forms/FlightInquiryForm";

const AIRLINES = [
  {
    name: "Qatar Airways",
    routes: "Kathmandu → Doha & 150+ Global Destinations",
    code: "QR",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&q=80",
  },
  {
    name: "Emirates",
    routes: "Kathmandu → Dubai, Europe & USA",
    code: "EK",
    logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&q=80",
  },
  {
    name: "Air Arabia",
    routes: "Kathmandu → Sharjah & Middle East",
    code: "G9",
    logo: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=200&q=80",
  },
  {
    name: "IndiGo",
    routes: "Kathmandu → Delhi, Mumbai & India Network",
    code: "6E",
    logo: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=200&q=80",
  },
  {
    name: "Nepal Airlines",
    routes: "Kathmandu → Narita, Dubai, Kuala Lumpur & Domestic",
    code: "RA",
    logo: "https://images.unsplash.com/photo-1517649763962-0c623266010b?w=200&q=80",
  },
  {
    name: "Buddha Air",
    routes: "Pokhara, Biratnagar, Bhairahawa, Nepalgunj & Mountain Flights",
    code: "U4",
    logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=200&q=80",
  },
  {
    name: "Thai Airways",
    routes: "Kathmandu → Bangkok, East Asia & Australia",
    code: "TG",
    logo: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=200&q=80",
  },
  {
    name: "FlyDubai",
    routes: "Kathmandu → Dubai & GCC Network",
    code: "FZ",
    logo: "https://images.unsplash.com/photo-1524592714635-d77511a4834d?w=200&q=80",
  },
  {
    name: "Yeti Airlines",
    routes: "Pokhara, Everest View & Major Nepal Hubs",
    code: "YT",
    logo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&q=80",
  },
];

const WHY_BOOK_WITH_US = [
  {
    icon: Headset,
    title: "Expert Travel Assistance",
    description: "Dedicated flight specialists to assist with optimal transit routes, baggage allowances, seat preferences, and visa requirements.",
    color: "bg-[#e0f2fe] text-[#0ea5e9]",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Exclusive group fares, corporate discounts, and unpublished agency rates for both domestic Nepal and international flights.",
    color: "bg-[#fff7ed] text-[#f97316]",
  },
  {
    icon: RefreshCw,
    title: "Flexible Booking Support",
    description: "Hassle-free date change assistance, quick ticket cancellations, refund tracking, and 24/7 emergency rebooking support.",
    color: "bg-[#f0fdf4] text-emerald-600",
  },
  {
    icon: Globe2,
    title: "International & Domestic Routes",
    description: "Full ticketing coverage across 40+ domestic and international airlines operating out of Nepal with seamless connections.",
    color: "bg-[#faf5ff] text-purple-600",
  },
];

export default function FlightsPage() {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#163058] to-[#0ea5e9] py-20 md:py-28 text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Plane size={16} className="text-[#0ea5e9] rotate-45" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Domestic &amp; International Flight Assistance
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Book Your Next Flight With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-white">
              Confidence.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Whether flying across Nepal or traveling around the globe, our flight ticketing team provides competitive fares, personalized itineraries, and 24/7 rebooking support.
          </p>
        </div>
      </section>

      {/* 2. Flight Inquiry Form Section */}
      <section className="relative z-20 -mt-10 pb-16 px-4">
        <div className="container-custom">
          <FlightInquiryForm />
        </div>
      </section>

      {/* 3. Why Book Through Us Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Why Choose Skywalks Holidays"
            title="Why Book Your Flights Through Us?"
            subtitle="We handle your flight reservations with precision, care, and industry-leading support so your travel is always stress-free."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_BOOK_WITH_US.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-7 border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#0ea5e9]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Airlines We Book */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Airlines Network"
            title="Domestic &amp; International Airline Partners"
            subtitle="We issue direct tickets across leading international carriers and domestic Nepal airlines."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AIRLINES.map((airline) => {
              const hasFailed = failedLogos[airline.name];
              return (
                <div
                  key={airline.name}
                  className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg hover:border-[#0ea5e9] transition-all group flex items-center gap-4"
                >
                  <div className="relative w-14 h-14 rounded-2xl bg-[#0a1628] text-white flex items-center justify-center font-extrabold text-base shrink-0 group-hover:bg-[#0ea5e9] transition-colors overflow-hidden">
                    {airline.logo && !hasFailed ? (
                      <Image
                        src={airline.logo}
                        alt={airline.name}
                        fill
                        className="object-cover"
                        onError={() => setFailedLogos((prev) => ({ ...prev, [airline.name]: true }))}
                        sizes="56px"
                      />
                    ) : (
                      <span>{airline.code}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base mb-1 group-hover:text-[#0ea5e9] transition-colors flex items-center gap-1.5">
                      {airline.name}
                      <span className="text-xs font-mono font-normal text-[#94a3b8]">[{airline.code}]</span>
                    </h3>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      {airline.routes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Group Flight Booking or Urgent Assistance?"
        subtitle="Speak directly with our flight desk for group rates, corporate ticketing, or emergency rebooking."
        primaryLabel="Call Flight Desk"
        primaryHref="tel:+97798XXXXXXXX"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/977980000000"
      />
    </>
  );
}
