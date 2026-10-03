"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Phone,
  ArrowRight,
  Share2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildCustomWhatsAppLink } from "@/lib/whatsapp";

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "destinations", label: "Destinations" },
  { id: "travelers", label: "Happy Travelers" },
  { id: "resorts", label: "Luxury Resorts" },
  { id: "flights", label: "Flight Experiences" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Burj Khalifa & Downtown Dubai Skyline",
    location: "Dubai, UAE",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    description: "Spectacular evening view of Burj Khalifa captured during our 6-Day Dubai Extravaganza tour.",
    date: "August 2026",
  },
  {
    id: 2,
    title: "Bali Beach Sunset & Private Villa Pool",
    location: "Seminyak, Bali",
    category: "resorts",
    categoryLabel: "Luxury Resorts",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
    description: "Relaxing sunset vibes at our partner 5-star beachfront resort in Seminyak, Bali.",
    date: "July 2026",
  },
  {
    id: 3,
    title: "Phuket Phi Phi Island Speedboat Adventure",
    location: "Phuket, Thailand",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85",
    description: "Crystal clear emerald waters and limestone cliff sightseeing on the Maya Bay tour.",
    date: "September 2026",
  },
  {
    id: 4,
    title: "Eiffel Tower Romantic Paris Evening",
    location: "Paris, France",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
    description: "Illuminated Eiffel Tower captured during our popular 11-Day Grand Europe Tour.",
    date: "June 2026",
  },
  {
    id: 5,
    title: "Nepalese Family at Dubai Desert Safari",
    location: "Dubai Dunes, UAE",
    category: "travelers",
    categoryLabel: "Happy Travelers",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85",
    description: "Unforgettable dune bashing and traditional sunset BBQ camp experience with our happy travelers.",
    date: "August 2026",
  },
  {
    id: 6,
    title: "Maldives Overwater Bungalow Villa",
    location: "Malé Atoll, Maldives",
    category: "resorts",
    categoryLabel: "Luxury Resorts",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
    description: "Direct ocean ladder access and glass floor panels in our top luxury Maldives honeymoon villa.",
    date: "August 2026",
  },
  {
    id: 7,
    title: "Tokyo Cherry Blossom & Mt. Fuji",
    location: "Tokyo & Hakone, Japan",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
    description: "Iconic Pagoda view with majestic Mount Fuji backdrop during peak Sakura season.",
    date: "April 2026",
  },
  {
    id: 8,
    title: "Singapore Marina Bay Sands SkyPark",
    location: "Singapore",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=85",
    description: "Panoramic cityscape view from the 57th floor SkyPark observation deck in Singapore.",
    date: "May 2026",
  },
  {
    id: 9,
    title: "Emirates International Flight Departure",
    location: "Kathmandu TIA / Dubai International",
    category: "flights",
    categoryLabel: "Flight Experiences",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    description: "Seamless flight booking experience with priority baggage allowance and comfortable legroom.",
    date: "September 2026",
  },
  {
    id: 10,
    title: "Bangkok Damnoen Saduak Floating Market",
    location: "Bangkok, Thailand",
    category: "destinations",
    categoryLabel: "Destinations",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=85",
    description: "Vibrant longtail boat market ride sampling authentic Thai street food and fresh tropical fruits.",
    date: "July 2026",
  },
  {
    id: 11,
    title: "Couple Tour Celebration in Bali Swing",
    location: "Ubud, Bali",
    category: "travelers",
    categoryLabel: "Happy Travelers",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85",
    description: "Breathtaking jungle swing photo shoot arranged exclusively for our couple package travelers.",
    date: "August 2026",
  },
  {
    id: 12,
    title: "Luxury Beachfront Infinity Pool Sunset",
    location: "Koh Samui, Thailand",
    category: "resorts",
    categoryLabel: "Luxury Resorts",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
    description: "5-star luxury resort amenities included in our premium Thailand island hopping package.",
    date: "June 2026",
  },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const handlePrevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNextLightbox, handlePrevLightbox]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Hero Banner Section */}
      <section className="bg-[#0a1628] text-white overflow-hidden py-2 sm:py-4">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[2.5/1]">
            <Image
              src="/images/gallery-hero-banner.png"
              alt="Our Travel Photo Gallery — Skywalks Holidays"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation Tabs */}
      <section className="container-custom -mt-5 sm:-mt-7 relative z-20 mb-10">
        <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-[#e2e8f0] flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0a1628] text-white shadow-md"
                  : "text-[#64748b] hover:text-[#0a1628] hover:bg-[#f1f5f9]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="container-custom">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#e2e8f0] cursor-pointer transition-all duration-300"
              >
                {/* Photo Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#0a1628]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                    {item.categoryLabel}
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 bg-white/20 group-hover:bg-[#0ea5e9] text-white p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform group-hover:scale-110">
                    <Maximize2 size={16} />
                  </div>

                  {/* Caption info at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#38bdf8] font-semibold mb-1">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Full Screen Modal View */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Modal Navigation Header */}
            <div className="flex items-center justify-between text-white z-10 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#0ea5e9] font-bold px-3 py-1 rounded-full uppercase">
                  {currentItem.categoryLabel}
                </span>
                <span className="text-white/60 text-xs hidden sm:inline">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Lightbox Body with Controls */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Arrow */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-[#0ea5e9] text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Container */}
              <div className="relative w-full max-w-5xl h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Next Arrow */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-[#0ea5e9] text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="max-w-4xl mx-auto w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-bold mb-1">
                  <MapPin size={14} />
                  <span>{currentItem.location}</span>
                  <span>•</span>
                  <span className="text-white/60">{currentItem.date}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold">{currentItem.title}</h2>
                <p className="text-white/80 text-xs sm:text-sm mt-1">{currentItem.description}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  size="default"
                  asChild
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold w-full md:w-auto"
                >
                  <a
                    href={buildCustomWhatsAppLink(
                      `Hello Skywalk Holidays! I saw this photo of "${currentItem.title}" (${currentItem.location}) in your media gallery. Please send me package details & pricing!`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={16} />
                    Inquire via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <section className="container-custom mt-16">
        <div className="bg-gradient-to-r from-[#0a1628] via-[#0f2342] to-[#0ea5e9] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <Sparkles className="absolute top-4 left-4 text-amber-400 opacity-30" size={48} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Want Your Photos Featured in Our Gallery?
            </h2>
            <p className="text-white/85 text-sm sm:text-base mb-8 leading-relaxed">
              Book your next international tour package with Skywalk Holidays and share your favorite travel moments with us!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold w-full sm:w-auto">
                <Link href="/services/packages/international">
                  Explore Tour Packages
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline-white" asChild className="w-full sm:w-auto border-white/30">
                <Link href="/contact">Contact Travel Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
