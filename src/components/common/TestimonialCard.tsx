import React from "react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location?: string;
  role?: string;
  rating: number;
  text?: string;
  content?: string;
  avatar: string;
  package: string;
}

export default function TestimonialCard({
  name,
  location,
  role,
  rating,
  text,
  content,
  avatar,
  package: pkg,
}: TestimonialCardProps) {
  const displayLocation = location || role || "Traveler";
  const displayText = text || content || "";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full text-left">
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center mb-5">
        <Quote size={18} className="text-[#0ea5e9]" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? "text-amber-400 fill-amber-400"
                : "text-[#e2e8f0] fill-[#e2e8f0]"
            }
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-[#475569] leading-relaxed flex-1 italic">
        &ldquo;{displayText}&rdquo;
      </p>

      {/* Package tag */}
      <div className="mt-4 mb-5">
        <span className="text-xs text-[#0ea5e9] bg-[#e0f2fe] px-2.5 py-1 rounded-full font-medium">
          {pkg}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-[#0ea5e9] text-white font-bold text-sm">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-[#0a1628] text-sm">{name}</p>
          <p className="text-xs text-[#94a3b8]">{displayLocation}</p>
        </div>
      </div>
    </div>
  );
}
