"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Edit,
  Trash2,
  X,
  Save,
  Tag,
  Users,
  RefreshCw,
  Sparkles,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface DepartureRecord {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  seasonTag: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
  originalPrice: number;
  image: string;
  status: "UPCOMING" | "FILLING_FAST" | "SOLD_OUT";
}

const INITIAL_DEPARTURES: DepartureRecord[] = [
  {
    id: "dep-001",
    title: "Dubai & Desert Safari — Dashain Special",
    destination: "Dubai & Abu Dhabi",
    startDate: "2026-10-12",
    endDate: "2026-10-18",
    seasonTag: "🪔 Dashain Special",
    totalSeats: 20,
    availableSeats: 3,
    price: 62000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    status: "FILLING_FAST",
  },
  {
    id: "dep-002",
    title: "Tropical Bali & Ubud Villa Escape",
    destination: "Bali, Indonesia",
    startDate: "2026-10-25",
    endDate: "2026-11-01",
    seasonTag: "🌺 Autumn Romance",
    totalSeats: 16,
    availableSeats: 5,
    price: 52000,
    originalPrice: 64000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    status: "UPCOMING",
  },
  {
    id: "dep-003",
    title: "Thailand Phuket & Bangkok Beach Tour",
    destination: "Thailand",
    startDate: "2026-11-04",
    endDate: "2026-11-09",
    seasonTag: "🪔 Tihar Holiday",
    totalSeats: 24,
    availableSeats: 8,
    price: 38000,
    originalPrice: 46000,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    status: "UPCOMING",
  },
  {
    id: "dep-004",
    title: "Grand Europe 4-Country Gala Departure",
    destination: "Paris, Swiss Alps, Venice & Rome",
    startDate: "2026-12-24",
    endDate: "2027-01-04",
    seasonTag: "🎆 New Year 2027",
    totalSeats: 15,
    availableSeats: 2,
    price: 195000,
    originalPrice: 230000,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    status: "FILLING_FAST",
  },
];

export default function DepartureManager() {
  const [departures, setDepartures] = useState<DepartureRecord[]>(INITIAL_DEPARTURES);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingDeparture, setEditingDeparture] = useState<Partial<DepartureRecord> | null>(null);

  const fetchDepartures = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/departures");
      if (res.ok) {
        const data = await res.json();
        if (data.departures && data.departures.length > 0) {
          setDepartures(data.departures);
        }
      }
    } catch (err) {
      console.warn("Using default departures data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartures();
  }, []);

  const handleOpenCreate = () => {
    setEditingDeparture({
      title: "",
      destination: "",
      startDate: "2026-10-15",
      endDate: "2026-10-21",
      seasonTag: "🪔 Festive Departure",
      totalSeats: 20,
      availableSeats: 8,
      price: 65000,
      originalPrice: 78000,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      status: "UPCOMING",
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (dep: DepartureRecord) => {
    setEditingDeparture({ ...dep });
    setIsEditing(true);
  };

  const handleSaveDeparture = async () => {
    if (!editingDeparture?.title || !editingDeparture?.destination || !editingDeparture?.price) return;

    if (editingDeparture.id) {
      // Update
      try {
        const res = await fetch(`/api/departures/${editingDeparture.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingDeparture),
        });
        if (res.ok) fetchDepartures();
      } catch (e) {}
    } else {
      // Create
      try {
        const res = await fetch("/api/departures", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingDeparture),
        });
        if (res.ok) fetchDepartures();
      } catch (e) {}
    }

    setIsEditing(false);
    setEditingDeparture(null);
  };

  const handleDeleteDeparture = async (id: string) => {
    if (!confirm("Are you sure you want to delete this upcoming departure?")) return;
    setDepartures((prev) => prev.filter((d) => d.id !== id));
    await fetch(`/api/departures/${id}`, { method: "DELETE" }).catch(() => null);
  };

  return (
    <div className="container-custom py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2 border border-amber-200">
            <Flame size={14} className="text-[#f97316]" /> Fixed Date Tour Departures
          </div>
          <h1 className="text-2xl font-extrabold text-[#0a1628]">
            Upcoming Holiday Departures Manager
          </h1>
          <p className="text-xs sm:text-sm text-[#64748b] mt-0.5">
            Control festival tour dates (Dashain, Tihar, New Year), manage seat availability, prices, and status badges.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={fetchDepartures} variant="outline" size="sm" className="gap-2 border-[#e2e8f0]">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Sync Departures
          </Button>
          <Button onClick={handleOpenCreate} className="bg-[#f97316] hover:bg-[#ea580c] text-white gap-2 shadow-md">
            <Plus size={16} />
            Schedule New Departure
          </Button>
        </div>
      </div>

      {/* Departure Details Editor Drawer / Form */}
      {isEditing && editingDeparture && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#0ea5e9]/40 shadow-2xl space-y-6 animate-fade-in text-left">
          <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">Departure Date Schedule Editor</span>
              <h3 className="text-xl font-bold text-[#0a1628]">
                {editingDeparture.id ? `Edit Departure: ${editingDeparture.title}` : "Schedule New Fixed Departure"}
              </h3>
            </div>
            <button onClick={() => setIsEditing(false)} className="p-2 text-[#64748b] hover:bg-[#f1f5f9] rounded-lg">
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Departure Title *
              </label>
              <Input
                placeholder="e.g. Dubai & Desert Safari — Dashain Special"
                value={editingDeparture.title || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, title: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Destination Region *
              </label>
              <Input
                placeholder="e.g. Dubai & Abu Dhabi"
                value={editingDeparture.destination || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, destination: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Start Date *
              </label>
              <Input
                type="date"
                value={editingDeparture.startDate || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, startDate: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                End Date *
              </label>
              <Input
                type="date"
                value={editingDeparture.endDate || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, endDate: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Season / Festival Tag Tag *
              </label>
              <Input
                placeholder="e.g. 🪔 Dashain Special, 🌺 Autumn Romance"
                value={editingDeparture.seasonTag || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, seasonTag: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Total Seats Allocated *
              </label>
              <Input
                type="number"
                placeholder="20"
                value={editingDeparture.totalSeats || 20}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, totalSeats: Number(e.target.value) })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Available Seats Remaining *
              </label>
              <Input
                type="number"
                placeholder="3"
                value={editingDeparture.availableSeats || 3}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, availableSeats: Number(e.target.value) })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Special Price (NPR) *
              </label>
              <Input
                type="number"
                placeholder="62000"
                value={editingDeparture.price || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, price: Number(e.target.value) })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Original Price (NPR)
              </label>
              <Input
                type="number"
                placeholder="75000"
                value={editingDeparture.originalPrice || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, originalPrice: Number(e.target.value) })}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Cover Photo Image URL *
              </label>
              <Input
                placeholder="https://images.unsplash.com/photo-..."
                value={editingDeparture.image || ""}
                onChange={(e) => setEditingDeparture({ ...editingDeparture, image: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e8f0]">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveDeparture} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold gap-2">
              <Save size={16} />
              Save Departure Schedule
            </Button>
          </div>
        </div>
      )}

      {/* Departures Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departures.map((dep) => (
          <div key={dep.id} className="bg-white rounded-3xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-[#0a1628]">
                <Image
                  src={dep.image}
                  alt={dep.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0a1628]/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                  {dep.seasonTag}
                </div>
                <div className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                  dep.availableSeats <= 3 ? "bg-red-600 animate-pulse" : "bg-emerald-600"
                }`}>
                  {dep.availableSeats <= 3 ? `🔥 Only ${dep.availableSeats} Seats Left` : `✓ ${dep.availableSeats} Seats Open`}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <MapPin size={14} className="text-[#0ea5e9]" />
                  {dep.destination}
                </div>
                <h3 className="font-bold text-[#0a1628] text-lg leading-snug">
                  {dep.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-[#475569] border-t border-b border-[#f1f5f9] py-2">
                  <span className="flex items-center gap-1 font-semibold text-[#0ea5e9]">
                    <Calendar size={13} /> {dep.startDate} → {dep.endDate}
                  </span>
                  <span className="font-extrabold text-[#0a1628] text-sm">
                    NPR {dep.price.toLocaleString()}
                  </span>
                </div>

                <div className="text-[11px] text-[#64748b] flex justify-between items-center">
                  <span>Seats Capacity: {dep.totalSeats} Pax</span>
                  <span className="font-mono text-emerald-700 font-bold">Available: {dep.availableSeats}</span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex gap-2">
              <Button onClick={() => handleOpenEdit(dep)} variant="outline" size="sm" className="flex-1 gap-1 border-[#e2e8f0]">
                <Edit size={14} /> Edit Dates &amp; Seats
              </Button>
              <Button onClick={() => handleDeleteDeparture(dep.id)} variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                <Trash2 size={14} /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
