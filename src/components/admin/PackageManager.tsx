"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Plus,
  Edit,
  Trash2,
  Clock,
  MapPin,
  Check,
  X,
  Image as ImageIcon,
  Save,
  Tag,
  RefreshCw,
  FileText,
  Calendar,
  Hotel,
  Car,
  CheckCircle2,
  XCircle,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface PackageRecord {
  id: number;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  originalPrice: number;
  overview?: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hotelInfo?: string;
  transportation?: string;
  coverImage: string;
  gallery: string[];
  category: string;
  badge: string;
  featured: boolean;
  status: "ACTIVE" | "DRAFT" | "ARCHIVED";
}

export const INITIAL_PACKAGES: PackageRecord[] = [
  {
    id: 1,
    title: "Dubai Extravaganza & Desert Safari",
    destination: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    duration: "5 Nights / 6 Days",
    price: 65000,
    originalPrice: 78000,
    overview: "Embark on a luxury 6-day journey to Dubai. Includes 4-star hotel stay, Burj Khalifa 124th floor tickets, desert safari with dune bashing and BBQ, and Marina dhow cruise.",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
      "https://images.unsplash.com/photo-1546412414-8035e1786b9e?w=800&q=80"
    ],
    inclusions: [
      "Round-trip International Flights from Kathmandu",
      "5 Nights Accommodation in 4-Star Hotel with Breakfast",
      "Desert Safari with 4WD Dune Bashing & BBQ Dinner",
      "Burj Khalifa 124th Floor Ticket",
      "Dubai Marina Dhow Cruise with Buffet Dinner",
      "UAE Tourist Visa & Airport Transfers"
    ],
    exclusions: [
      "Personal Expenses & Shopping",
      "Meals not mentioned in inclusions",
      "Tips for guides and drivers",
      "Optional water sports"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Dubai & Marina Dhow Cruise", description: "Airport pickup, hotel check-in. Evening Marina Dhow Cruise with dinner." },
      { day: "Day 2", title: "Dubai City Tour & Burj Khalifa", description: "Guided tour covering Gold Souk & Atlantis. Visit 124th floor Burj Khalifa." },
      { day: "Day 3", title: "Shopping & Afternoon Desert Safari", description: "Free morning for shopping. 3:00 PM Desert Safari with 4WD dune bashing & BBQ show." },
      { day: "Day 4", title: "Abu Dhabi City Tour & Grand Mosque", description: "Full-day tour to Abu Dhabi visiting Sheikh Zayed Mosque and Ferrari World photo stop." },
      { day: "Day 5", title: "Leisure / Optional Miracle Garden", description: "Free leisure day or optional visit to Miracle Garden & Global Village." },
      { day: "Day 6", title: "Departure to Kathmandu", description: "Hotel check-out and private transfer to airport for flight back to Kathmandu." }
    ],
    hotelInfo: "4-Star Al Khoory Atrium Hotel or Carlton Downtown (or similar)",
    transportation: "Private AC Vehicle for transfers and luxury coach for tours.",
    category: "International",
    badge: "Best Seller",
    featured: true,
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Thailand Bangkok & Phuket Beach Escape",
    destination: "Bangkok & Phuket",
    country: "Thailand",
    duration: "4 Nights / 5 Days",
    price: 38000,
    originalPrice: 46000,
    overview: "Discover Thailand's vibrant street markets, pristine Phi Phi Island speedboat tours, and sacred temples.",
    coverImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"],
    inclusions: ["Roundtrip Flights", "Beach Resort Stay", "Phi Phi Speedboat Tour", "Daily Breakfast"],
    exclusions: ["National Park Entry Fees", "Personal Shopping"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Phuket", description: "Hotel transfer and beach leisure time." },
      { day: "Day 2", title: "Phi Phi Island Speedboat Tour", description: "Full day island tour with buffet lunch and snorkeling." },
      { day: "Day 3", title: "Fly to Bangkok", description: "Flight to Bangkok, check-in and night market shopping." },
      { day: "Day 4", title: "Bangkok Temple & City Tour", description: "Visit Wat Pho, Golden Buddha, and Marble Temple." },
      { day: "Day 5", title: "Departure", description: "Transfer to Suvarnabhumi Airport for return flight." }
    ],
    hotelInfo: "4-Star Beach Resort in Phuket & Centara Watergate Bangkok",
    transportation: "AC Minivan & Speedboat Transfers",
    category: "International",
    badge: "Top Rated",
    featured: true,
    status: "ACTIVE",
  },
  {
    id: 3,
    title: "Tropical Bali Romance & Cultural Getaway",
    destination: "Ubud & Kuta",
    country: "Indonesia",
    duration: "6 Nights / 7 Days",
    price: 52000,
    originalPrice: 64000,
    overview: "Stay in luxury pool villas, visit iconic Tegalalang rice terraces, Uluwatu sunset temple, and sacred water palaces.",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80"],
    inclusions: ["Private Pool Villa", "Flower Bath Experience", "Sunset Catamaran Cruise", "Airport Transfers", "Daily Breakfast"],
    exclusions: ["Personal Expenses & Spa Upgrades"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Bali", description: "Private airport transfer to Seminyak luxury pool villa." },
      { day: "Day 2", title: "Ubud Rice Terraces & Jungle Swing", description: "Guided tour to Tegalalang rice field and famous Ubud swing." },
      { day: "Day 3", title: "Water Temple & Kintamani Volcano", description: "Visit Tirta Empul holy spring and Batur volcano view point." },
      { day: "Day 4", title: "Sunset Cruise & Uluwatu Kecak Dance", description: "Sunset catamaran cruise and cliffside Kecak fire dance." },
      { day: "Day 5", title: "Nusa Penida Island Speedboat Day Tour", description: "Visit Kelingking T-Rex beach and Broken Beach." },
      { day: "Day 6", title: "Leisure & Spa Relaxation", description: "Free day for beach relaxation and traditional Balinese massage." },
      { day: "Day 7", title: "Departure to Kathmandu", description: "Hotel check-out and airport transfer." }
    ],
    hotelInfo: "5-Star Aksari Resort Ubud & Seminyak Beachfront Villa",
    transportation: "Private AC SUV with English Speaking Driver",
    category: "Honeymoon",
    badge: "Romantic",
    featured: true,
    status: "ACTIVE",
  },
  {
    id: 4,
    title: "Grand Europe Highlights — Paris, Alps & Rome",
    destination: "Paris, Swiss Alps, Venice & Rome",
    country: "France, Switzerland, Italy",
    duration: "10 Nights / 11 Days",
    price: 195000,
    originalPrice: 230000,
    overview: "Eiffel Tower climb, Mt. Titlis cable car snow ride, gondola cruise in Venice, and Colosseum guided tour.",
    coverImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"],
    inclusions: ["Roundtrip International Flights", "Schengen Visa Support", "4-Star City Hotels", "TGV Express Train Tickets", "Daily Breakfast"],
    exclusions: ["City Tourist Taxes (2-4 Euros/night)", "Optional Museum Tickets"],
    itinerary: [
      { day: "Day 1-3", title: "Paris City of Lights", description: "Eiffel Tower 2nd Floor, Seine River Cruise, Louvre Museum." },
      { day: "Day 4-6", title: "Swiss Alps & Mt. Titlis", description: "Bullet train to Lucerne. Mt. Titlis ice flyer cable car." },
      { day: "Day 7-8", title: "Venice Canals", description: "Gondola ride and St. Mark's Square exploration." },
      { day: "Day 9-11", title: "Eternal City Rome", description: "Colosseum, Vatican Museums, and Trevi Fountain." }
    ],
    hotelInfo: "4-Star Novotel Paris & Astoria Hotel Lucerne (or similar)",
    transportation: "First Class Rail & AC Tourist Bus",
    category: "International",
    badge: "Bucket List",
    featured: true,
    status: "ACTIVE",
  },
  {
    id: 5,
    title: "Singapore & Malaysia Twin City Fun",
    destination: "Singapore & Kuala Lumpur",
    country: "Singapore & Malaysia",
    duration: "5 Nights / 6 Days",
    price: 62000,
    originalPrice: 74000,
    overview: "Universal Studios Singapore, Sentosa Island, Gardens by the Bay, and Petronas Twin Towers in KL.",
    coverImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80"],
    inclusions: ["Roundtrip Flights", "4-Star Hotels", "Universal Studios Ticket", "Coach Transfers", "Daily Breakfast"],
    exclusions: ["Personal Shopping & Meals"],
    itinerary: [
      { day: "Day 1-3", title: "Singapore Modern Wonder", description: "Marina Bay Sands, Gardens by the Bay, Universal Studios Sentosa." },
      { day: "Day 4-6", title: "Kuala Lumpur Highlights", description: "Petronas Twin Towers, Batu Caves, Genting Highlands cable car." }
    ],
    hotelInfo: "4-Star Hotel Boss Singapore & Furama Bukit Bintang KL",
    transportation: "Luxury Intercity Express Coach",
    category: "International",
    badge: "Family Favorite",
    featured: true,
    status: "ACTIVE",
  },
];

export default function PackageManager() {
  const [packages, setPackages] = useState<PackageRecord[]>(INITIAL_PACKAGES);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "intro" | "itinerary" | "cost" | "hotel">("general");
  const [editingPackage, setEditingPackage] = useState<Partial<PackageRecord> | null>(null);

  // Tag & file upload inputs
  const [newInclusion, setNewInclusion] = useState("");
  const [newExclusion, setNewExclusion] = useState("");
  const [newGalleryUrl, setNewGalleryUrl] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);

  // Cover image file upload handler
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingPackage) return;

    setUploadingCover(true);
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          setEditingPackage((prev) => (prev ? { ...prev, coverImage: json.url } : null));
        }
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (err) {
      alert("Error uploading image from local device.");
    } finally {
      setUploadingCover(false);
    }
  };

  // Gallery image file upload handler
  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingPackage) return;

    setUploadingGallery(true);
    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        const json = await res.json();
        if (json.url) {
          setEditingPackage((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              gallery: [...(prev.gallery || []), json.url],
            };
          });
        }
      } else {
        alert("Gallery photo upload failed.");
      }
    } catch (err) {
      alert("Error uploading photo from local device.");
    } finally {
      setUploadingGallery(false);
    }
  };

  // Itinerary day inputs
  const [newDayLabel, setNewDayLabel] = useState("");
  const [newDayTitle, setNewDayTitle] = useState("");
  const [newDayDesc, setNewDayDesc] = useState("");

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/packages");
      if (res.ok) {
        const data = await res.json();
        if (data.packages && data.packages.length > 0) {
          setPackages(data.packages);
        }
      }
    } catch (err) {
      console.warn("Using default package data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleOpenCreate = () => {
    setEditingPackage({
      title: "",
      destination: "",
      country: "",
      duration: "5 Nights / 6 Days",
      price: 65000,
      originalPrice: 78000,
      overview: "",
      coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=80",
      gallery: [],
      inclusions: ["Roundtrip Flights", "4-Star Hotel Stay", "Daily Breakfast", "Airport Transfers"],
      exclusions: ["Personal Expenses", "Tips & Gratuities"],
      itinerary: [
        { day: "Day 1", title: "Arrival & Hotel Transfer", description: "Airport pickup and hotel check-in." },
        { day: "Day 2", title: "City Tour & Sightseeing", description: "Guided full-day city tour." }
      ],
      hotelInfo: "4-Star Deluxe Hotel or similar",
      transportation: "Private AC Vehicle Transfers",
      category: "International",
      badge: "Popular",
      featured: false,
      status: "ACTIVE",
    });
    setActiveTab("general");
    setIsEditing(true);
  };

  const handleOpenEdit = (pkg: PackageRecord) => {
    setEditingPackage({
      ...pkg,
      inclusions: pkg.inclusions || [],
      exclusions: pkg.exclusions || [],
      itinerary: pkg.itinerary || [],
      gallery: pkg.gallery || [],
    });
    setActiveTab("general");
    setIsEditing(true);
  };

  const handleSavePackage = async () => {
    if (!editingPackage?.title || !editingPackage?.destination || !editingPackage?.price) return;

    if (editingPackage.id) {
      // Update
      try {
        const res = await fetch(`/api/packages/${editingPackage.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingPackage),
        });
        if (res.ok) fetchPackages();
      } catch (e) {}
    } else {
      // Create
      try {
        const res = await fetch("/api/packages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingPackage),
        });
        if (res.ok) fetchPackages();
      } catch (e) {}
    }

    setIsEditing(false);
    setEditingPackage(null);
  };

  const handleDeletePackage = async (id: number) => {
    if (!confirm("Are you sure you want to delete this package?")) return;
    setPackages((prev) => prev.filter((p) => p.id !== id));
    await fetch(`/api/packages/${id}`, { method: "DELETE" }).catch(() => null);
  };

  // Inclusion / Exclusion helpers
  const handleAddInclusion = () => {
    if (!newInclusion.trim() || !editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      inclusions: [...(editingPackage.inclusions || []), newInclusion.trim()],
    });
    setNewInclusion("");
  };

  const handleRemoveInclusion = (idx: number) => {
    if (!editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      inclusions: (editingPackage.inclusions || []).filter((_, i) => i !== idx),
    });
  };

  const handleAddExclusion = () => {
    if (!newExclusion.trim() || !editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      exclusions: [...(editingPackage.exclusions || []), newExclusion.trim()],
    });
    setNewExclusion("");
  };

  const handleRemoveExclusion = (idx: number) => {
    if (!editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      exclusions: (editingPackage.exclusions || []).filter((_, i) => i !== idx),
    });
  };

  // Itinerary helpers
  const handleAddItineraryDay = () => {
    if (!newDayTitle.trim() || !editingPackage) return;
    const dayLabel = newDayLabel.trim() || `Day ${(editingPackage.itinerary?.length || 0) + 1}`;
    setEditingPackage({
      ...editingPackage,
      itinerary: [
        ...(editingPackage.itinerary || []),
        { day: dayLabel, title: newDayTitle.trim(), description: newDayDesc.trim() },
      ],
    });
    setNewDayLabel("");
    setNewDayTitle("");
    setNewDayDesc("");
  };

  const handleRemoveItineraryDay = (idx: number) => {
    if (!editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      itinerary: (editingPackage.itinerary || []).filter((_, i) => i !== idx),
    });
  };

  // Gallery image helpers
  const handleAddGalleryImage = () => {
    if (!newGalleryUrl.trim() || !editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      gallery: [...(editingPackage.gallery || []), newGalleryUrl.trim()],
    });
    setNewGalleryUrl("");
  };

  const handleRemoveGalleryImage = (idx: number) => {
    if (!editingPackage) return;
    setEditingPackage({
      ...editingPackage,
      gallery: (editingPackage.gallery || []).filter((_, i) => i !== idx),
    });
  };

  return (
    <div className="container-custom py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0a1628]">
            Holiday Package Inventory Manager
          </h1>
          <p className="text-xs sm:text-sm text-[#64748b] mt-0.5">
            Manage introduction overview, day-by-day itineraries, inclusions, exclusions, gallery photos, and prices.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={fetchPackages} variant="outline" size="sm" className="gap-2 border-[#e2e8f0]">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Sync Packages
          </Button>
          <Button onClick={handleOpenCreate} className="bg-[#f97316] hover:bg-[#ea580c] text-white gap-2 shadow-md">
            <Plus size={16} />
            Create New Package
          </Button>
        </div>
      </div>

      {/* Comprehensive Package Details Editor Drawer / Modal */}
      {isEditing && editingPackage && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#0ea5e9]/40 shadow-2xl space-y-6 animate-fade-in text-left">
          <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">Package Details Editor</span>
              <h3 className="text-xl font-bold text-[#0a1628]">
                {editingPackage.id ? `Edit: ${editingPackage.title}` : "Create New Holiday Package"}
              </h3>
            </div>
            <button onClick={() => setIsEditing(false)} className="p-2 text-[#64748b] hover:bg-[#f1f5f9] rounded-lg">
              <X size={20} />
            </button>
          </div>

          {/* Editor Tabs Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-[#e2e8f0] pb-3">
            {[
              { id: "general", label: "1. Basic Info & Price", icon: Tag },
              { id: "intro", label: "2. Introduction & Overview", icon: FileText },
              { id: "itinerary", label: "3. Day-by-Day Itinerary", icon: Calendar },
              { id: "cost", label: "4. Included / Excluded", icon: CheckCircle2 },
              { id: "hotel", label: "5. Hotel, Transport & Gallery", icon: Hotel },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#0a1628] text-white shadow-md"
                      : "bg-[#f8fafc] text-[#64748b] border border-[#e2e8f0] hover:text-[#0a1628]"
                  }`}
                >
                  <Icon size={14} className={activeTab === tab.id ? "text-[#0ea5e9]" : ""} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Basic Info & Price */}
          {activeTab === "general" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Package Title *
                </label>
                <Input
                  placeholder="e.g. Dubai Extravaganza & Desert Safari"
                  value={editingPackage.title || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, title: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Destination Region *
                </label>
                <Input
                  placeholder="e.g. Dubai & Abu Dhabi"
                  value={editingPackage.destination || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, destination: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Country *
                </label>
                <Input
                  placeholder="e.g. United Arab Emirates"
                  value={editingPackage.country || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, country: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Duration (Nights / Days) *
                </label>
                <Input
                  placeholder="e.g. 5 Nights / 6 Days"
                  value={editingPackage.duration || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, duration: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Selling Price (NPR) *
                </label>
                <Input
                  type="number"
                  placeholder="65000"
                  value={editingPackage.price || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, price: Number(e.target.value) })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Original Price (NPR)
                </label>
                <Input
                  type="number"
                  placeholder="78000"
                  value={editingPackage.originalPrice || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, originalPrice: Number(e.target.value) })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Category
                </label>
                <select
                  className="w-full h-11 rounded-lg border border-[#e2e8f0] bg-white px-3 text-base sm:text-sm font-semibold text-[#0a1628]"
                  value={editingPackage.category || "International"}
                  onChange={(e) => setEditingPackage({ ...editingPackage, category: e.target.value })}
                >
                  <option value="International">International</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Family Tours">Family Tours</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                  Badge Tag
                </label>
                <Input
                  placeholder="e.g. Best Seller, Top Rated"
                  value={editingPackage.badge || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, badge: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Cover Image *</span>
                  <span className="text-[11px] font-medium text-[#0ea5e9]">Paste URL or Upload Local File</span>
                </label>
                <div className="flex gap-2 items-center">
                  <Input
                    placeholder="https://images.unsplash.com/... or /uploads/..."
                    value={editingPackage.coverImage || ""}
                    onChange={(e) => setEditingPackage({ ...editingPackage, coverImage: e.target.value })}
                    className="flex-1"
                  />
                  <label className="cursor-pointer inline-flex items-center gap-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 shadow-sm">
                    <Upload size={14} />
                    {uploadingCover ? "Uploading..." : "Upload from Device"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCoverUpload}
                      disabled={uploadingCover}
                    />
                  </label>
                </div>
                {/* Live Preview Thumbnail */}
                {editingPackage.coverImage && (
                  <div className="mt-2.5 flex items-center gap-3 bg-[#f8fafc] p-2 rounded-xl border border-[#e2e8f0]">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-[#e2e8f0] bg-slate-900 shrink-0">
                      <Image
                        src={editingPackage.coverImage}
                        alt="Cover Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-[11px] text-[#64748b] truncate">
                      <span className="font-semibold text-[#0a1628] block">Current Cover Image</span>
                      <span className="truncate block font-mono text-[10px]">{editingPackage.coverImage}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Introduction & Overview */}
          {activeTab === "intro" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 block">
                  Package Introduction &amp; Detailed Overview *
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-white p-4 text-sm text-[#0a1628] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9]"
                  placeholder="Describe the full tour experience, highlight attractions, shopping, cultural sights, and unique experiences..."
                  value={editingPackage.overview || ""}
                  onChange={(e) => setEditingPackage({ ...editingPackage, overview: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Tab 3: Day-by-Day Itinerary Builder */}
          {activeTab === "itinerary" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#0a1628] text-sm flex items-center gap-1.5">
                  <Calendar size={16} className="text-[#0ea5e9]" />
                  Configured Itinerary Days ({editingPackage.itinerary?.length || 0})
                </h4>
              </div>

              {/* Day List */}
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {editingPackage.itinerary?.map((item, idx) => (
                  <div key={idx} className="bg-[#f8fafc] p-4 rounded-2xl border border-[#e2e8f0] relative space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0ea5e9] bg-[#e0f2fe] px-2.5 py-0.5 rounded-full uppercase">
                        {item.day}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveItineraryDay(idx)}
                        className="text-red-500 hover:bg-red-50 p-1 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <h5 className="font-bold text-[#0a1628] text-sm">{item.title}</h5>
                    <p className="text-xs text-[#475569] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Add New Day Form */}
              <div className="bg-[#f0f9ff] p-4 rounded-2xl border border-[#0ea5e9]/30 space-y-3">
                <h5 className="font-bold text-[#0a1628] text-xs uppercase tracking-wider">
                  Add New Itinerary Day
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    placeholder="Day Label (e.g. Day 1)"
                    value={newDayLabel}
                    onChange={(e) => setNewDayLabel(e.target.value)}
                    className="text-xs bg-white"
                  />
                  <div className="sm:col-span-2">
                    <Input
                      placeholder="Day Title (e.g. Arrival & Evening Dhow Cruise)"
                      value={newDayTitle}
                      onChange={(e) => setNewDayTitle(e.target.value)}
                      className="text-xs bg-white"
                    />
                  </div>
                </div>
                <textarea
                  rows={2}
                  placeholder="Detailed description of activities, transfers, meals, and sightseeing..."
                  value={newDayDesc}
                  onChange={(e) => setNewDayDesc(e.target.value)}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-white p-3 text-xs text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
                />
                <Button type="button" size="sm" onClick={handleAddItineraryDay} className="bg-[#0a1628] text-white font-bold gap-1.5">
                  <Plus size={14} /> Add Day to Itinerary
                </Button>
              </div>
            </div>
          )}

          {/* Tab 4: Cost Included / Excluded */}
          {activeTab === "cost" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cost Included */}
              <div className="space-y-3 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200">
                <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Cost Included (Inclusions)
                </h4>
                <div className="space-y-2">
                  {editingPackage.inclusions?.map((inc, i) => (
                    <div key={i} className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-emerald-200 text-xs text-[#0a1628]">
                      <span>✓ {inc}</span>
                      <button type="button" onClick={() => handleRemoveInclusion(i)} className="text-red-500 hover:text-red-700">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Input
                    placeholder="e.g. 5-Star Hotel Stay with Breakfast"
                    value={newInclusion}
                    onChange={(e) => setNewInclusion(e.target.value)}
                    className="text-xs bg-white"
                  />
                  <Button type="button" size="sm" onClick={handleAddInclusion} className="bg-emerald-600 text-white shrink-0">
                    Add Included
                  </Button>
                </div>
              </div>

              {/* Cost Excluded */}
              <div className="space-y-3 bg-rose-50/50 p-5 rounded-2xl border border-rose-200">
                <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                  <XCircle size={16} className="text-rose-600" />
                  Cost Excluded (Exclusions)
                </h4>
                <div className="space-y-2">
                  {editingPackage.exclusions?.map((exc, i) => (
                    <div key={i} className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-rose-200 text-xs text-[#0a1628]">
                      <span>✕ {exc}</span>
                      <button type="button" onClick={() => handleRemoveExclusion(i)} className="text-red-500 hover:text-red-700">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Input
                    placeholder="e.g. Personal Expenses & Tips"
                    value={newExclusion}
                    onChange={(e) => setNewExclusion(e.target.value)}
                    className="text-xs bg-white"
                  />
                  <Button type="button" size="sm" onClick={handleAddExclusion} className="bg-rose-600 text-white shrink-0">
                    Add Excluded
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Hotel, Transport & Gallery */}
          {activeTab === "hotel" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Hotel size={14} className="text-[#0ea5e9]" />
                    Hotel Tier &amp; Accommodation Details
                  </label>
                  <Input
                    placeholder="e.g. 4-Star Al Khoory Atrium Hotel or similar"
                    value={editingPackage.hotelInfo || ""}
                    onChange={(e) => setEditingPackage({ ...editingPackage, hotelInfo: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car size={14} className="text-[#0ea5e9]" />
                    Transportation &amp; Flight Info
                  </label>
                  <Input
                    placeholder="e.g. Private AC Sedan & Speedboat Transfers"
                    value={editingPackage.transportation || ""}
                    onChange={(e) => setEditingPackage({ ...editingPackage, transportation: e.target.value })}
                  />
                </div>
              </div>

              {/* Gallery Image Manager */}
              <div className="space-y-3 pt-2 border-t border-[#e2e8f0]">
                <h4 className="font-bold text-[#0a1628] text-sm flex items-center gap-1.5">
                  <ImageIcon size={16} className="text-[#0ea5e9]" />
                  Photo Gallery URLs ({editingPackage.gallery?.length || 0})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {editingPackage.gallery?.map((imgUrl, i) => (
                    <div key={i} className="relative h-28 rounded-xl overflow-hidden border border-[#e2e8f0] group bg-[#0a1628]">
                      <Image src={imgUrl} alt={`Gallery ${i}`} fill className="object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(i)}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-90 hover:opacity-100"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 max-w-xl pt-2 items-center">
                  <Input
                    placeholder="Paste Image URL..."
                    value={newGalleryUrl}
                    onChange={(e) => setNewGalleryUrl(e.target.value)}
                    className="text-xs flex-1 min-w-[200px]"
                  />
                  <Button type="button" size="sm" onClick={handleAddGalleryImage} className="bg-[#0a1628] text-white shrink-0">
                    Add URL
                  </Button>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 shadow-sm">
                    <Upload size={14} />
                    {uploadingGallery ? "Uploading..." : "Upload Local Photo"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleGalleryUpload}
                      disabled={uploadingGallery}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex justify-end gap-3 pt-6 border-t border-[#e2e8f0]">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePackage} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold gap-2">
              <Save size={16} />
              Save Complete Package
            </Button>
          </div>
        </div>
      )}

      {/* Package Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-3xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-[#0a1628]">
                <Image
                  src={pkg.coverImage}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0a1628]/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.category}
                </div>
                {pkg.featured && (
                  <div className="absolute top-3 right-3 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ★ Featured
                  </div>
                )}
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <MapPin size={14} className="text-[#0ea5e9]" />
                  {pkg.destination}
                </div>
                <h3 className="font-bold text-[#0a1628] text-lg leading-snug">
                  {pkg.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-[#475569] border-t border-b border-[#f1f5f9] py-2">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#0ea5e9]" /> {pkg.duration}
                  </span>
                  <span className="font-extrabold text-[#0a1628] text-sm">
                    NPR {pkg.price.toLocaleString()}
                  </span>
                </div>

                {/* Quick Details Badges */}
                <div className="text-[11px] text-[#64748b] space-y-1">
                  <div>🗓️ {pkg.itinerary?.length || 0} Days Itinerary Configured</div>
                  <div>✓ {pkg.inclusions?.length || 0} Inclusions Tagged</div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex gap-2">
              <Button onClick={() => handleOpenEdit(pkg)} variant="outline" size="sm" className="flex-1 gap-1 border-[#e2e8f0]">
                <Edit size={14} /> Edit Full Details
              </Button>
              <Button onClick={() => handleDeletePackage(pkg.id)} variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                <Trash2 size={14} /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
