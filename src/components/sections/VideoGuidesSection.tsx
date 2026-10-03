"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Eye, Clock, ArrowRight, X, Sparkles, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

const FEATURED_VIDEOS = [
  {
    id: "vlog-1",
    title: "6 Days Dubai Tour Experience — Full Travel Vlog & Itinerary",
    destination: "Dubai, UAE",
    categoryLabel: "Destination Guide",
    thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "12:45",
    views: "24.5K views",
    host: "Aayush & Family",
    description: "Explore Downtown Dubai, desert dhow cruises, Museum of the Future & dune bashing with our Nepalese travelers.",
  },
  {
    id: "vlog-4",
    title: "Schengen Visa from Nepal — Documents & Approval Guide",
    destination: "Europe / Nepal",
    categoryLabel: "Visa Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "18:30",
    views: "42.8K views",
    host: "Skywalk Visa Desk",
    description: "Complete guide on VFS appointments, document preparation, bank statements, and cover letters from Kathmandu.",
  },
  {
    id: "vlog-2",
    title: "Inside Our Luxury Seminyak Villa — Bali Honeymoon Vlog",
    destination: "Bali, Indonesia",
    categoryLabel: "Customer Experience",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "09:15",
    views: "31.8K views",
    host: "Rohan & Sneha Karki",
    description: "Touring private pool villas, flower baths, and Ubud jungle swings with Rohan & Sneha.",
  },
];

export default function VideoGuidesSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof FEATURED_VIDEOS)[0] | null>(null);

  return (
    <section className="section-padding bg-[#0a1628] text-white relative overflow-hidden">
      {/* Subtle Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Visual Travel Guides"
          title="Watch Our Travel Video Guides & Vlogs"
          subtitle="Authentic video walkthroughs of tour destinations, luxury resort stays, and visa application procedures from Nepal."
          centered
          light
        />

        {/* Video Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Main Hero Featured Video (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 aspect-[16/9] sm:aspect-[2.1/1] flex flex-col justify-end">
            <Image
              src={FEATURED_VIDEOS[0].thumbnail}
              alt={FEATURED_VIDEOS[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

            {/* Play Button Trigger */}
            <button
              onClick={() => setActiveVideo(FEATURED_VIDEOS[0])}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0ea5e9] hover:bg-[#38bdf8] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 border-4 border-white/30 cursor-pointer z-10"
              aria-label="Play Featured Video"
            >
              <Play size={28} className="fill-current ml-1" />
            </button>

            {/* Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {FEATURED_VIDEOS[0].categoryLabel}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Clock size={13} />
                  {FEATURED_VIDEOS[0].duration}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white/90 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Eye size={13} />
                  {FEATURED_VIDEOS[0].views}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                {FEATURED_VIDEOS[0].title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-2 max-w-2xl font-normal">
                {FEATURED_VIDEOS[0].description}
              </p>
            </div>
          </div>

          {/* Secondary Video Cards Column */}
          <div className="flex flex-col gap-6 justify-between">
            {FEATURED_VIDEOS.slice(1).map((vlog) => (
              <div
                key={vlog.id}
                onClick={() => setActiveVideo(vlog)}
                className="bg-white/5 border border-white/10 hover:border-[#0ea5e9]/50 rounded-2xl p-4 flex gap-4 items-center group cursor-pointer transition-all duration-300 hover:bg-white/10 shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={14} className="fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {vlog.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold text-[#0ea5e9] uppercase tracking-wider block mb-1">
                    {vlog.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-2 mb-1 leading-snug">
                    {vlog.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-white/60">
                    <span>{vlog.destination}</span>
                    <span>•</span>
                    <span>{vlog.views}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Vlogs Banner Card */}
            <div className="bg-gradient-to-r from-[#0ea5e9]/20 to-[#163058] border border-[#0ea5e9]/30 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-sm mb-0.5">Looking for More Travel Videos?</h4>
                <p className="text-xs text-white/70">Browse our complete collection of 50+ video guides.</p>
              </div>
              <Link href="/vlogs">
                <Button size="sm" className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs shrink-0 gap-1.5 rounded-xl">
                  View All Vlogs
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#0a1628] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/80">
                <div className="flex items-center gap-2">
                  <span className="bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {activeVideo.categoryLabel}
                  </span>
                  <span className="text-white/70 text-xs font-semibold">{activeVideo.destination}</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video player"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Video Player Frame */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={activeVideo.videoEmbedUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{activeVideo.title}</h3>
                  <p className="text-xs text-white/70">{activeVideo.description}</p>
                </div>
                <Link href="/vlogs" onClick={() => setActiveVideo(null)}>
                  <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-xs font-bold shrink-0">
                    Explore More Guides
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
