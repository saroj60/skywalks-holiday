import React from "react";
import { Metadata } from "next";
import { Shield, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";

export const metadata: Metadata = {
  title: "Travel Insurance",
  description: "Comprehensive travel insurance for medical emergencies, trip cancellation, and baggage loss.",
};

const PLANS = [
  {
    name: "Basic",
    price: 1500,
    per: "per trip",
    color: "border-[#e2e8f0]",
    badge: "",
    features: [
      "Medical cover up to NPR 5,00,000",
      "Trip cancellation cover",
      "Baggage loss (up to NPR 50,000)",
      "24/7 emergency helpline",
    ],
  },
  {
    name: "Standard",
    price: 3500,
    per: "per trip",
    color: "border-[#0ea5e9] ring-2 ring-[#0ea5e9]",
    badge: "Most Popular",
    features: [
      "Medical cover up to NPR 20,00,000",
      "Trip cancellation & interruption",
      "Baggage loss (up to NPR 1,50,000)",
      "Adventure sports cover",
      "Flight delay compensation",
      "24/7 emergency helpline",
    ],
  },
  {
    name: "Premium",
    price: 6500,
    per: "per trip",
    color: "border-[#0a1628]",
    badge: "",
    features: [
      "Medical cover up to NPR 50,00,000",
      "Full trip cancellation cover",
      "Baggage loss (up to NPR 3,00,000)",
      "High-altitude trekking cover",
      "Emergency evacuation & repatriation",
      "Flight delay & missed connection",
      "Personal liability cover",
    ],
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#163058] py-20 text-white">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-6">
            <Shield size={28} className="text-[#0ea5e9]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Insurance</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Travel worry-free with comprehensive insurance plans. Medical cover, trip cancellation, and more.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Insurance Plans"
            title="Choose the Right Cover for Your Trip"
            subtitle="All plans include 24/7 emergency support. Covers domestic Nepal and international travel."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl border-2 p-7 flex flex-col ${plan.color} relative hover:shadow-xl transition-all`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0ea5e9] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-bold text-[#0a1628] text-xl mb-1">{plan.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-[#0a1628]">NPR {plan.price.toLocaleString()}</span>
                  <span className="text-sm text-[#94a3b8] ml-1">{plan.per}</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.badge ? "default" : "outline"} className="w-full">
                  Get {plan.name} Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Insurance */}
      <section className="py-14">
        <div className="container-custom">
          <SectionHeader eyebrow="Why It Matters" title="Travel Safe, Travel Smart" subtitle="One unexpected event can ruin your entire trip. Insurance ensures you're always protected." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🏥", title: "Medical Emergencies", desc: "Covers hospitalization, surgery & evacuation abroad" },
              { emoji: "✈️", title: "Flight Cancellation", desc: "Refund for cancelled or delayed flights" },
              { emoji: "🧳", title: "Lost Baggage", desc: "Compensation for lost or delayed luggage" },
              { emoji: "🏔️", title: "Adventure Cover", desc: "Trekking, rafting & altitude evacuation" },
            ].map((i) => (
              <div key={i.title} className="text-center p-6 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                <div className="text-4xl mb-3">{i.emoji}</div>
                <h3 className="font-bold text-[#0a1628] mb-2">{i.title}</h3>
                <p className="text-sm text-[#64748b]">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="py-14 bg-[#f8fafc]">
        <div className="container-custom max-w-2xl">
          <SectionHeader eyebrow="Get a Quote" title="Get Your Insurance Quote" />
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">Full Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">Phone</label>
                <Input placeholder="+977-98XXXXXXXX" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">Destination</label>
                <Input placeholder="Travel destination" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">Travel Date</label>
                <Input type="date" />
              </div>
            </div>
            <Button size="lg" className="w-full">Request Insurance Quote</Button>
            <p className="text-xs text-center text-[#94a3b8] mt-3 flex items-center justify-center gap-1">
              <Phone size={11} /> We&apos;ll call you within 1 hour with the best plan.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't Travel Unprotected"
        subtitle="A small investment in travel insurance can save you from massive unexpected costs. Get covered today."
        primaryLabel="Buy Insurance Now"
        primaryHref="/contact"
        secondaryLabel="Compare Plans"
        secondaryHref="#"
      />
    </>
  );
}
