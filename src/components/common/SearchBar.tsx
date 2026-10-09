"use client";

import React, { useState } from "react";
import { Plane, Hotel, Globe, FileCheck, Calendar, Users, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "flights", label: "Flights", shortLabel: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", shortLabel: "Hotels", icon: Hotel },
  { id: "packages", label: "Holiday Packages", shortLabel: "Packages", icon: Globe },
  { id: "visa", label: "Visa Assistance", shortLabel: "Visa", icon: FileCheck },
];

interface SearchBarProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function SearchBar({ activeTab: externalActiveTab, onTabChange }: SearchBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState("flights");

  const currentTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    setInternalActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-3 md:p-4 text-left transition-all duration-300">
      {/* Tab Navigation - Horizontal Scrollable on Mobile */}
      <div className="flex border-b border-[#e2e8f0] pb-2 mb-4 gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex-1 min-w-[70px] sm:min-w-[120px] shrink-0 sm:shrink flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-[11px] sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none",
                isActive
                  ? "bg-[#0a1628] text-white shadow-md"
                  : "text-[#64748b] hover:text-[#0a1628] hover:bg-[#f1f5f9]"
              )}
            >
              <Icon size={14} className={cn("shrink-0 sm:w-4 sm:h-4", isActive ? "text-[#0ea5e9]" : "text-[#64748b]")} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="inline sm:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Forms Container */}
      <div className="px-1 sm:px-2 pb-2">
        {/* 1. Flights Form */}
        {currentTab === "flights" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <MapPin size={12} className="text-[#0ea5e9] shrink-0" />
                From
              </label>
              <Input placeholder="Kathmandu (KTM)" defaultValue="Kathmandu (KTM)" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <MapPin size={12} className="text-[#f97316] shrink-0" />
                To
              </label>
              <Input placeholder="Destination City / Airport" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Calendar size={12} className="text-[#0ea5e9] shrink-0" />
                Departure Date
              </label>
              <Input type="date" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Users size={12} className="text-[#0ea5e9] shrink-0" />
                Class / Passengers
              </label>
              <Input placeholder="Economy, 1 Adult" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Search Flights
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 2. Hotels Form */}
        {currentTab === "hotels" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
            <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <MapPin size={12} className="text-[#0ea5e9] shrink-0" />
                Destination / Hotel Name
              </label>
              <Input placeholder="City, Hotel, or Landmark" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Calendar size={12} className="text-[#0ea5e9] shrink-0" />
                Check-in / Out
              </label>
              <Input type="date" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Users size={12} className="text-[#0ea5e9] shrink-0" />
                Guests & Rooms
              </label>
              <Input placeholder="2 Guests, 1 Room" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Search Hotels
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 3. Holiday Packages Form */}
        {currentTab === "packages" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Globe size={12} className="text-[#0ea5e9] shrink-0" />
                Destination
              </label>
              <Input placeholder="e.g. Bali, Thailand, Europe" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Calendar size={12} className="text-[#0ea5e9] shrink-0" />
                Travel Month
              </label>
              <Input placeholder="e.g. October 2026" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Users size={12} className="text-[#0ea5e9] shrink-0" />
                Travelers
              </label>
              <Input placeholder="e.g. Family (4 Pax)" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                Budget (NPR)
              </label>
              <Input placeholder="e.g. 50,000 - 1,00,000" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Find Packages
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 4. Visa Assistance Form */}
        {currentTab === "visa" && (
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Globe size={12} className="text-[#0ea5e9] shrink-0" />
                Destination Country
              </label>
              <Input placeholder="e.g. UAE, Schengen, USA" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <FileCheck size={12} className="text-[#0ea5e9] shrink-0" />
                Visa Type
              </label>
              <Input placeholder="Tourist / Business / Student" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Phone size={12} className="text-[#0ea5e9] shrink-0" />
                Phone / WhatsApp
              </label>
              <Input placeholder="+977-98XXXXXXXX" className="text-xs sm:text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                Travel Date
              </label>
              <Input type="date" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Request Visa Info
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
