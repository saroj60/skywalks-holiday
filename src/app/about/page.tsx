import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Plane,
  Hotel,
  Globe,
  MapPin,
  FileCheck,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Skywalks Holidays — Nepal's Premier Travel Agency",
  description: "Discover Skywalks Holidays. 15+ years of experience delivering flight booking, hotel stays, international holidays & visa assistance from Kathmandu.",
};

const STATS_CARDS = [
  { value: "15+", label: "Years of Experience", desc: "Serving travelers since 2010" },
  { value: "50K+", label: "Happy Travelers", desc: "Trusted by thousands annually" },
  { value: "80+", label: "Destinations Covered", desc: "Across Asia, Europe & Americas" },
  { value: "8", label: "Travel Services", desc: "Complete end-to-end solutions" },
];

const SERVICES_GRID = [
  { icon: Plane, name: "Flight Ticket Booking", href: "/services/flights" },
  { icon: Hotel, name: "Hotel Booking", href: "/services/hotels" },
  { icon: Globe, name: "International Packages", href: "/services/packages/international" },
  { icon: MapPin, name: "Domestic Holiday Packages", href: "/services/packages/domestic" },
  { icon: FileCheck, name: "Visa Assistance", href: "/services/visa" },
  { icon: Shield, name: "Travel Insurance", href: "/services/insurance" },
  { icon: Sparkles, name: "Customized Tour Packages", href: "/services/custom" },
];

const WHY_CHOOSE_US_PILLARS = [
  {
    icon: Award,
    title: "15+ Years Industry Experience",
    description: "Deep-rooted local knowledge in Nepal combined with international airline and hotel contracts.",
    color: "bg-[#e0f2fe] text-[#0ea5e9]",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent & Price Matched",
    description: "Zero hidden charges. Complete price breakdown with guaranteed competitive pricing.",
    color: "bg-[#fff7ed] text-[#f97316]",
  },
  {
    icon: Compass,
    title: "End-to-End Travel Logistics",
    description: "From flights, hotels, and visas to tour guides and transport — we manage every detail.",
    color: "bg-[#f0fdf4] text-emerald-600",
  },
  {
    icon: CheckCircle2,
    title: "24/7 Dedicated Support Desk",
    description: "Our travel specialists provide round-the-clock emergency support wherever you are.",
    color: "bg-[#faf5ff] text-purple-600",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="bg-[#0a1628] py-3 sm:py-5 overflow-hidden">
        <div className="container-custom">
          <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/about-hero-banner.png"
              alt="About Skywalks Holidays — Your Trusted Travel Partner"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Statistics Cards Strip */}
      <section className="relative z-20 -mt-6 sm:-mt-8 pb-12 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS_CARDS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-xl text-center group hover:border-[#0ea5e9] transition-all"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#0a1628] group-hover:text-[#0ea5e9] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-[#334155] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#94a3b8]">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Company Introduction */}
      <section id="introduction" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-80 sm:h-96 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#e2e8f0]">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85"
                alt="Skywalks Holidays Travel Agency — Kathmandu Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  Headquartered in Thamel, Kathmandu
                </span>
                <p className="text-sm font-medium text-white/90 mt-2">
                  Serving over 50,000 travelers across 80+ global destinations.
                </p>
              </div>
            </div>

            {/* Copy */}
            <div className="text-left space-y-5">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1.5 rounded-full">
                Company Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] leading-tight">
                Nepal&apos;s Trusted Gateway to World Travel
              </h2>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                Founded in {COMPANY.founded} in the vibrant tourism hub of Thamel, Kathmandu, <strong>Skywalks Holidays</strong> has grown into Nepal&apos;s most comprehensive travel service agency.
              </p>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                What began as a dedicated mountain trekking outfit has expanded into a full-scale travel company handling international flight ticketing, luxury hotel reservations, visa documentation assistance, domestic and international holiday packages worldwide.
              </p>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                Our approach is rooted in personal service, absolute transparency, and uncompromised quality. We treat every trip as if it were our own.
              </p>

              <div className="pt-2">
                <Button size="lg" asChild className="bg-[#0a1628] hover:bg-[#163058]">
                  <Link href="/services/custom">
                    Plan Your Journey With Us
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section id="mission-vision" className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Core Purpose"
            title="Our Mission &amp; Vision"
            subtitle="The principles that guide our team in serving every traveler with excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#e0f2fe] text-[#0ea5e9] flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Our Mission</h3>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-6">
                  To deliver seamless, accessible, and transparent travel experiences for Nepali and international travelers. We strive to combine competitive pricing with personalized customer care, making every journey memorable and worry-free.
                </p>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-[#334155] border-t border-[#f1f5f9] pt-4">
                <li className="flex items-center gap-2">✓ 100% Transparent, No Hidden Fees</li>
                <li className="flex items-center gap-2">✓ Personalized Itinerary Design</li>
                <li className="flex items-center gap-2">✓ 24/7 Traveller Safety Support</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] text-[#f97316] flex items-center justify-center mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Our Vision</h3>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-6">
                  To become Nepal&apos;s most trusted and recognized global travel brand — connecting the breathtaking beauty of the Himalayas to international destinations worldwide while maintaining the highest standard of service integrity.
                </p>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-[#334155] border-t border-[#f1f5f9] pt-4">
                <li className="flex items-center gap-2">✓ Connecting Nepal to 100+ World Destinations</li>
                <li className="flex items-center gap-2">✓ Digital-first Travel Booking Assistance</li>
                <li className="flex items-center gap-2">✓ Sustainable Tourism Advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us? */}
      <section id="why-choose-us" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Travelers Choose Skywalks Holidays"
            subtitle="Four core pillars that set us apart as Nepal's leading travel agency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#f8fafc] rounded-3xl p-7 border border-[#e2e8f0] hover:bg-white hover:shadow-xl hover:border-[#0ea5e9]/40 transition-all duration-300 text-left group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Services Grid */}
      <section id="our-services" className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Full Range of Services"
            title="Comprehensive Travel Solutions"
            subtitle="Explore our 8 specialized services designed for seamless individual, family, and group travel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_GRID.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-sm hover:shadow-lg hover:border-[#0ea5e9] transition-all flex items-center gap-4 group text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0ea5e9] flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-sm group-hover:text-[#0ea5e9] transition-colors">
                      {s.name}
                    </h3>
                    <span className="text-xs text-[#94a3b8] flex items-center gap-1 mt-0.5 group-hover:text-[#0ea5e9]">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Customer Trust & Accreditations */}
      <section id="trust" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Customer Trust &amp; Credentials"
            title="Certified, Accredited &amp; Rated 4.9/5"
            subtitle="Recognized by tourism authorities and trusted by over 50,000 satisfied travelers."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { title: "IATA Certified", detail: "Authorized ticketing agent" },
              { title: "NTB Licensed", detail: "Nepal Tourism Board registered" },
              { title: "TAAN Member", detail: "Trekking Agencies Association" },
              { title: "4.9 ★ Customer Rating", detail: "Verified reviews across platforms" },
            ].map((badge) => (
              <div key={badge.title} className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] text-center">
                <div className="text-lg font-bold text-[#0a1628] mb-1">{badge.title}</div>
                <div className="text-xs text-[#64748b]">{badge.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact CTA Banner */}
      <CTABanner
        title="Ready for Your Next Great Adventure?"
        subtitle="Let our experienced travel team design your perfect itinerary. Contact us today."
        primaryLabel="Plan Your Journey With Us"
        primaryHref="/services/custom"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
