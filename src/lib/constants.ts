import {
  Plane,
  Hotel,
  Globe,
  FileCheck,
  Bus,
  Shield,
  Sparkles,
  Users,
  Award,
  Clock,
} from "lucide-react";

export const COMPANY = {
  name: "Skywalks Holidays",
  tagline: "Your Journey, Our Passion",
  description:
    "Nepal's premier international travel agency offering world-class holiday experiences since 2010.",
  phone: "+977-1-4XXXXXX",
  mobile: "+977-98XXXXXXXX",
  email: "info@skywalkholidays.com",
  address: "Thamel, Kathmandu, Nepal",
  founded: 2010,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Flight Tickets", href: "/flights" },
      { label: "Hotel Booking", href: "/hotels" },
      { label: "Holiday Packages", href: "/holiday-packages" },
      { label: "Visa Assistance", href: "/visa-services" },
      { label: "Bus Tickets", href: "/bus-tickets" },
      { label: "Travel Insurance", href: "/services/insurance" },
      { label: "Custom Tours", href: "/services/custom" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Vlogs", href: "/vlogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    icon: Plane,
    title: "Flight Ticket Booking",
    description:
      "International flights at the best fares. Compare leading airlines and book instantly.",
    href: "/flights",
    color: "sky",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "Handpicked hotels from boutique resorts to 5-star luxury hotels worldwide.",
    href: "/hotels",
    color: "navy",
  },
  {
    icon: Globe,
    title: "International Holiday Packages",
    description:
      "Curated luxury and budget holiday packages to Dubai, Thailand, Bali, Europe, and beyond.",
    href: "/holiday-packages",
    color: "orange",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Hassle-free visa processing with expert documentation guidance for 50+ countries.",
    href: "/visa-services",
    color: "navy",
  },
  {
    icon: Bus,
    title: "Bus Ticket Booking",
    description:
      "Intercity tourist and VIP luxury sofa buses across major travel hubs.",
    href: "/bus-tickets",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage for medical emergencies, trip cancellations, and baggage protection.",
    href: "/services/insurance",
    color: "sky",
  },
];

export const DESTINATIONS = [
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    startingFrom: 65000,
    packages: 8,
  },
  {
    name: "Bangkok & Phuket, Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    startingFrom: 38000,
    packages: 12,
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    startingFrom: 52000,
    packages: 6,
  },
  {
    name: "Singapore & Malaysia",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
    startingFrom: 72000,
    packages: 5,
  },
  {
    name: "Paris & Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    startingFrom: 185000,
    packages: 10,
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
    startingFrom: 145000,
    packages: 4,
  },
];

export const FEATURED_PACKAGES = [
  {
    id: 1,
    title: "Dubai Extravaganza & Desert Safari",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    destination: "Dubai, UAE",
    duration: "5 Nights / 6 Days",
    price: 65000,
    originalPrice: 78000,
    rating: 4.9,
    reviews: 142,
    inclusions: ["Flights", "4-Star Hotel", "Desert Safari", "Visa"],
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Phuket & Bangkok Paradise",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    destination: "Thailand",
    duration: "4 Nights / 5 Days",
    price: 38000,
    originalPrice: 46000,
    rating: 4.8,
    reviews: 98,
    inclusions: ["Flights", "Resort", "Island Tour", "Transfers"],
    badge: "Top Rated",
  },
  {
    id: 3,
    title: "Magical Bali Honeymoon Escape",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    destination: "Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: 52000,
    originalPrice: 65000,
    rating: 4.9,
    reviews: 176,
    inclusions: ["Villa Stay", "Private Tour", "Spa", "Meals"],
    badge: "Family Pick",
  },
  {
    id: 4,
    title: "Singapore & Malaysia Combo",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
    destination: "Singapore & KL",
    duration: "6 Nights / 7 Days",
    price: 72000,
    originalPrice: 85000,
    rating: 4.7,
    reviews: 64,
    inclusions: ["Flights", "Hotel", "City Tour", "Theme Park"],
    badge: "New",
  },
];

export const STATS = [
  { label: "Years Experience", value: 15, suffix: "+", icon: Clock },
  { label: "Happy Travelers", value: 50000, suffix: "+", icon: Users },
  { label: "Destinations Covered", value: 80, suffix: "+", icon: Globe },
  { label: "Satisfaction Rate", value: 99, suffix: "%", icon: Award },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rohan & Sneha Karki",
    role: "Honeymoon Travelers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    content: "Skywalks Holidays curated our dream Bali honeymoon. The private pool villa, flower bath, and seamless flight transfers were incredible!",
    rating: 5,
    package: "Bali Honeymoon Special",
  },
  {
    id: 2,
    name: "Dr. Bikash Shrestha",
    role: "Family Traveler",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "Booked Dubai tickets and visa for 6 family members. Everything was managed smoothly via WhatsApp. Highly recommended!",
    rating: 5,
    package: "Dubai Family Tour",
  },
  {
    id: 3,
    name: "Pooja Gurung",
    role: "Solo Traveler",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "Their Thailand flight booking and visa guidance desk was super fast and transparent. Best travel agency in Kathmandu!",
    rating: 5,
    package: "Thailand Getaway",
  },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Flight Booking", href: "/services/flights" },
    { label: "Hotel Booking", href: "/services/hotels" },
    { label: "Holiday Packages", href: "/services/packages/international" },
    { label: "Visa Assistance", href: "/services/visa" },
    { label: "Bus Tickets", href: "/services/bus" },
    { label: "Travel Insurance", href: "/services/insurance" },
    { label: "Custom Tours", href: "/services/custom" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Travel Vlogs", href: "/vlogs" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
