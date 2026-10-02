import React from "react";
import { Plane, Hotel, Palmtree, FileText, Shield, Map } from "lucide-react";
import ServiceCard from "@/components/common/ServiceCard";
import SectionHeader from "@/components/common/SectionHeader";

const SERVICES_DATA = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "International flight ticket assistance at competitive rates.",
    href: "/services/flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    ctaText: "Book Flights",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Find comfortable stays for business and leisure travel.",
    href: "/services/hotels",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ctaText: "Book Hotels",
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    description: "Explore carefully planned international holiday packages.",
    href: "/services/packages/international",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ctaText: "Explore Packages",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Professional visa documentation and application guidance.",
    href: "/services/visa",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    ctaText: "Apply for Visa",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive medical and trip cancellation coverage.",
    href: "/services/insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ctaText: "Get Insurance",
  },
  {
    icon: Map,
    title: "Customized Tours",
    description: "Personalized travel experiences designed around your needs.",
    href: "/services/custom",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
    ctaText: "Customize Trip",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Travel Services"
          title="Everything You Need for Your Next Journey"
          subtitle="Explore our comprehensive travel solutions designed to make your journey seamless, memorable, and worry-free."
        />

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              image={service.image}
              ctaText={service.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
