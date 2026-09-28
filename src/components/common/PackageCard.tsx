import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  id: number | string;
  title: string;
  image: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  inclusions: string[];
  badge?: string;
}

const badgeVariantMap: Record<string, "default" | "orange" | "navy" | "success" | "muted"> = {
  "Best Seller": "orange",
  "Top Rated": "orange",
  "Family Pick": "default",
  "New": "success",
  "Premium": "navy",
  "Best Value": "success",
  "Adventure": "default",
  "Culture": "muted",
};

export default function PackageCard({
  id,
  title,
  image,
  destination,
  duration,
  price,
  originalPrice,
  rating,
  reviews,
  inclusions,
  badge,
}: PackageCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer">
      {/* 100% Stretched Link covering the ENTIRE card area */}
      <Link href={`/packages/${id}`} className="absolute inset-0 z-10" aria-label={`View package details for ${title}`} />

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#0a1628] pointer-events-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariantMap[badge] ?? "default"}>{badge}</Badge>
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-[#f97316] text-white text-xs font-bold px-2 py-1 rounded-lg">
            {discount}% OFF
          </div>
        )}

        {/* Duration pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0a1628] text-xs font-semibold px-2.5 py-1 rounded-full">
          <Clock size={11} />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 pointer-events-none">
        {/* Destination */}
        <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-2">
          <MapPin size={12} className="text-[#0ea5e9]" />
          {destination}
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#0a1628] text-base leading-snug mb-3 group-hover:text-[#0ea5e9] transition-colors">
          {title}
        </h3>

        {/* Inclusions */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {inclusions.map((inc) => (
            <span
              key={inc}
              className="inline-flex items-center gap-1 text-xs text-[#475569] bg-[#f8fafc] border border-[#e2e8f0] px-2 py-0.5 rounded-full"
            >
              <Check size={10} className="text-emerald-500" />
              {inc}
            </span>
          ))}
        </div>

        {/* Rating + Price */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-[#0a1628]">{rating}</span>
              <span className="text-xs text-[#94a3b8]">({reviews} reviews)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#0a1628]">
                NPR {price.toLocaleString()}
              </span>
              <span className="text-xs text-[#94a3b8] line-through">
                NPR {originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-[#64748b]">per person</p>
          </div>

          <Button size="sm" className="relative z-20 pointer-events-auto">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
