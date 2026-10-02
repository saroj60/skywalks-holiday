"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Video,
  Eye,
  Clock,
  User,
  MapPin,
  X,
  Phone,
  ArrowRight,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildCustomWhatsAppLink } from "@/lib/whatsapp";

const VLOG_CATEGORIES = [
  { id: "all", label: "All Videos" },
  { id: "destinations", label: "Destination Guides" },
  { id: "reviews", label: "Customer Reviews" },
  { id: "tips", label: "Visa & Travel Tips" },
];

const VLOG_ITEMS = [
  {
    id: "vlog-1",
    title: "6 Days Dubai Tour Experience — Full Travel Vlog & Itinerary",
    destination: "Dubai, UAE",
    category: "destinations",
    categoryLabel: "Destination Guide",
    thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "12:45",
    views: "24.5K views",
    date: "Aug 2026",
    host: "Aayush & Family",
    description:
      "Join our Nepalese travelers as they explore Downtown Dubai, ride desert dhow cruises, visit the Museum of the Future, and experience dune bashing.",
    packageLink: "/packages/dubai-6d",
  },
  {
    id: "vlog-2",
    title: "Inside Our Luxury Seminyak Villa — Bali Honeymoon Vlog",
    destination: "Bali, Indonesia",
    category: "reviews",
    categoryLabel: "Customer Review",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "09:15",
    views: "31.8K views",
    date: "Jul 2026",
    host: "Rohan & Sneha Karki",
    description:
      "Real honeymoon review from Rohan & Sneha showing their private pool villa in Seminyak, flower baths, and Ubud jungle swings booked through Skywalk Holidays.",
    packageLink: "/packages/bali-7d",
  },
  {
    id: "vlog-3",
    title: "Phuket to Phi Phi Islands 4K Island Hopping Tour",
    destination: "Phuket, Thailand",
    category: "destinations",
    categoryLabel: "Destination Guide",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "15:20",
    views: "18.2K views",
    date: "Sep 2026",
    host: "Sujita Gurung",
    description:
      "Full tour guide walkthrough of Maya Bay, Viking Cave, Monkey Beach, and James Bond Island with speedboat transfer details.",
    packageLink: "/packages/thailand-5d",
  },
  {
    id: "vlog-4",
    title: "Schengen Visa from Nepal — Documents & Approval Guide",
    destination: "Europe / Nepal",
    category: "tips",
    categoryLabel: "Visa & Travel Tips",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "18:30",
    views: "42.8K views",
    date: "Jun 2026",
    host: "Skywalk Visa Desk",
    description:
      "Step-by-step breakdown of document preparation, bank statement requirements, cover letters, and VFS appointment booking in Kathmandu.",
    packageLink: "/services/visa",
  },
  {
    id: "vlog-5",
    title: "Japan 7-Day Tour — Tokyo, Kyoto & Mt. Fuji Experience",
    destination: "Tokyo, Japan",
    category: "destinations",
    categoryLabel: "Destination Guide",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "21:10",
    views: "15.4K views",
    date: "Apr 2026",
    host: "Dr. Bikash Shrestha",
    description:
      "Riding the Shinkansen bullet train, visiting Fushimi Inari shrine, exploring Akihabara, and dining in Shinjuku during cherry blossom season.",
    packageLink: "/services/packages/international",
  },
  {
    id: "vlog-6",
    title: "Maldives All-Inclusive Overwater Resort Walkthrough",
    destination: "Malé, Maldives",
    category: "reviews",
    categoryLabel: "Customer Review",
    thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    duration: "11:05",
    views: "29.3K views",
    date: "Aug 2026",
    host: "Pooja & Friends",
    description:
      "Exploring ocean villa amenities, sunset dolphin cruises, buffet dining options, and speedboat transfers from Malé Airport.",
    packageLink: "/services/packages/international",
  },
];

export default function VlogsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVlog, setActiveVlog] = useState<(typeof VLOG_ITEMS)[0] | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredVlogs =
    activeCategory === "all"
      ? VLOG_ITEMS
      : VLOG_ITEMS.filter((item) => item.category === activeCategory);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const featuredVlog = VLOG_ITEMS[0];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#0f2342] to-[#0a1628] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-c from-sky-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider backdrop-blur-md">
            <Video size={14} className="text-[#f97316]" />
            Travel Experiences & Video Guides
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow">
            Skywalk <span className="text-[#0ea5e9]">Travel Vlogs</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Watch real customer tour recaps, destination walkthroughs, visa tips, and resort reviews to inspire your next trip from Nepal.
          </p>
        </div>
      </section>

      {/* Featured Main Video Card */}
      <section className="container-custom -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-[#e2e8f0] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Thumbnail with Play Overlay */}
          <div
            onClick={() => setActiveVlog(featuredVlog)}
            className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-slate-900 group cursor-pointer overflow-hidden"
          >
            <Image
              src={featuredVlog.thumbnail}
              alt={featuredVlog.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform transform">
                <Play size={32} className="ml-1 fill-white" />
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Featured Vlog
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1">
              <Clock size={12} />
              {featuredVlog.duration}
            </div>
          </div>

          {/* Right Video Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#0ea5e9] font-bold uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {featuredVlog.destination}
                </span>
                <span>•</span>
                <span className="text-[#64748b]">{featuredVlog.views}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628] leading-snug mb-3">
                {featuredVlog.title}
              </h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                {featuredVlog.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center font-bold text-xs">
                  <User size={14} />
                </div>
                <div>
                  <span className="text-xs text-[#94a3b8] block leading-none">Traveler</span>
                  <span className="text-xs font-bold text-[#0a1628]">{featuredVlog.host}</span>
                </div>
              </div>

              <Button
                onClick={() => setActiveVlog(featuredVlog)}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold"
              >
                <Play size={16} className="fill-white" />
                Watch Vlog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Tabs */}
      <section className="container-custom mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {VLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0a1628] text-white shadow-md"
                  : "bg-white text-[#64748b] hover:text-[#0a1628] border border-[#e2e8f0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Vlogs Video Grid */}
      <section className="container-custom">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredVlogs.map((vlog) => (
              <motion.div
                key={vlog.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveVlog(vlog)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#e2e8f0] cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Thumbnail Container */}
                <div>
                  <div className="relative h-52 sm:h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={vlog.thumbnail}
                      alt={vlog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="ml-0.5 fill-white" />
                      </div>
                    </div>

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 bg-[#0a1628]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                      {vlog.categoryLabel}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                      <Clock size={11} />
                      {vlog.duration}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-[#0ea5e9] font-bold uppercase tracking-wider mb-2">
                      <MapPin size={12} />
                      <span>{vlog.destination}</span>
                      <span>•</span>
                      <span className="text-[#94a3b8]">{vlog.views}</span>
                    </div>

                    <h3 className="font-bold text-base text-[#0a1628] leading-snug line-clamp-2 mb-2 group-hover:text-[#0ea5e9] transition-colors">
                      {vlog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748b] line-clamp-2 leading-relaxed">
                      {vlog.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0 border-t border-[#f1f5f9] mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                    <User size={12} className="text-[#0ea5e9]" />
                    <span>{vlog.host}</span>
                  </div>
                  <span className="text-xs font-bold text-[#f97316] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Watch Now
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Embedded Video Player Modal Overlay */}
      <AnimatePresence>
        {activeVlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between text-white z-10 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#f97316] font-bold px-3 py-1 rounded-full uppercase">
                  {activeVlog.categoryLabel}
                </span>
                <span className="text-white/60 text-xs hidden sm:inline">
                  {activeVlog.destination}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
                  <span>{copied ? "Copied!" : "Share"}</span>
                </button>
                <button
                  onClick={() => setActiveVlog(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15">
                <iframe
                  src={activeVlog.videoEmbedUrl}
                  title={activeVlog.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Modal Bottom Footer Info */}
            <div className="max-w-5xl mx-auto w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-bold mb-1">
                  <MapPin size={14} />
                  <span>{activeVlog.destination}</span>
                  <span>•</span>
                  <span className="text-white/60">{activeVlog.views}</span>
                  <span>•</span>
                  <span className="text-white/60">{activeVlog.host}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold">{activeVlog.title}</h2>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  size="default"
                  asChild
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold w-full md:w-auto"
                >
                  <a
                    href={buildCustomWhatsAppLink(
                      `Hello Skywalk Holidays! I watched the vlog "${activeVlog.title}" (${activeVlog.destination}) and want to inquire about booking this tour package.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={16} />
                    Inquire This Tour Package
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Vlog Share CTA */}
      <section className="container-custom mt-16">
        <div className="bg-gradient-to-r from-[#0a1628] via-[#0f2342] to-[#0ea5e9] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <Sparkles className="absolute top-4 right-4 text-amber-400 opacity-30" size={48} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Are You a Travel Creator or Vlogger?
            </h2>
            <p className="text-white/85 text-sm sm:text-base mb-8 leading-relaxed">
              Partner with Skywalk Holidays for sponsored tour packages and feature your vlogs in front of 50,000+ Nepalese travelers!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold w-full sm:w-auto">
                <Link href="/contact">
                  Submit Your Vlog
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
