"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { buildCustomWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = buildCustomWhatsAppLink(
    `Hello ${COMPANY.name}! I am contacting you from your website for travel assistance.`
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white group"
    >
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
        <MessageSquare size={16} />
      </div>
      <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
}
