import React from "react";
import Link from "next/link";
import { Plane, Phone, Mail, MapPin, Send } from "lucide-react";

/* Inline SVG social icons (lucide-react doesn't ship brand icons) */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Newsletter Bar */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0a1628] border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Get Exclusive Travel Deals</h3>
              <p className="text-white/70 text-sm mt-1">
                Subscribe and save up to 30% on your next trip
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white w-full md:w-72"
              />
              <Button variant="default" className="shrink-0 bg-[#f97316] hover:bg-[#ea580c]">
                <Send size={16} />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#163058] flex items-center justify-center">
                <Plane size={18} className="text-white rotate-45" />
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-none block">
                  Skywalks
                </span>
                <span className="text-[#0ea5e9] text-xs font-semibold tracking-widest uppercase leading-none">
                  Holidays
                </span>
              </div>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              {COMPANY.description} We make travel seamless, memorable, and accessible for everyone.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY.mobile}`}
                className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#0ea5e9] transition-colors"
              >
                <Phone size={14} className="text-[#0ea5e9]" />
                {COMPANY.mobile}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#0ea5e9] transition-colors"
              >
                <Mail size={14} className="text-[#0ea5e9]" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <MapPin size={14} className="text-[#0ea5e9] mt-0.5 shrink-0" />
                {COMPANY.address}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: FacebookIcon, href: "https://www.facebook.com/p/SkyWalk-Holidays-61569789310239/", label: "Facebook" },
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: YoutubeIcon, href: "#", label: "YouTube" },
                { icon: XIcon, href: "#", label: "X (Twitter)" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#94a3b8] hover:bg-[#0ea5e9] hover:text-white transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#0ea5e9] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0ea5e9]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#0ea5e9] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0ea5e9]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#0ea5e9] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0ea5e9]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Certified & Trusted
              </div>
              <div className="flex flex-wrap gap-2">
                {["IATA Certified", "NTB Licensed", "TAAN Member"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-2.5 py-1 rounded-full border border-[#0ea5e9]/40 text-[#0ea5e9] bg-[#0ea5e9]/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748b] text-center" suppressHydrationWarning>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b]">
            Made with ❤️ in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
