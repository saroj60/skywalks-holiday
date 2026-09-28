"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Users, Sparkles, MessageSquare, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export interface Departure {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  seasonTag: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
  originalPrice: number;
  image: string;
  status: string;
}

export default function UpcomingHolidaysSection() {
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/departures")
      .then((res) => res.json())
      .then((data) => {
        if (data.departures) {
          setDepartures(data.departures);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const formatDateString = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch (e) {
      return dateStr;
    }
  };

  const generateWhatsAppLink = (dep: Departure) => {
    return buildWhatsAppLink({
      service: "Fixed Departure Seat Reservation",
      name: "[Traveler]",
      destination: dep.destination,
      travelDate: `${dep.startDate} to ${dep.endDate}`,
      passengers: "1 Seat",
      whatsappNumber: "",
      additionalDetails: `Departure: ${dep.title} | Season: ${dep.seasonTag} | Fixed Date: ${dep.startDate}`,
    });
  };

  if (!loading && departures.length === 0) return null;

  return (
    <section className="section-padding bg-[#0a1628] text-white relative overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Fixed Departure Dates"
          title="Upcoming Holiday Departures"
          subtitle="Guaranteed flight & tour departures with fixed dates, festival season specials, and live seat tracking."
          light
        />

        {/* Departure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departures.map((dep) => {
            const seatsPercent = Math.round(((dep.totalSeats - dep.availableSeats) / dep.totalSeats) * 100);
            return (
              <div
                key={dep.id}
                className="bg-[#0f2040] rounded-3xl overflow-hidden border border-[#163058] shadow-xl hover:border-[#0ea5e9]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Date Badge */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={dep.image}
                      alt={dep.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2040] via-transparent to-black/30" />

                    {/* Season Tag */}
                    <div className="absolute top-3 left-3 bg-[#0a1628]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow">
                      {dep.seasonTag}
                    </div>

                    {/* Urgency Badge */}
                    {dep.availableSeats <= 4 && (
                      <div className="absolute top-3 right-3 bg-[#f97316] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg animate-pulse shadow">
                        🔥 Only {dep.availableSeats} Seats Left
                      </div>
                    )}

                    {/* Fixed Date Chip */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-[#0a1628]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-[#38bdf8]">
                      <Calendar size={14} className="text-[#f97316] shrink-0" />
                      <span>
                        {formatDateString(dep.startDate)} – {formatDateString(dep.endDate)}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                      <MapPin size={12} className="text-[#0ea5e9]" />
                      {dep.destination}
                    </div>

                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#38bdf8] transition-colors">
                      {dep.title}
                    </h3>

                    {/* Seat Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] text-[#94a3b8] font-semibold">
                        <span>Seat Allocation</span>
                        <span className="text-white font-bold">
                          {dep.availableSeats} of {dep.totalSeats} seats open
                        </span>
                      </div>
                      <div className="w-full bg-[#163058] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#0ea5e9] to-[#f97316] h-full transition-all duration-500"
                          style={{ width: `${seatsPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-5 pt-0 border-t border-[#163058]/50 mt-auto">
                  <div className="flex items-baseline justify-between py-3">
                    <div>
                      <span className="text-[11px] text-[#94a3b8] uppercase font-semibold block">Fixed Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-white">
                          NPR {dep.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#94a3b8] line-through">
                          NPR {dep.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#38bdf8] font-bold">All Inclusive</span>
                  </div>

                  <a
                    href={generateWhatsAppLink(dep)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold py-3 px-4 rounded-xl shadow-lg transition-all text-xs min-h-[44px]"
                  >
                    <MessageSquare size={16} />
                    Reserve Seat on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
