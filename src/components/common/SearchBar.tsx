"use client";

import React, { useState } from "react";
import { Plane, Hotel, Globe, FileCheck, Calendar, Users, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "packages", label: "Holiday Packages", icon: Globe },
  { id: "visa", label: "Visa Assistance", icon: FileCheck },
];

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-3 md:p-4 text-left transition-all duration-300">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-[#e2e8f0] pb-2 mb-4 gap-1">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 min-w-[120px] flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-[#0a1628] text-white shadow-md"
                  : "text-[#64748b] hover:text-[#0a1628] hover:bg-[#f1f5f9]"
              )}
            >
              <Icon size={16} className={isActive ? "text-[#0ea5e9]" : "text-[#64748b]"} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Forms Container */}
      <div className="px-2 pb-2">
        {/* 1. Flights Form */}
        {activeTab === "flights" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#0ea5e9]" />
                From
              </label>
              <Input placeholder="Kathmandu (KTM)" defaultValue="Kathmandu (KTM)" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#f97316]" />
                To
              </label>
              <Input placeholder="Destination City / Airport" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-[#0ea5e9]" />
                Departure Date
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users size={12} className="text-[#0ea5e9]" />
                Class / Passengers
              </label>
              <Input placeholder="Economy, 1 Adult" />
            </div>
            <div>
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25">
                Search Flights
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>
        )}

        {/* 2. Hotels Form */}
        {activeTab === "hotels" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#0ea5e9]" />
                Destination / Hotel Name
              </label>
              <Input placeholder="City, Hotel, or Landmark" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-[#0ea5e9]" />
                Check-in / Out
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users size={12} className="text-[#0ea5e9]" />
                Guests & Rooms
              </label>
              <Input placeholder="2 Guests, 1 Room" />
            </div>
            <div>
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25">
                Search Hotels
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>
        )}

        {/* 3. Holiday Packages Form */}
        {activeTab === "packages" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Globe size={12} className="text-[#0ea5e9]" />
                Destination
              </label>
              <Input placeholder="e.g. Bali, Thailand, Europe" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-[#0ea5e9]" />
                Travel Month
              </label>
              <Input placeholder="e.g. October 2026" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users size={12} className="text-[#0ea5e9]" />
                Travelers
              </label>
              <Input placeholder="e.g. Family (4 Pax)" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                Budget (NPR)
              </label>
              <Input placeholder="e.g. 50,000 - 1,00,000" />
            </div>
            <div>
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25">
                Find Packages
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>
        )}

        {/* 4. Visa Assistance Form */}
        {activeTab === "visa" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Globe size={12} className="text-[#0ea5e9]" />
                Destination Country
              </label>
              <Input placeholder="e.g. UAE, Schengen, USA" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FileCheck size={12} className="text-[#0ea5e9]" />
                Visa Type
              </label>
              <Input placeholder="Tourist / Business / Student" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Phone size={12} className="text-[#0ea5e9]" />
                Phone / WhatsApp
              </label>
              <Input placeholder="+977-98XXXXXXXX" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                Travel Date
              </label>
              <Input type="date" />
            </div>
            <div>
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25">
                Request Visa Info
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
