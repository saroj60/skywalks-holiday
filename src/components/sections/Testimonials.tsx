import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "@/components/common/TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Traveler Stories"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from thousands of travelers who chose Skywalks Holidays."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Rating summary bar */}
        <div className="mt-12 bg-white rounded-2xl border border-[#e2e8f0] p-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div>
            <div className="text-5xl font-bold text-[#0a1628]">4.9</div>
            <div className="flex justify-center sm:justify-start gap-1 my-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">★</span>
              ))}
            </div>
            <div className="text-sm text-[#64748b]">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-[#e2e8f0] hidden sm:block" />
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Google Reviews", value: "2,400+" },
              { label: "TripAdvisor", value: "1,800+" },
              { label: "Facebook", value: "3,200+" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#0a1628]">{s.value}</div>
                <div className="text-xs text-[#64748b] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
