import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Headset, ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import CTABanner from "@/components/common/CTABanner";
import ContactInquiryForm from "@/components/forms/ContactInquiryForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Skywalks Holidays — Nepal's Premium Travel Agency",
  description: "Get in touch with Skywalks Holidays in Thamel, Kathmandu. Call +977-98XXXXXXXX, WhatsApp, or send an inquiry for flights, hotels, tours & visas.",
};

/* Social Media SVGs */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: "https://www.facebook.com/p/SkyWalk-Holidays-61569789310239/", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#163058] to-[#0ea5e9] py-20 md:py-28 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare size={16} className="text-[#0ea5e9]" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              24/7 Travel Assistance &amp; Booking Support
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Get In Touch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-white">
              With Us.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Have a question or ready to plan your next dream vacation? Our travel specialists in Kathmandu are here to assist you.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contact &amp; Inquiry"
            title="We Are Here To Help You Travel"
            subtitle="Reach out via phone, email, WhatsApp, or send an inquiry through our form."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT SIDE: Company & Business Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Office Address Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base">Office Address</h3>
                    <p className="text-xs text-[#64748b]">Headquarters in Kathmandu</p>
                  </div>
                </div>
                <div className="text-sm text-[#475569] leading-relaxed pl-1">
                  <strong>Skywalks Holidays Pvt. Ltd.</strong><br />
                  Pepsicola, Kathmandu, Nepal, 44600
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#0ea5e9] flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base">Phone &amp; WhatsApp</h3>
                    <p className="text-xs text-[#64748b]">Direct booking lines</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-[#475569] pl-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0a1628]">WhatsApp:</span>
                    <a href="https://wa.me/9779714491103" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                      +977 971-4491103
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0a1628]">Phone Line:</span>
                    <a href="tel:9714491103" className="text-[#0ea5e9] font-bold hover:underline">
                      971-4491103
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#fff7ed] text-[#f97316] flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base">Email Address</h3>
                    <p className="text-xs text-[#64748b]">Official agency inbox</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm text-[#475569] pl-1">
                  <div>
                    <a href="mailto:skywalktoursandtravels32@gmail.com" className="text-[#0ea5e9] font-bold hover:underline break-all">
                      skywalktoursandtravels32@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours & Reviews Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf5ff] text-purple-600 flex items-center justify-center shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base">Business Hours &amp; Rating</h3>
                    <p className="text-xs text-[#64748b]">24/7 Availability</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#475569] pl-1">
                  <div className="flex justify-between border-b border-[#f1f5f9] pb-1.5">
                    <span className="font-semibold text-[#0a1628]">Working Hours:</span>
                    <span className="font-bold text-emerald-600">Always Open</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-semibold text-[#0a1628]">Customer Reviews:</span>
                    <span className="font-bold text-amber-500">100% Recommend (8 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm">
                <h3 className="font-bold text-[#0a1628] text-sm uppercase tracking-wider mb-4">
                  Follow Us On Social Media
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#0a1628] hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Travel Support CTA */}
      <section className="py-10 bg-[#0a1628] text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/10 p-8 rounded-3xl border border-white/15">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#f97316] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Headset size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Need 24/7 Emergency Travel Support?</h3>
                <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                  Currently traveling and need immediate rebooking, flight changes, or transit assistance?
                </p>
              </div>
            </div>
            <a
              href="tel:9714491103"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-xl transition-all text-sm shrink-0"
            >
              <Phone size={18} />
              Call Helpline: 971-4491103
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Visit Our Office"
            title="Locate Skywalks Holidays in Kathmandu"
            subtitle="We welcome you to visit our office in Pepsicola for in-person travel consultations."
          />

          <div className="bg-[#f8fafc] rounded-3xl overflow-hidden border border-[#e2e8f0] p-4 shadow-xl">
            {/* Map Placeholder Graphic */}
            <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-[#163058] overflow-hidden flex flex-col items-center justify-center text-white text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white mb-4 shadow-2xl animate-bounce">
                <MapPin size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-1">Pepsicola, Kathmandu, Nepal, 44600</h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-md mb-6">
                Pepsicola, Kathmandu, Nepal, 44600. Easy access &amp; 24/7 travel consultation service available.
              </p>

              <a
                href="https://maps.google.com/?q=Pepsicola+Kathmandu+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0a1628] hover:bg-[#0ea5e9] hover:text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors text-xs sm:text-sm"
              >
                Open Directions in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTABanner
        title="Prefer Personal Assistance Over Phone or WhatsApp?"
        subtitle="Our travel specialists are available 24/7 to help you plan your dream journey."
        primaryLabel="Plan Your Trip"
        primaryHref="/services/custom"
        secondaryLabel="WhatsApp Us Now"
        secondaryHref="https://wa.me/9779714491103"
      />
    </>
  );
}
