"use client";

import React, { useState, useEffect } from "react";
import { FileText, Image as ImageIcon, Calendar, Clock, XCircle, Briefcase } from "lucide-react";

import PackagePdfButton from "@/components/packages/PackagePdfButton";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "outline-itinerary", label: "Outline Itinerary", icon: Calendar },
  { id: "detailed-itinerary", label: "Detailed Itinerary", icon: Clock },
  { id: "excluding-cost", label: "Excluding Cost", icon: XCircle },
  { id: "equipment", label: "Equipment & Essentials", icon: Briefcase },
];

interface PackageSubNavProps {
  pkg?: any;
}

export default function PackageSubNav({ pkg }: PackageSubNavProps) {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 90;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm mb-8 py-2">
      <div className="container-custom flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[40px] ${
                  isActive
                    ? "bg-[#0a1628] text-white shadow-md"
                    : "bg-[#f8fafc] text-[#64748b] hover:bg-[#e0f2fe] hover:text-[#0ea5e9] border border-[#e2e8f0]"
                }`}
              >
                <Icon size={16} className={isActive ? "text-[#0ea5e9]" : ""} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        {pkg && (
          <div className="hidden lg:block shrink-0">
            <PackagePdfButton pkg={pkg} variant="outline" size="sm" />
          </div>
        )}
      </div>
    </div>
  );
}
