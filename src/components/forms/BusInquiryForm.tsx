"use client";

import React, { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Bus, MapPin, Calendar, Users, User, Phone, Search, CheckCircle2, MessageSquare, RefreshCw, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BusInquiryForm() {
  const [formData, setFormData] = useState({
    departureCity: "Kathmandu",
    destinationCity: "Pokhara",
    travelDate: "",
    passengers: "1 Passenger",
    fullName: "",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.departureCity || !formData.destinationCity || !formData.travelDate || !formData.fullName || !formData.phoneNumber) {
      setErrorMsg("Please fill in all required fields (Departure, Destination, Travel Date, Name, Phone Number).");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiries/bus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          departureCity: formData.departureCity,
          destinationCity: formData.destinationCity,
          travelDate: formData.travelDate,
          passengers: formData.passengers,
          customerName: formData.fullName,
          phone: formData.phoneNumber,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to save bus inquiry.");
      }

      const waLink = buildWhatsAppLink({
        service: "Bus Ticket Booking",
        name: formData.fullName,
        from: formData.departureCity,
        to: formData.destinationCity,
        travelDate: formData.travelDate,
        passengers: formData.passengers,
        whatsappNumber: formData.phoneNumber,
      });
      setWhatsappUrl(waLink);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred while saving bus ticket inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      departureCity: "Kathmandu",
      destinationCity: "Pokhara",
      travelDate: "",
      passengers: "1 Passenger",
      fullName: "",
      phoneNumber: "",
    });
    setErrorMsg("");
  };

  if (submitted) {
    return (
      <div id="bus-form" className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-100 text-center max-w-2xl mx-auto animate-fade-in text-left">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mb-3 text-center">
          Bus Ticket Request Saved!
        </h3>
        <p className="text-[#64748b] text-base mb-6 leading-relaxed text-center">
          Thank you, <span className="font-bold text-[#0a1628]">{formData.fullName}</span>! Our bus ticketing desk has logged your request for <span className="font-semibold text-[#0ea5e9]">{formData.departureCity} ➔ {formData.destinationCity}</span> on {formData.travelDate}.
        </p>

        {/* Summary Card */}
        <div className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e2e8f0] text-left text-xs md:text-sm text-[#475569] space-y-2 mb-8">
          <div className="flex justify-between border-b border-[#e2e8f0] pb-2">
            <span className="font-semibold text-[#0a1628]">Bus Route:</span>
            <span>{formData.departureCity} ➔ {formData.destinationCity}</span>
          </div>
          <div className="flex justify-between border-b border-[#e2e8f0] pb-2">
            <span className="font-semibold text-[#0a1628]">Travel Date:</span>
            <span>{formData.travelDate}</span>
          </div>
          <div className="flex justify-between border-b border-[#e2e8f0] pb-2">
            <span className="font-semibold text-[#0a1628]">Passengers:</span>
            <span>{formData.passengers}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-[#0a1628]">Contact Phone:</span>
            <span>{formData.phoneNumber}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm min-h-[44px]"
          >
            <MessageSquare size={18} />
            Send Ticket Request via WhatsApp
          </a>
          <Button variant="outline" onClick={handleReset} className="gap-2 border-[#e2e8f0] min-h-[44px]">
            <RefreshCw size={16} />
            Search New Route
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div id="bus-form" className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-[#e2e8f0] max-w-4xl mx-auto text-left">
      <div className="mb-6 pb-6 border-b border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#0a1628]">Search &amp; Book Bus Tickets</h2>
          <p className="text-xs text-[#64748b] mt-0.5">
            Select your route across Nepal. Our ticketing desk reserves top Tourist VIP Sofa seats &amp; Deluxe AC Buses instantly.
          </p>
        </div>
        <span className="text-[11px] font-semibold text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1 rounded-full uppercase tracking-wider shrink-0 w-max">
          Instant WhatsApp Tickets
        </span>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-sm flex items-center gap-2.5">
          <AlertCircle size={18} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Departure City, Destination City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin size={14} className="text-[#0ea5e9]" />
              Departure City *
            </label>
            <select
              className="w-full h-11 rounded-lg border border-[#e2e8f0] bg-white px-3 text-base sm:text-sm font-semibold text-[#0a1628]"
              value={formData.departureCity}
              onChange={(e) => handleChange("departureCity", e.target.value)}
            >
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Chitwan (Sauraha)">Chitwan (Sauraha)</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Dharan">Dharan</option>
              <option value="Butwal">Butwal</option>
              <option value="Janakpur">Janakpur</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin size={14} className="text-[#f97316]" />
              Destination City *
            </label>
            <select
              className="w-full h-11 rounded-lg border border-[#e2e8f0] bg-white px-3 text-base sm:text-sm font-semibold text-[#0a1628]"
              value={formData.destinationCity}
              onChange={(e) => handleChange("destinationCity", e.target.value)}
            >
              <option value="Pokhara">Pokhara</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Chitwan">Chitwan</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Dharan">Dharan</option>
              <option value="Butwal">Butwal</option>
              <option value="Janakpur">Janakpur</option>
              <option value="Lumbini">Lumbini</option>
            </select>
          </div>
        </div>

        {/* Row 2: Travel Date, Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f8fafc] p-4 rounded-2xl border border-[#e2e8f0]">
          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar size={14} className="text-[#0ea5e9]" />
              Travel Date *
            </label>
            <Input
              type="date"
              value={formData.travelDate}
              onChange={(e) => handleChange("travelDate", e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users size={14} className="text-[#0ea5e9]" />
              Number of Passengers *
            </label>
            <select
              className="w-full h-11 rounded-lg border border-[#e2e8f0] bg-white px-3 text-base sm:text-sm font-semibold text-[#0a1628]"
              value={formData.passengers}
              onChange={(e) => handleChange("passengers", e.target.value)}
            >
              <option value="1 Passenger">1 Passenger</option>
              <option value="2 Passengers">2 Passengers</option>
              <option value="3 Passengers">3 Passengers</option>
              <option value="4 Passengers">4 Passengers</option>
              <option value="5+ Passengers (Group)">5+ Passengers (Group)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Name, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User size={14} className="text-[#0ea5e9]" />
              Full Name *
            </label>
            <Input
              placeholder="e.g. Anish Karki"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Phone size={14} className="text-emerald-600" />
              WhatsApp / Contact Phone *
            </label>
            <Input
              placeholder="+977-98XXXXXXXX"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit CTA */}
        <div>
          <Button
            type="submit"
            size="xl"
            disabled={isSubmitting}
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold shadow-xl shadow-orange-500/25 text-base md:text-lg min-h-[48px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Checking Seat Availability...
              </>
            ) : (
              <>
                <Search size={20} />
                Search Bus Tickets
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
