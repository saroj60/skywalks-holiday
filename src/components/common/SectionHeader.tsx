import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-[#0a1628]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/70" : "text-[#64748b]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
