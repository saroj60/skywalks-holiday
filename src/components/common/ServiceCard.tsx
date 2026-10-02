import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  image: string;
  ctaText?: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  image,
  ctaText = "Explore Service",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-2xl hover:border-[#0ea5e9]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full",
        className
      )}
    >
      {/* Top Image Banner */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0a1628]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-black/20" />

        {/* Floating Icon Badge */}
        <div className="absolute -bottom-5 left-5 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-xl border border-[#e2e8f0] flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-300 group-hover:scale-110">
          <Icon size={22} className="sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-7 p-4 sm:pt-8 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a1628] mb-2 group-hover:text-[#0ea5e9] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-5 sm:mb-6">
            {description}
          </p>
        </div>

        {/* Clear CTA Button */}
        <div>
          <Button
            asChild
            className="w-full justify-between bg-[#f8fafc] hover:bg-[#0a1628] text-[#0a1628] hover:text-white border border-[#e2e8f0] group-hover:border-[#0a1628] transition-all duration-300 font-semibold rounded-xl py-4 sm:py-5 text-xs sm:text-sm"
          >
            <Link href={href}>
              <span>{ctaText}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
