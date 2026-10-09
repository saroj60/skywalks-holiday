"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plane, Hotel, Globe, FileCheck, Calendar, Users, MapPin, Phone, ArrowRight, Search, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "flights", label: "Flights", shortLabel: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", shortLabel: "Hotels", icon: Hotel },
  { id: "packages", label: "Holiday Packages", shortLabel: "Packages", icon: Globe },
  { id: "visa", label: "Visa Assistance", shortLabel: "Visa", icon: FileCheck },
];

const DESTINATION_SUGGESTIONS = [
  { id: "dubai-6d", title: "Dubai & Abu Dhabi, UAE", country: "United Arab Emirates", duration: "5N/6D", price: "NPR 65,000", link: "/packages/dubai-6d", category: "International" },
  { id: "thailand-5d", title: "Phuket & Bangkok, Thailand", country: "Thailand", duration: "4N/5D", price: "NPR 48,000", link: "/packages/thailand-5d", category: "International" },
  { id: "bali-7d", title: "Bali (Ubud & Seminyak), Indonesia", country: "Indonesia", duration: "6N/7D", price: "NPR 52,000", link: "/packages/bali-7d", category: "International" },
  { id: "europe-11d", title: "Europe (France, Swiss & Italy)", country: "Schengen Europe", duration: "10N/11D", price: "NPR 1,95,000", link: "/packages/europe-11d", category: "International" },
  { id: "singapore-6d", title: "Singapore & Kuala Lumpur", country: "Singapore / Malaysia", duration: "5N/6D", price: "NPR 62,000", link: "/packages/singapore-6d", category: "International" },
  { id: "japan-7d", title: "Tokyo, Mt. Fuji & Kyoto", country: "Japan", duration: "6N/7D", price: "NPR 1,45,000", link: "/packages/japan-7d", category: "International" },
  { id: "vietnam-6d", title: "Ha Long Bay & Hanoi, Vietnam", country: "Vietnam", duration: "5N/6D", price: "NPR 45,000", link: "/packages/vietnam-6d", category: "International" },
  { id: "maldives-5d", title: "Maldives Overwater Villa Resort", country: "Maldives", duration: "4N/5D", price: "NPR 85,000", link: "/packages/maldives-5d", category: "International" },
  { id: "pokhara-4d", title: "Pokhara & Annapurna Views", country: "Nepal", duration: "3N/4D", price: "NPR 18,500", link: "/services/packages/domestic", category: "Domestic" },
  { id: "chitwan-3d", title: "Chitwan National Park Safari", country: "Nepal", duration: "2N/3D", price: "NPR 14,000", link: "/services/packages/domestic", category: "Domestic" },
];

interface SearchBarProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function SearchBar({ activeTab: externalActiveTab, onTabChange }: SearchBarProps) {
  const router = useRouter();
  const [internalActiveTab, setInternalActiveTab] = useState("flights");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    setInternalActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // Filter suggestions based on user input
  const filteredSuggestions = DESTINATION_SUGGESTIONS.filter((dest) => {
    if (!destinationQuery.trim()) return true;
    const q = destinationQuery.toLowerCase();
    return (
      dest.title.toLowerCase().includes(q) ||
      dest.country.toLowerCase().includes(q) ||
      dest.category.toLowerCase().includes(q)
    );
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectDestination = (dest: any) => {
    setDestinationQuery(dest.title);
    setSelectedDestination(dest);
    setShowDropdown(false);
  };

  const handlePackageSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDestination) {
      router.push(selectedDestination.link);
      return;
    }

    if (destinationQuery.trim()) {
      const match = DESTINATION_SUGGESTIONS.find((d) =>
        d.title.toLowerCase().includes(destinationQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(destinationQuery.toLowerCase())
      );
      if (match) {
        router.push(match.link);
      } else {
        router.push(`/services/packages/international`);
      }
    } else {
      router.push("/services/packages/international");
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-visible p-3 md:p-4 text-left transition-all duration-300 relative z-30">
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
          <form onSubmit={(e) => { e.preventDefault(); router.push("/services/flights"); }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
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
              <Input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="text-xs sm:text-sm cursor-pointer"
                onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                onFocus={(e) => (e.target as HTMLInputElement).showPicker?.()}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Users size={12} className="text-[#0ea5e9] shrink-0" />
                Class / Passengers
              </label>
              <Input placeholder="Economy, 1 Adult" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button type="submit" size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Search Flights
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 2. Hotels Form */}
        {currentTab === "hotels" && (
          <form onSubmit={(e) => { e.preventDefault(); router.push("/services/hotels"); }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
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
              <Input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="text-xs sm:text-sm cursor-pointer"
                onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                onFocus={(e) => (e.target as HTMLInputElement).showPicker?.()}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Users size={12} className="text-[#0ea5e9] shrink-0" />
                Guests & Rooms
              </label>
              <Input placeholder="2 Guests, 1 Room" className="text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button type="submit" size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Search Hotels
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 3. Holiday Packages Form */}
        {currentTab === "packages" && (
          <form onSubmit={handlePackageSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
            <div className="relative" ref={dropdownRef}>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Globe size={12} className="text-[#0ea5e9] shrink-0" />
                Destination
              </label>
              <div className="relative">
                <Input
                  value={destinationQuery}
                  onChange={(e) => {
                    setDestinationQuery(e.target.value);
                    setSelectedDestination(null);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="e.g. Bali, Thailand, Europe"
                  className="text-xs sm:text-sm pr-8 cursor-text"
                />
                <Search size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none" />
              </div>

              {/* Autocomplete Suggestions Dropdown */}
              {showDropdown && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] p-2 z-[9999] min-w-[280px] sm:min-w-[340px] max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 border-b border-[#f1f5f9] flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">
                      Available Destinations ({filteredSuggestions.length})
                    </span>
                    <Sparkles size={12} className="text-amber-500" />
                  </div>

                  {filteredSuggestions.length > 0 ? (
                    <div className="divide-y divide-[#f8fafc] mt-1">
                      {filteredSuggestions.map((dest) => (
                        <div
                          key={dest.id}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSelectDestination(dest);
                          }}
                          className="w-full text-left p-2.5 hover:bg-[#f0f9ff] rounded-xl transition-all duration-150 flex items-center justify-between group cursor-pointer"
                        >
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#0a1628] group-hover:text-[#0ea5e9] transition-colors flex items-center gap-1.5">
                              <MapPin size={13} className="text-[#0ea5e9] shrink-0" />
                              <span>{dest.title}</span>
                            </div>
                            <div className="text-[11px] text-[#64748b] mt-0.5 ml-4.5 flex items-center gap-2">
                              <span>{dest.duration}</span>
                              <span>•</span>
                              <span className="font-semibold text-emerald-600">{dest.price}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold bg-[#e0f2fe] text-[#0ea5e9] px-2 py-0.5 rounded-full shrink-0 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                            View Package
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-[#94a3b8]">
                      No matching destinations found. Press Find Packages to browse all international tours.
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Calendar size={12} className="text-[#0ea5e9] shrink-0" />
                Travel Month / Date
              </label>
              <Input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="text-xs sm:text-sm cursor-pointer"
                onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                onFocus={(e) => (e.target as HTMLInputElement).showPicker?.()}
              />
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
              <Button type="submit" size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
                Find Packages
                <ArrowRight size={16} className="shrink-0" />
              </Button>
            </div>
          </form>
        )}

        {/* 4. Visa Assistance Form */}
        {currentTab === "visa" && (
          <form onSubmit={(e) => { e.preventDefault(); router.push("/services/visa"); }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-end">
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
              <Input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="text-xs sm:text-sm cursor-pointer"
                onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                onFocus={(e) => (e.target as HTMLInputElement).showPicker?.()}
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <Button type="submit" size="lg" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold text-xs sm:text-sm whitespace-nowrap">
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
