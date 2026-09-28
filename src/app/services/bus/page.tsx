import React from "react";
import { Metadata } from "next";
import { Bus, MapPin, Clock, Star, ShieldCheck, MessageSquare, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";
import BusInquiryForm from "@/components/forms/BusInquiryForm";

export const metadata: Metadata = {
  title: "Travel Across Nepal With Ease | Bus Ticket Booking — Skywalks Holidays",
  description: "Book tourist VIP sofa buses, luxury AC coaches, and night buses across Nepal. Kathmandu to Pokhara, Chitwan, Biratnagar, Dharan, Butwal, Janakpur.",
};

const POPULAR_ROUTES = [
  {
    from: "Kathmandu",
    to: "Pokhara",
    duration: "6 – 7 Hours",
    busType: "Tourist VIP Sofa / Deluxe AC Bus",
    startingPrice: 600,
    departureTime: "7:00 AM (Morning) & 7:30 PM (Night)",
    features: ["Foldable Sofa Seats", "AC / Heater", "Free Wi-Fi", "Mineral Water", "Charging Ports"],
  },
  {
    from: "Kathmandu",
    to: "Chitwan (Sauraha)",
    duration: "4 – 5 Hours",
    busType: "Tourist AC Coach",
    startingPrice: 500,
    departureTime: "7:00 AM (Morning Departure)",
    features: ["Reclining Seats", "AC", "Luggage Space", "River View Route"],
  },
  {
    from: "Kathmandu",
    to: "Biratnagar",
    duration: "10 – 12 Hours",
    busType: "Deluxe Night AC Coach",
    startingPrice: 1200,
    departureTime: "3:30 PM & 4:30 PM (Evening)",
    features: ["Sleeper Berth / Wide Seats", "AC", "Blanket Included", "Dinner Stop"],
  },
  {
    from: "Kathmandu",
    to: "Dharan",
    duration: "9 – 10 Hours",
    busType: "Deluxe Night AC Bus",
    startingPrice: 1100,
    departureTime: "4:00 PM & 5:00 PM (Evening)",
    features: ["Reclining AC Seats", "Suspension Ride", "Entertainment Screen"],
  },
  {
    from: "Kathmandu",
    to: "Butwal",
    duration: "7 – 8 Hours",
    busType: "Luxury AC Bus",
    startingPrice: 850,
    departureTime: "6:30 AM & 6:00 PM",
    features: ["High Comfort Seats", "Air Conditioned", "Fast Highway Route"],
  },
  {
    from: "Kathmandu",
    to: "Janakpur",
    duration: "6 – 7 Hours",
    busType: "Deluxe Coach Bus",
    startingPrice: 750,
    departureTime: "7:30 AM & 7:00 PM",
    features: ["Comfortable Seating", "AC", "Pilgrimage Route Support"],
  },
];

const BUS_TYPES_LIST = [
  {
    title: "VIP Sofa Tourist Bus",
    desc: "2x1 spacious folding sofa seats, high-speed Wi-Fi, USB charging ports, and complimentary bottled water.",
    icon: "🛋️",
  },
  {
    title: "Deluxe AC Coach",
    desc: "Air-conditioned 2x2 comfortable reclining seating for smooth day and night highway travel across Nepal.",
    icon: "🚍",
  },
  {
    title: "Night Sleeper / Semi-Sleeper",
    desc: "Overnight long-distance buses equipped with blankets, pillows, and smooth air-suspension.",
    icon: "🌙",
  },
  {
    title: "Private Bus Charter",
    desc: "Dedicated private bus rentals for corporate retreats, family events, school tours, and group pilgrimages.",
    icon: "🚎",
  },
];

export default function BusPage() {
  const getWhatsAppRouteLink = (route: typeof POPULAR_ROUTES[0]) => {
    const text = `Hello Skywalks Bus Desk! I would like to book bus seats for the following route:

🚌 *Route*: ${route.from} ➔ ${route.to}
⏳ *Duration*: ${route.duration}
💺 *Bus Type*: ${route.busType}
💰 *Starting Price*: NPR ${route.startingPrice} per seat

Please share departure timings and seat selection chart.`;
    return `https://wa.me/977980000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* 1. Hero Section */}
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
            <Bus size={16} className="text-[#0ea5e9]" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Tourist VIP &amp; Deluxe Bus Ticketing Nepal
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Travel Across Nepal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-white">
              With Ease.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Book tourist VIP sofa buses, luxury AC coaches, and overnight buses across all major highways in Nepal. Fast seat confirmation via WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Bus Inquiry Form Container */}
      <section className="relative z-20 -mt-10 pb-16 px-4">
        <div className="container-custom">
          <BusInquiryForm />
        </div>
      </section>

      {/* 3. Popular Routes Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Major Highways &amp; Destinations"
            title="Popular Bus Routes Across Nepal"
            subtitle="Explore direct bus services connecting Kathmandu with Pokhara, Chitwan, Biratnagar, Dharan, Butwal, and Janakpur."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {POPULAR_ROUTES.map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="group bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-2xl hover:border-[#0ea5e9]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Route Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-[#0a1628]">{route.from}</span>
                      <span className="text-[#0ea5e9] font-bold">➔</span>
                      <span className="text-lg font-extrabold text-[#0ea5e9]">{route.to}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Daily Departure
                    </span>
                  </div>

                  {/* Route Specs */}
                  <div className="space-y-2.5 mb-5 text-xs text-[#64748b]">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#0ea5e9]" />
                      <span><strong>Duration:</strong> {route.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bus size={14} className="text-[#0ea5e9]" />
                      <span><strong>Bus Type:</strong> {route.busType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#f97316]" />
                      <span><strong>Timing:</strong> {route.departureTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {route.features.map((feat) => (
                      <span key={feat} className="text-[11px] bg-[#f8fafc] text-[#475569] border border-[#e2e8f0] px-2.5 py-0.5 rounded-full font-medium">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#94a3b8] block">Starting Price</span>
                    <span className="text-xl font-extrabold text-[#0a1628]">NPR {route.startingPrice}</span>
                    <span className="text-xs text-[#94a3b8]"> / seat</span>
                  </div>

                  <a
                    href={getWhatsAppRouteLink(route)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all"
                  >
                    <MessageSquare size={14} />
                    Request Seat
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bus Types Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Fleet &amp; Comfort"
            title="Choose Your Travel Class"
            subtitle="From VIP Sofa seating to overnight sleeper coaches — travel Nepal in maximum comfort."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUS_TYPES_LIST.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#0ea5e9]/40 transition-all duration-300 text-left"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-[#0a1628] text-base mb-2">{b.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need a Charter Bus for Group or Event Travel?"
        subtitle="We arrange private bus charters for marriage parties, school trips, pilgrimages, and corporate tours."
        primaryLabel="Inquire Charter Bus"
        primaryHref="/contact"
        secondaryLabel="Talk to Bus Desk"
        secondaryHref="tel:+97798XXXXXXXX"
      />
    </>
  );
}
