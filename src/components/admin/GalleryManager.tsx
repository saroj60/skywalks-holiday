"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Plus,
  Edit,
  Trash2,
  Camera,
  MapPin,
  Calendar,
  Tag,
  Upload,
  X,
  Save,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface GalleryRecord {
  id: number;
  title: string;
  location: string;
  category: "destinations" | "travelers" | "resorts" | "flights";
  categoryLabel: string;
  image: string;
  description: string;
  date: string;
}

export const DEFAULT_GALLERY_PHOTOS: GalleryRecord[] = [
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
];

export default function GalleryManager() {
  const [photos, setPhotos] = useState<GalleryRecord[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<Partial<GalleryRecord> | null>(null);
  const [uploading, setUploading] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load photos from localStorage or defaults
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("skywalk_gallery_photos");
      if (stored) {
        try {
          setPhotos(JSON.parse(stored));
          return;
        } catch (e) {}
      }
    }
    setPhotos(DEFAULT_GALLERY_PHOTOS);
  }, []);

  // Sync to localStorage
  const savePhotosState = (updatedPhotos: GalleryRecord[]) => {
    setPhotos(updatedPhotos);
    if (typeof window !== "undefined") {
      localStorage.setItem("skywalk_gallery_photos", JSON.stringify(updatedPhotos));
    }
  };

  const handleOpenCreate = () => {
    setEditingPhoto({
      title: "",
      location: "",
      category: "destinations",
      categoryLabel: "Destinations",
      image: "",
      description: "",
      date: "October 2026",
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (photo: GalleryRecord) => {
    setEditingPhoto({ ...photo });
    setIsEditing(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingPhoto) return;

    setUploading(true);
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
          setEditingPhoto((prev) => (prev ? { ...prev, image: json.url } : null));
        }
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (err) {
      alert("Error uploading file from local device.");
    } finally {
      setUploading(false);
    }
  };

  const handleSavePhoto = () => {
    if (!editingPhoto || !editingPhoto.title || !editingPhoto.image) {
      alert("Please fill in at least Title and Photo Image.");
      return;
    }

    const categoryMap: Record<string, string> = {
      destinations: "Destinations",
      travelers: "Happy Travelers",
      resorts: "Luxury Resorts",
      flights: "Flight Experiences",
    };

    const categoryLabel = categoryMap[editingPhoto.category || "destinations"] || "Destinations";

    if (editingPhoto.id) {
      // Edit existing
      const updated = photos.map((p) =>
        p.id === editingPhoto.id ? ({ ...editingPhoto, categoryLabel } as GalleryRecord) : p
      );
      savePhotosState(updated);
    } else {
      // Create new
      const newPhoto: GalleryRecord = {
        id: Date.now(),
        title: editingPhoto.title || "Untitled Photo",
        location: editingPhoto.location || "Nepal / Global",
        category: (editingPhoto.category as any) || "destinations",
        categoryLabel,
        image: editingPhoto.image || "",
        description: editingPhoto.description || "",
        date: editingPhoto.date || "October 2026",
      };
      savePhotosState([newPhoto, ...photos]);
    }

    setIsEditing(false);
    setEditingPhoto(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDeletePhoto = (id: number) => {
    if (confirm("Are you sure you want to delete this gallery photo?")) {
      const updated = photos.filter((p) => p.id !== id);
      savePhotosState(updated);
    }
  };

  const handleResetDefaults = () => {
    if (confirm("Reset photo gallery to default showcase photos?")) {
      savePhotosState(DEFAULT_GALLERY_PHOTOS);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm">
        <div>
          <h2 className="text-xl font-extrabold text-[#0a1628] flex items-center gap-2">
            <Camera className="text-[#0ea5e9]" size={22} />
            Photo Gallery Inventory Manager
          </h2>
          <p className="text-xs text-[#64748b] mt-1">
            Manage photos displayed on the main Photo Gallery page (/gallery). Upload local photos or paste image URLs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleResetDefaults} className="gap-1.5 text-xs text-[#64748b]">
            <RefreshCw size={14} /> Reset Defaults
          </Button>
          <Button onClick={handleOpenCreate} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs gap-1.5 rounded-xl">
            <Plus size={16} /> Add New Gallery Photo
          </Button>
        </div>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Photo Gallery updated successfully! Changes are live on /gallery.
        </div>
      )}

      {/* Add / Edit Form Modal Box */}
      {isEditing && editingPhoto && (
        <div className="bg-white p-6 rounded-3xl border-2 border-[#0ea5e9] shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
            <h3 className="text-base font-bold text-[#0a1628]">
              {editingPhoto.id ? "Edit Gallery Photo" : "Add New Photo to Gallery"}
            </h3>
            <button onClick={() => setIsEditing(false)} className="text-[#94a3b8] hover:text-[#0a1628]">
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Photo Title *
              </label>
              <Input
                placeholder="e.g. Evening Dhow Cruise in Dubai Marina"
                value={editingPhoto.title || ""}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, title: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Location / Destination *
              </label>
              <Input
                placeholder="e.g. Dubai, UAE or Seminyak, Bali"
                value={editingPhoto.location || ""}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, location: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Category *
              </label>
              <select
                className="w-full h-10 rounded-xl border border-[#e2e8f0] bg-white px-3 text-xs text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
                value={editingPhoto.category || "destinations"}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, category: e.target.value as any })}
              >
                <option value="destinations">Destinations</option>
                <option value="travelers">Happy Travelers</option>
                <option value="resorts">Luxury Resorts</option>
                <option value="flights">Flight Experiences</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Travel Date / Tag
              </label>
              <Input
                placeholder="e.g. October 2026"
                value={editingPhoto.date || ""}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, date: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Photo Image *</span>
                <span className="text-[11px] font-medium text-[#0ea5e9]">Paste URL or Upload Local File</span>
              </label>
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="https://images.unsplash.com/... or /uploads/..."
                  value={editingPhoto.image || ""}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, image: e.target.value })}
                  className="flex-1"
                />
                <label className="cursor-pointer inline-flex items-center gap-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 shadow-sm">
                  <Upload size={14} />
                  {uploading ? "Uploading..." : "Upload from Device"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                </label>
              </div>

              {/* Thumbnail Preview */}
              {editingPhoto.image && (
                <div className="mt-3 flex items-center gap-3 bg-[#f8fafc] p-2 rounded-xl border border-[#e2e8f0]">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-[#e2e8f0] bg-slate-900 shrink-0">
                    <Image src={editingPhoto.image} alt="Preview" fill className="object-cover" />
                  </div>
                  <div className="text-[11px] text-[#64748b] truncate">
                    <span className="font-semibold text-[#0a1628] block">Photo Image Preview</span>
                    <span className="truncate block font-mono text-[10px]">{editingPhoto.image}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1 block">
                Caption / Description
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-[#e2e8f0] bg-white p-3 text-xs text-[#0a1628] focus:outline-none focus:border-[#0ea5e9]"
                placeholder="Short description or travel story for this photo..."
                value={editingPhoto.description || ""}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, description: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-[#e2e8f0]">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePhoto} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold gap-2">
              <Save size={16} />
              Save Photo to Gallery
            </Button>
          </div>
        </div>
      )}

      {/* Gallery Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-3xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Photo Image Box */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <span className="absolute top-3 left-3 bg-[#0a1628]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {photo.categoryLabel}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 text-[#0a1628] text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow">
                  {photo.date}
                </span>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0ea5e9] mb-1">
                  <MapPin size={12} />
                  {photo.location}
                </div>
                <h4 className="font-bold text-[#0a1628] text-sm leading-snug mb-2 line-clamp-2">
                  {photo.title}
                </h4>
                <p className="text-[#64748b] text-xs line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#94a3b8]">ID: #{photo.id}</span>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => handleOpenEdit(photo)} className="gap-1 text-xs">
                  <Edit size={12} /> Edit
                </Button>
                <Button size="sm" onClick={() => handleDeletePhoto(photo.id)} className="gap-1 text-xs bg-red-600 hover:bg-red-700 text-white font-bold">
                  <Trash2 size={12} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
