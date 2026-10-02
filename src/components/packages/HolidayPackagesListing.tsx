"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Check, Filter, MessageSquare, Eye, Star, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useSearchParams } from "next/navigation";

export interface PackageItem {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string; // e.g. "5 Nights / 6 Days"
  daysCount: number;
  price: number;
  originalPrice: number;
  category: "International Holidays" | "Honeymoon Packages" | "Family Tours" | "Adventure Tours" | "Group Tours";
  badge: string;
  rating: number;
  reviewsCount: number;
  image: string;
  shortDescription: string;
  inclusions: string[];
}

const PACKAGES_DATA: PackageItem[] = [
  {
    id: "dubai-6d",
    title: "Dubai Extravaganza & Desert Safari",
    destination: "Dubai & Abu Dhabi",
    country: "UAE",
    duration: "5 Nights / 6 Days",
    daysCount: 6,
    price: 65000,
    originalPrice: 78000,
    category: "International Holidays",
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    shortDescription: "Experience luxury shopping, desert safari with BBQ dinner, Burj Khalifa top deck, and Marina dhow cruise.",
    inclusions: ["Round-trip Flights", "4-Star Hotel", "Desert Safari", "Burj Khalifa Ticket", "Visa Assistance"],
  },
  {
    id: "thailand-5d",
    title: "Thailand Bangkok & Phuket Beach Escape",
    destination: "Bangkok & Phuket",
    country: "Thailand",
    duration: "4 Nights / 5 Days",
    daysCount: 5,
    price: 38000,
    originalPrice: 46000,
    category: "Family Tours",
    badge: "Popular Pick",
    rating: 4.8,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    shortDescription: "Discover Thailand's vibrant street markets, pristine Phi Phi Island speedboat tours, and sacred temples.",
    inclusions: ["Flights", "Beach Resort", "Speedboat Tour", "City Sightseeing", "Breakfast"],
  },
  {
    id: "bali-7d",
    title: "Tropical Bali Romance & Cultural Getaway",
    destination: "Ubud & Kuta",
    country: "Indonesia",
    duration: "6 Nights / 7 Days",
    daysCount: 7,
    price: 52000,
    originalPrice: 64000,
    category: "Honeymoon Packages",
    badge: "Romantic",
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    shortDescription: "Stay in luxury pool villas, visit iconic rice terraces, Uluwatu sunset temple, and sacred water palaces.",
    inclusions: ["Private Villa", "Flower Bath", "Sunset Cruise", "Airport Transfers", "Breakfast"],
  },
  {
    id: "europe-11d",
    title: "Grand Europe Highlights — Paris, Alps & Rome",
    destination: "Paris, Swiss Alps, Venice & Rome",
    country: "France, Switzerland, Italy",
    duration: "10 Nights / 11 Days",
    daysCount: 11,
    price: 195000,
    originalPrice: 230000,
    category: "Group Tours",
    badge: "Bucket List",
    rating: 5.0,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    shortDescription: "Eiffel Tower climb, Mt. Titlis cable car ride, gondola ride in Venice, and Colosseum guided tour.",
    inclusions: ["Roundtrip Flights", "Schengen Visa Support", "4-Star Hotels", "Bullet Train Tickets", "Breakfast"],
  },
  {
    id: "singapore-6d",
    title: "Singapore & Malaysia Twin City Fun",
    destination: "Singapore & Kuala Lumpur",
    country: "Singapore & Malaysia",
    duration: "5 Nights / 6 Days",
    daysCount: 6,
    price: 62000,
    originalPrice: 74000,
    category: "International Holidays",
    badge: "Family Favorite",
    rating: 4.7,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    shortDescription: "Universal Studios Singapore, Sentosa Island, Gardens by the Bay, and Petronas Twin Towers in KL.",
    inclusions: ["Flights", "Hotels", "Universal Studios Ticket", "Coach Transfers", "Breakfast"],
  },
  {
    id: "japan-7d",
    title: "Magical Japan — Tokyo, Mt. Fuji & Kyoto",
    destination: "Tokyo, Kyoto & Mt. Fuji",
    country: "Japan",
    duration: "6 Nights / 7 Days",
    daysCount: 7,
    price: 145000,
    originalPrice: 170000,
    category: "International Holidays",
    badge: "Premium",
    rating: 4.9,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
    shortDescription: "Shinkansen bullet train rides, Mt. Fuji 5th Station, Kyoto Kinkaku-ji golden pavilion, and Shibuya Crossing.",
    inclusions: ["Flights", "4-Star Hotels", "Bullet Train Pass", "Fuji Tour", "Japan Visa Support"],
  },
  {
    id: "vietnam-6d",
    title: "Discover Vietnam — Ha Long Bay Cruise & Hanoi",
    destination: "Ha Long Bay & Hanoi",
    country: "Vietnam",
    duration: "5 Nights / 6 Days",
    daysCount: 6,
    price: 45000,
    originalPrice: 56000,
    category: "Adventure Tours",
    badge: "Trending",
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    shortDescription: "Overnight luxury cruise in Ha Long Bay, kayaking through limestone caves, and Hanoi Old Quarter street food.",
    inclusions: ["Flights", "Luxury Bay Cruise", "Boutique Hotel", "Kayaking", "Vietnamese Visa"],
  },
  {
    id: "maldives-5d",
    title: "Maldives Luxury Overwater Villa Resort",
    destination: "Malé & South Atoll",
    country: "Maldives",
    duration: "4 Nights / 5 Days",
    daysCount: 5,
    price: 85000,
    originalPrice: 105000,
    category: "Honeymoon Packages",
    badge: "Luxury Escape",
    rating: 5.0,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    shortDescription: "Stay in an overwater bungalow with private lagoon access, snorkeling with sea turtles, and sunset dolphin cruise.",
    inclusions: ["Flights", "Overwater Villa", "Speedboat Transfer", "Snorkeling Gear", "All Meals"],
  },
];

const CATEGORIES = [
  "All Packages",
  "International Holidays",
  "Honeymoon Packages",
  "Family Tours",
  "Adventure Tours",
  "Group Tours",
] as const;

export default function HolidayPackagesListing() {
  const searchParams = useSearchParams();
  const urlCountry = searchParams ? (searchParams.get("country") || searchParams.get("destination")) : null;

  const [packagesList, setPackagesList] = useState<PackageItem[]>(PACKAGES_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Packages");
  const [destinationFilter, setDestinationFilter] = useState<string>("All");
  const [durationFilter, setDurationFilter] = useState<string>("All");
  const [budgetFilter, setBudgetFilter] = useState<string>("All");

  React.useEffect(() => {
    if (urlCountry) {
      setDestinationFilter(urlCountry);
    }
  }, [urlCountry]);

  React.useEffect(() => {
    const fetchLivePackages = async () => {
      try {
        const res = await fetch("/api/packages");
        if (res.ok) {
          const data = await res.json();
          if (data.packages && data.packages.length > 0) {
            const mapped: PackageItem[] = data.packages.map((pkg: any) => ({
              id: String(pkg.id),
              title: pkg.title,
              destination: pkg.destination,
              country: pkg.country || pkg.destination,
              duration: pkg.duration,
              daysCount: Number(pkg.duration?.match(/\d+/g)?.[1] || pkg.duration?.match(/\d+/g)?.[0] || 6),
              price: pkg.price,
              originalPrice: pkg.originalPrice || pkg.price * 1.2,
              category: pkg.category === "Honeymoon" ? "Honeymoon Packages" : "International Holidays",
              badge: pkg.badge || "Popular",
              rating: pkg.rating || 4.9,
              reviewsCount: pkg.reviews || 120,
              image: pkg.coverImage || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
              shortDescription: pkg.overview || "Experience luxury travel and guided sightseeing.",
              inclusions: Array.isArray(pkg.inclusions) ? pkg.inclusions : [],
            }));
            setPackagesList(mapped);
          }
        }
      } catch (e) {}
    };
    fetchLivePackages();
  }, []);

  const filteredPackages = useMemo(() => {
    return packagesList.filter((pkg) => {
      // Category filter
      if (selectedCategory !== "All Packages" && pkg.category !== selectedCategory) {
        return false;
      }
      // Destination filter
      if (destinationFilter !== "All" && !pkg.destination.toLowerCase().includes(destinationFilter.toLowerCase()) && !pkg.country.toLowerCase().includes(destinationFilter.toLowerCase())) {
        return false;
      }
      // Duration filter
      if (durationFilter === "short" && pkg.daysCount > 5) return false;
      if (durationFilter === "medium" && (pkg.daysCount < 6 || pkg.daysCount > 7)) return false;
      if (durationFilter === "long" && pkg.daysCount < 8) return false;

      // Budget filter
      if (budgetFilter === "under50k" && pkg.price >= 50000) return false;
      if (budgetFilter === "50k-100k" && (pkg.price < 50000 || pkg.price > 100000)) return false;
      if (budgetFilter === "above100k" && pkg.price <= 100000) return false;

      return true;
    });
  }, [packagesList, selectedCategory, destinationFilter, durationFilter, budgetFilter]);

  const generateWhatsAppLink = (pkg: PackageItem) => {
    return buildWhatsAppLink({
      service: "Holiday Package Inquiry",
      name: "[Customer]",
      destination: pkg.destination,
      travelDate: "Flexible",
      passengers: "2 Travelers",
      whatsappNumber: "",
      additionalDetails: `Interested in: ${pkg.title} (${pkg.duration}) | Starting Price: NPR ${pkg.price.toLocaleString()}`,
    });
  };

  return (
    <div className="space-y-10">
      {/* 1. Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] ${
              selectedCategory === cat
                ? "bg-[#0a1628] text-white shadow-lg shadow-navy-900/20"
                : "bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Advanced Filter Options Bar */}
      <div className="bg-white rounded-3xl p-5 border border-[#e2e8f0] shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e2e8f0] text-xs font-bold uppercase tracking-wider text-[#0a1628]">
          <Filter size={16} className="text-[#0ea5e9]" />
          <span>Filter Packages By</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div>
            <label className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-1.5 block">
              Destination
            </label>
            <select
              className="w-full h-11 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 text-base sm:text-sm font-semibold text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
            >
              <option value="All">All Destinations</option>
              <option value="Dubai">Dubai &amp; UAE</option>
              <option value="Thailand">Thailand</option>
              <option value="Bali">Bali, Indonesia</option>
              <option value="Singapore">Singapore &amp; Malaysia</option>
              <option value="Europe">Europe</option>
              <option value="Japan">Japan</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Maldives">Maldives</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-1.5 block">
              Duration
            </label>
            <select
              className="w-full h-11 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 text-base sm:text-sm font-semibold text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
            >
              <option value="All">All Durations</option>
              <option value="short">1 – 5 Days</option>
              <option value="medium">6 – 7 Days</option>
              <option value="long">8+ Days</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-1.5 block">
              Budget Range
            </label>
            <select
              className="w-full h-11 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 text-base sm:text-sm font-semibold text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
            >
              <option value="All">All Budgets</option>
              <option value="under50k">Under NPR 50,000</option>
              <option value="50k-100k">NPR 50,000 – 100,000</option>
              <option value="above100k">Above NPR 100,000</option>
            </select>
          </div>

          {/* Reset button */}
          <div className="flex items-end">
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All Packages");
                setDestinationFilter("All");
                setDurationFilter("All");
                setBudgetFilter("All");
              }}
              className="w-full h-11 rounded-xl border-[#e2e8f0] text-xs font-semibold text-[#64748b] hover:text-[#0a1628]"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-sm text-[#64748b] px-1">
        <div>
          Showing <span className="font-bold text-[#0a1628]">{filteredPackages.length}</span> curated holiday package{filteredPackages.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* 3. Modern Package Cards Grid */}
      {filteredPackages.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#e2e8f0] shadow-sm space-y-4 max-w-xl mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-sky-50 text-[#0ea5e9] flex items-center justify-center mx-auto text-2xl font-bold">
            🌴
          </div>
          <h3 className="text-xl font-bold text-[#0a1628]">No Packages Found</h3>
          <p className="text-sm text-[#64748b]">
            We couldn't find any packages matching your filter criteria. Try selecting a different destination or budget range.
          </p>
          <Button
            onClick={() => {
              setSelectedCategory("All Packages");
              setDestinationFilter("All");
              setDurationFilter("All");
              setBudgetFilter("All");
            }}
            className="bg-[#0a1628] text-white hover:bg-[#163058]"
          >
            Reset All Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => {
            const discountPercent = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
            return (
              <div
                key={pkg.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-2xl hover:border-[#0ea5e9]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* 100% Stretched Link across the ENTIRE card container */}
                <Link
                  href={`/packages/${pkg.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View full details for ${pkg.title}`}
                />

                <div>
                  {/* Destination Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#0a1628] pointer-events-none">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#0ea5e9] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      {pkg.badge}
                    </div>

                    {/* Discount */}
                    {discountPercent > 0 && (
                      <div className="absolute top-4 right-4 bg-[#f97316] text-white text-xs font-extrabold px-2.5 py-1 rounded-lg">
                        {discountPercent}% OFF
                      </div>
                    )}

                    {/* Duration Pill */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow">
                      <Clock size={12} className="text-[#0ea5e9]" />
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pointer-events-none">
                    {/* Destination */}
                    <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin size={12} className="text-[#0ea5e9]" />
                        {pkg.destination}
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star size={12} className="fill-amber-400" />
                        {pkg.rating} ({pkg.reviewsCount})
                      </span>
                    </div>

                    {/* Package Title */}
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#64748b] leading-relaxed mb-4 line-clamp-2">
                      {pkg.shortDescription}
                    </p>

                    {/* Inclusions */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {pkg.inclusions.slice(0, 3).map((inc) => (
                        <span key={inc} className="inline-flex items-center gap-1 text-[11px] text-[#475569] bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-0.5 rounded-full font-medium">
                          <Check size={10} className="text-emerald-500" />
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="p-6 pt-0 border-t border-[#f1f5f9] mt-auto">
                  <div className="flex items-baseline justify-between mb-4 pt-4 pointer-events-none">
                    <div>
                      <span className="text-xs text-[#94a3b8] block">Starting Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-extrabold text-[#0a1628]">
                          NPR {pkg.price.toLocaleString("en-US")}
                        </span>
                        <span className="text-xs text-[#94a3b8] line-through">
                          NPR {pkg.originalPrice.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#64748b] font-medium">per person</span>
                  </div>

                  {/* Dual Buttons: View Details (Link) + WhatsApp (Button) */}
                  <div className="grid grid-cols-2 gap-2 relative z-20">
                    <span className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-[#0a1628] group-hover:bg-[#0a1628] group-hover:text-white transition-colors min-h-[44px]">
                      <Eye size={14} />
                      View Details
                    </span>

                    <a
                      href={generateWhatsAppLink(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md transition-colors min-h-[44px]"
                    >
                      <MessageSquare size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
