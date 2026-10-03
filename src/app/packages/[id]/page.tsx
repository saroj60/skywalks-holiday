import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  Hotel,
  Car,
  FileText,
  HelpCircle,
  Star,
  ShieldCheck,
  ChevronRight,
  Calendar,
  Briefcase,
  Luggage,
  Shirt,
  FileCheck2,
  AlertCircle,
  Package,
} from "lucide-react";
import PackageInquirySidebar from "@/components/packages/PackageInquirySidebar";
import PackageGallerySection from "@/components/packages/PackageGallerySection";
import PackageSubNav from "@/components/packages/PackageSubNav";
import PackagePdfButton from "@/components/packages/PackagePdfButton";

export const PACKAGES_DICTIONARY: Record<string, any> = {
  "dubai-6d": {
    id: "dubai-6d",
    title: "Dubai Extravaganza & Desert Safari",
    destination: "Dubai & Abu Dhabi, United Arab Emirates",
    duration: "5 Nights / 6 Days",
    price: 65000,
    originalPrice: 78000,
    rating: 4.9,
    reviewsCount: 184,
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
      "https://images.unsplash.com/photo-1546412414-8035e1786b9e?w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    ],
    overview:
      "Embark on an unforgettable 6-day journey to Dubai — the city of gold and futuristic wonder. This carefully designed package blends cosmopolitan luxury with desert adventure. Experience dune bashing and traditional barbecue under the stars, marvel at the skyline from the 124th floor of Burj Khalifa, sail along Dubai Marina on a traditional Dhow cruise, and explore the Sheikh Zayed Grand Mosque in Abu Dhabi.",
    highlights: [
      "Round-trip international flights from Kathmandu",
      "4-Star luxury hotel stay with daily breakfast",
      "Thrill-packed Desert Safari with Dune Bashing, Camel Rides & BBQ Dinner",
      "Entry ticket to Burj Khalifa 124th Floor Observation Deck",
      "Full-day Abu Dhabi City Tour with Sheikh Zayed Mosque visit",
      "Dubai Marina Sunset Dhow Cruise with International Buffet",
      "Seamless Tourist Visa processing & airport transfers",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Dubai & Marina Dhow Cruise", activity: "Airport pickup, hotel check-in, evening 2-hour Dhow Cruise with buffet dinner." },
      { day: "Day 2", title: "Dubai City Tour & Burj Khalifa At The Top", activity: "Half-day city tour (Gold Souk, Atlantis photo stop), 124th floor Burj Khalifa deck." },
      { day: "Day 3", title: "Shopping & Afternoon Desert Safari", activity: "Free morning for Dubai Mall shopping. 3:00 PM 4WD dune bashing, camel rides & BBQ show." },
      { day: "Day 4", title: "Abu Dhabi City Tour & Sheikh Zayed Mosque", activity: "Full-day Abu Dhabi tour visiting Sheikh Zayed Grand Mosque & Corniche." },
      { day: "Day 5", title: "Leisure Day / Optional Miracle Garden", activity: "Free day for Miracle Garden, Global Village, or Ski Dubai snow park." },
      { day: "Day 6", title: "Final Shopping & Departure to Kathmandu", activity: "Hotel check-out and private transfer to Dubai International Airport for return flight." },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dubai & Evening Marina Dhow Cruise",
        description:
          "Arrive at Dubai International Airport (DXB). Meet our representative and transfer to your 4-star hotel. In the evening, enjoy a 2-hour romantic Dhow Cruise along Dubai Marina featuring a lavish international buffet dinner.",
      },
      {
        day: "Day 2",
        title: "Dubai City Tour & Burj Khalifa At The Top",
        description:
          "Guided city tour covering Gold Souk, Jumeirah Mosque, and Atlantis The Palm photo stop. Afternoon visit to Burj Khalifa 124th floor for panoramic views and Dubai Fountain show.",
      },
      {
        day: "Day 3",
        title: "Shopping & Afternoon Desert Safari",
        description:
          "Morning shopping at Dubai Mall. At 3:00 PM, 4WD Land Cruisers pick you up for Desert Safari with dune bashing, camel riding, belly dance performance, and BBQ dinner show.",
      },
      {
        day: "Day 4",
        title: "Abu Dhabi City Tour & Sheikh Zayed Mosque",
        description:
          "Full-day tour to Abu Dhabi visiting Sheikh Zayed Grand Mosque, Corniche waterfront, Heritage Village, and Yas Island photo stop.",
      },
      {
        day: "Day 5",
        title: "Leisure Day / Optional Visit to Miracle Garden",
        description:
          "Day at leisure to explore Miracle Garden, Global Village, or Ski Dubai snow park at your own pace.",
      },
      {
        day: "Day 6",
        title: "Final Shopping & Departure to Kathmandu",
        description:
          "Hotel check-out and private transfer to Dubai Airport for return flight back to Kathmandu.",
      },
    ],
    inclusions: [
      "International Flight Tickets (Kathmandu ⇄ Dubai)",
      "5 Nights Accommodation in 4-Star Hotel (Double Sharing)",
      "Daily International Buffet Breakfast",
      "Desert Safari with 4WD Dune Bashing & BBQ Show",
      "Burj Khalifa At The Top (124th Floor) Ticket",
      "Dubai Marina Dhow Cruise with Buffet Dinner",
      "Full-Day Abu Dhabi City Tour with Mosque Visit",
      "UAE Tourist Visa with Insurance Coverage",
      "Airport Transfers in Private AC Vehicle",
    ],
    exclusions: [
      "Personal expenses (laundry, telephone calls, minibar)",
      "Meals other than specified (Lunches and unmentioned dinners)",
      "Driver and tour guide tips (Recommended $3-5/day)",
      "Tourism Dirham fee paid directly to hotel (approx. 15 AED/room/night)",
      "Optional entry tickets (Miracle Garden, Ferrari World, Ski Dubai)",
    ],
    equipment: [
      {
        category: "Clothing & Wearables",
        items: [
          "Lightweight cotton shirts & breathable summer clothing",
          "Modest attire covering shoulders & knees for Sheikh Zayed Mosque (Abu Dhabi)",
          "Comfortable walking sneakers / sandals for city tours & dune bashing",
          "Sunglasses, UV sun hat, and light jacket for air-conditioned buses/malls",
        ],
      },
      {
        category: "Travel Essentials & Electronics",
        items: [
          "UK 3-pin G-type power adapter / universal travel plug",
          "High-capacity power bank & camera equipment",
          "Sunscreen (SPF 50+), lip balm, and moisturizer for desert climate",
        ],
      },
      {
        category: "Important Documents & Cash",
        items: [
          "Original passport valid for at least 6 months",
          "Printed UAE e-Visa & travel insurance copy",
          "International credit/debit card & Dirham (AED) or USD cash",
        ],
      },
    ],
    hotelInfo: {
      name: "Al Khoory Atrium Hotel / Carlton Downtown (4-Star)",
      rating: "4-Star Deluxe Hotel",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "Deluxe King / Twin Room",
      amenities: ["Rooftop Pool", "Spa & Wellness", "Free High-Speed Wi-Fi", "Fitness Center"],
    },
    transportation: {
      flightInfo: "Direct flights via Emirates, FlyDubai, or Nepal Airlines.",
      transfers: "Air-conditioned private/shared tourist vehicle.",
      driver: "Licensed English speaking tour guide & driver.",
    },
    importantNotes: [
      "Passport valid for at least 6 months required.",
      "UAE Visa issued within 3-5 business days.",
      "30% deposit required at time of booking.",
    ],
    faqs: [
      {
        q: "What is the visa process for Nepali citizens?",
        a: "We process official UAE e-visas directly. Scanned passport copy & photo required.",
      },
      {
        q: "Can I customize this itinerary?",
        a: "Yes! Extra nights and 5-Star Atlantis upgrades are available.",
      },
    ],
  },

  "thailand-5d": {
    id: "thailand-5d",
    title: "Thailand Bangkok & Phuket Beach Escape",
    destination: "Bangkok & Phuket, Thailand",
    duration: "4 Nights / 5 Days",
    price: 38000,
    originalPrice: 46000,
    rating: 4.8,
    reviewsCount: 156,
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    overview:
      "Experience the tropical magic of Thailand! Relax on Patong's white sand beaches in Phuket, take a high-speed speedboat to Phi Phi Islands and Maya Bay, and dive into Bangkok's vibrant night markets and sacred golden temples.",
    highlights: [
      "Round-trip international flights from Kathmandu",
      "2 Nights Beachfront Resort in Phuket + 2 Nights City Hotel in Bangkok",
      "Full-Day Phi Phi Island & Maya Bay Speedboat Tour with buffet lunch",
      "Guided Bangkok Temple Tour: Wat Pho & Golden Buddha",
      "Shopping tour to Asiatique Riverfront & Pratunam Night Market",
      "Thailand Tourist Visa guidance & private airport transfers",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Phuket & Beach Leisure", activity: "Airport transfer to Patong beach resort, evening leisure at Bangla Road." },
      { day: "Day 2", title: "Phi Phi Island & Maya Bay Speedboat Tour", activity: "Full-day speedboat island tour, Maya Bay, Viking Cave, snorkeling & buffet lunch." },
      { day: "Day 3", title: "Domestic Flight to Bangkok & Riverfront Shopping", activity: "Flight to Bangkok, check-in, evening Asiatique Riverfront night market tour." },
      { day: "Day 4", title: "Bangkok Golden Temple City Tour", activity: "Wat Pho (Reclining Buddha) & Wat Traimit (Golden Buddha) temple tour, shopping." },
      { day: "Day 5", title: "Departure to Kathmandu", activity: "Free shopping morning, airport transfer for return flight to Kathmandu." },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Phuket & Beach Leisure",
        description:
          "Arrive at Phuket International Airport (HKT). Private transfer to 4-Star Beach Resort. Free afternoon to enjoy Patong Beach and Bangla Road night market.",
      },
      {
        day: "Day 2",
        title: "Phi Phi Island & Maya Bay Speedboat Tour",
        description:
          "Full-day tour to Maya Bay (featured in 'The Beach'), Viking Cave, Monkey Beach, and Khai Island with snorkeling and buffet lunch.",
      },
      {
        day: "Day 3",
        title: "Domestic Flight to Bangkok & Riverfront Shopping",
        description:
          "Fly from Phuket to Bangkok. Check-in at Bangkok hotel. Evening visit to Asiatique The Riverfront night bazaar.",
      },
      {
        day: "Day 4",
        title: "Bangkok Temple & City Sightseeing",
        description:
          "Guided tour of Wat Pho (Reclining Buddha) and Wat Traimit (Golden Buddha). Free afternoon for shopping at Platinum Fashion Mall.",
      },
      {
        day: "Day 5",
        title: "Departure to Kathmandu",
        description:
          "Free time for last-minute shopping until transfer to Suvarnabhumi Airport for return flight to Kathmandu.",
      },
    ],
    inclusions: [
      "International Flight Tickets (Kathmandu ⇄ Phuket / Bangkok)",
      "Domestic Flight (Phuket → Bangkok)",
      "4 Nights Accommodation in 4-Star Hotels with Daily Breakfast",
      "Phi Phi Island Speedboat Tour with Lunch & Snorkeling Equipment",
      "Bangkok Temple & City Sightseeing Tour",
      "Airport & Hotel Transfers in Private AC Minivan",
    ],
    exclusions: [
      "National Park Entry Fee (approx. 400 THB/person paid in cash at pier)",
      "Personal shopping & unmentioned meals",
      "Tips for drivers and boat crew",
      "Thailand Visa on Arrival fee (2,000 THB if applicable)",
    ],
    equipment: [
      {
        category: "Beach & Swimming Wearables",
        items: [
          "Swimsuits, rash guards, water shoes for island coral reefs",
          "Quick-dry towels, beach tote bag, waterproof phone pouch",
          "Reef-safe sunscreen (SPF 50+), sunglasses, and sun hat",
        ],
      },
      {
        category: "Temple Attire",
        items: [
          "Modest clothing covering knees & shoulders for Bangkok temples",
          "Easy slip-on shoes (shoes removed before entering sacred temple halls)",
        ],
      },
      {
        category: "Documents & Currency",
        items: [
          "Passport valid for at least 6 months",
          "Thai Baht (THB) cash for night markets & street food",
        ],
      },
    ],
    hotelInfo: {
      name: "Centara Beach Resort Phuket & Centara Watergate Bangkok",
      rating: "4-Star Hotel",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "Superior City / Ocean View Room",
      amenities: ["Swimming Pool", "Fitness Center", "Spa", "Free Wi-Fi"],
    },
    transportation: {
      flightInfo: "Direct / 1-stop flights via Thai Airways or Nepal Airlines.",
      transfers: "Air-conditioned private minivan & luxury speedboat.",
      driver: "English speaking Thai local driver & tour guide.",
    },
    importantNotes: [
      "Visa on Arrival available at airport or pre-applied e-Visa.",
      "Bring sunscreen and swimwear for Phi Phi Island tour.",
    ],
    faqs: [
      {
        q: "Is Visa on Arrival available for Nepalese citizens?",
        a: "Yes, Visa on Arrival is available at Phuket and Bangkok airports with 2,000 THB fee and passport photos.",
      },
    ],
  },

  "bali-7d": {
    id: "bali-7d",
    title: "Tropical Bali Romance & Cultural Getaway",
    destination: "Ubud & Kuta, Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: 52000,
    originalPrice: 64000,
    rating: 4.9,
    reviewsCount: 210,
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    ],
    overview:
      "Escape to the Island of the Gods! This romantic getaway combines luxury pool villas in the jungle hills of Ubud with sunset beachfront resorts in Seminyak. Swing over emerald rice terraces, witness the Uluwatu cliffside Kecak dance, and sail on a romantic sunset catamaran cruise.",
    highlights: [
      "3 Nights Luxury Private Pool Villa in Ubud + 3 Nights Beachfront Resort in Seminyak",
      "Famous Ubud Jungle Swing photoshoot & Tegalalang rice terrace tour",
      "Sunset Catamaran Cruise with buffet dinner & live acoustic music",
      "Nusa Penida Island Speedboat Day Tour (Kelingking T-Rex Beach & Angel's Billabong)",
      "Traditional 2-Hour Balinese Massage & Couples Flower Bath Spa Session",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Bali & Villa Check-in", activity: "Private airport transfer to Ubud pool villa, welcome drinks." },
      { day: "Day 2", title: "Ubud Rice Terraces & Jungle Swing", activity: "Tegalalang rice terrace walk, jungle swing photoshoot, Sacred Monkey Forest." },
      { day: "Day 3", title: "Water Temple & Kintamani Volcano Tour", activity: "Tirta Empul holy spring water temple, Luwak coffee plantation & Mt. Batur view." },
      { day: "Day 4", title: "Transfer to Seminyak & Sunset Dinner Cruise", activity: "Move to Seminyak beachfront resort, sunset catamaran cruise with dinner." },
      { day: "Day 5", title: "Nusa Penida Island Speedboat Tour", activity: "Speedboat to Nusa Penida island, Kelingking Beach, Broken Beach & lunch." },
      { day: "Day 6", title: "Balinese Spa & Beach Leisure", activity: "2-Hour traditional Balinese massage & flower bath, Potato Head Beach Club." },
      { day: "Day 7", title: "Departure to Kathmandu", activity: "Souvenir shopping, private transfer to Denpasar Airport for flight back." },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali & Villa Check-in",
        description:
          "Arrive at Denpasar Airport (DPS). Private transfer to luxury pool villa in Ubud. Welcome flower garland & fresh coconut drink.",
      },
      {
        day: "Day 2",
        title: "Ubud Rice Terraces & Jungle Swing Photoshoot",
        description:
          "Visit Tegalalang Rice Terraces, famous Ubud Jungle Swing, Sacred Monkey Forest, and Ubud Art Market.",
      },
      {
        day: "Day 3",
        title: "Water Temple & Kintamani Volcano Tour",
        description:
          "Visit Tirta Empul holy spring water temple, Luwak coffee plantation, and view Batur active volcano.",
      },
      {
        day: "Day 4",
        title: "Transfer to Seminyak & Sunset Dinner Cruise",
        description:
          "Move to beachfront resort in Seminyak. Evening sunset catamaran cruise with buffet dinner.",
      },
      {
        day: "Day 5",
        title: "Nusa Penida Island Speedboat Day Tour",
        description:
          "Full-day speedboat tour to Nusa Penida. Visit Kelingking Beach (T-Rex viewpoint), Broken Beach, and Angel's Billabong.",
      },
      {
        day: "Day 6",
        title: "Balinese Spa & Beach Leisure",
        description:
          "Relax with a 2-Hour traditional Balinese Massage and flower bath session. Sunset drinks at Potato Head Beach Club.",
      },
      {
        day: "Day 7",
        title: "Departure to Kathmandu",
        description:
          "Free time for souvenir shopping before private transfer to airport for flight back to Kathmandu.",
      },
    ],
    inclusions: [
      "International Flight Tickets (Kathmandu ⇄ Bali)",
      "3 Nights Luxury Pool Villa in Ubud + 3 Nights Resort in Seminyak",
      "Daily Breakfast with Floating Breakfast option in Villa",
      "Nusa Penida Island Speedboat Tour with Lunch",
      "Sunset Catamaran Cruise with Buffet Dinner",
      "2-Hour Traditional Balinese Massage & Spa",
      "Private AC Car with Dedicated English Speaking Driver",
    ],
    exclusions: [
      "Personal shopping & extra spa treatments",
      "Visa on Arrival fee (approx. $35 USD paid at Bali airport)",
      "Tourism Levy Fee (150,000 IDR per person)",
    ],
    equipment: [
      {
        category: "Clothing & Resortwear",
        items: [
          "Flowy dresses / linen shirts for photoshoots (Jungle Swing & Nusa Penida)",
          "Swimwear & flip-flops for villa private pool and catamaran cruise",
          "Sarong / modest cover-up for water temple visits",
        ],
      },
      {
        category: "Gear & Accessories",
        items: [
          "Waterproof dry bag for Nusa Penida speedboat tour",
          "Action camera / phone gimbal for scenic cliff viewpoints",
          "Mosquito repellent, SPF 50+ sunscreen & sunglasses",
        ],
      },
      {
        category: "Documents & Cash",
        items: [
          "Passport with at least 6 months validity",
          "Indonesian Rupiah (IDR) cash & credit card",
        ],
      },
    ],
    hotelInfo: {
      name: "Aksari Resort Ubud & Discovery Kartika Plaza Seminyak",
      rating: "5-Star Resort & Villa",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "One-Bedroom Private Pool Villa",
      amenities: ["Private Infinity Pool", "Jungle Spa", "Free Shuttle to Ubud Center"],
    },
    transportation: {
      flightInfo: "1-stop flights via Singapore Airlines, Malaysia Airlines, or Malindo.",
      transfers: "Private AC SUV with dedicated driver throughout the trip.",
      driver: "English speaking local Balinese driver.",
    },
    importantNotes: [
      "Indonesian Visa on Arrival issued at Bali Airport ($35 USD).",
      "Floating breakfast in villa included for honeymoon couples.",
    ],
    faqs: [
      {
        q: "Is Bali safe for honeymoon couples and families?",
        a: "Bali is one of the safest, most welcoming tourist destinations in the world with warm hospitality.",
      },
    ],
  },

  "europe-11d": {
    id: "europe-11d",
    title: "Grand Europe Highlights — Paris, Alps & Rome",
    destination: "Paris, Swiss Alps, Venice & Rome",
    duration: "10 Nights / 11 Days",
    price: 195000,
    originalPrice: 230000,
    rating: 5.0,
    reviewsCount: 62,
    gallery: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    ],
    overview:
      "Fulfill your lifelong dream of visiting Europe! Journey across 4 world-renowned countries — France, Switzerland, Liechtenstein & Italy. Ascend the Eiffel Tower in Paris, ride the revolving Mt. Titlis cable car in the Swiss Alps, cruise the romantic canals of Venice on a gondola, and admire the Colosseum in Rome.",
    highlights: [
      "Round-trip flights from Kathmandu & TGV high-speed train rides across Europe",
      "Paris: Eiffel Tower 2nd Floor, Louvre Museum & Seine River Cruise",
      "Swiss Alps: Lucerne Chapel Bridge & Mt. Titlis Rotair Cable Car snow ride",
      "Venice: Gondola ride along Grand Canal & St. Mark's Basilica",
      "Rome & Vatican City: Colosseum, Roman Forum & St. Peter's Basilica tour",
      "Full Schengen Visa documentation support & clearance from Kathmandu",
    ],
    outlineItinerary: [
      { day: "Day 1-3", title: "Paris City of Lights", activity: "Eiffel Tower 2nd floor, Seine River Cruise, Louvre Museum & Champs-Élysées." },
      { day: "Day 4-6", title: "TGV Train to Switzerland & Mt. Titlis Alps", activity: "High-speed train to Lucerne, Mt. Titlis revolving cable car & glacier snow park." },
      { day: "Day 7-8", title: "Scenic Train to Venice Canals", activity: "Venice Grand Canal gondola cruise, St. Mark's Square & Murano Glass workshop." },
      { day: "Day 9-11", title: "Rome, Vatican City & Departure", activity: "Guided Colosseum & Vatican City tour, return flight to Kathmandu." },
    ],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Paris City of Lights",
        description:
          "Arrive in Paris. Eiffel Tower 2nd floor, Seine River Cruise, Arc de Triomphe, Louvre Museum photo stop & Champs-Élysées shopping.",
      },
      {
        day: "Day 4-6",
        title: "TGV Train to Switzerland & Mt. Titlis Snow Alps",
        description:
          "High-speed train to Lucerne. Ride the world's first revolving cable car to Mt. Titlis 10,000 ft summit with Ice Flyer & Snow Park.",
      },
      {
        day: "Day 7-8",
        title: "Scenic Train to Venice Canals",
        description:
          "Cross the Swiss-Italian border to Venice. Gondola cruise on the Grand Canal, St. Mark's Square & Murano Glass factory.",
      },
      {
        day: "Day 9-11",
        title: "Eternal City Rome & Vatican & Departure",
        description:
          "Train to Rome. Guided tour of Colosseum, Trevi Fountain & Vatican City. Return flight to Kathmandu.",
      },
    ],
    inclusions: [
      "International Flights (Kathmandu ⇄ Paris / Rome)",
      "10 Nights Accommodation in 4-Star City Hotels",
      "Daily Buffet Breakfast",
      "High-Speed TGV & EuroCity Train Tickets",
      "Eiffel Tower 2nd Floor & Mt. Titlis Cable Car Admission",
      "Venice Gondola Cruise Ticket",
      "Complete Schengen Visa Documentation Support",
    ],
    exclusions: [
      "City Tourist Taxes (approx. 2-4 Euros/night per person paid at hotels)",
      "Meals not specified (Lunches & Dinners)",
      "Schengen Visa fee paid directly to VFS Kathmandu",
      "Travel insurance policy fee",
    ],
    equipment: [
      {
        category: "Clothing & Layering Gear",
        items: [
          "Heavy thermal wear, waterproof snow jacket & gloves for Mt. Titlis 10,000 ft summit",
          "Comfortable walking shoes / sturdy sneakers for cobblestone European streets",
          "Modest clothes covering shoulders & knees for Vatican City & Italian churches",
        ],
      },
      {
        category: "Travel Accessories",
        items: [
          "European 2-pin C/F type power adapter plug",
          "Compact umbrella & lightweight rain poncho",
          "Anti-theft crossbody bag / neck wallet for crowded tourist spots",
        ],
      },
      {
        category: "Documents & Currency",
        items: [
          "Passport valid for 6+ months with valid Schengen Visa sticker",
          "Euro (EUR) cash & international Forex card",
        ],
      },
    ],
    hotelInfo: {
      name: "Novotel Paris Centre & Hotel Astoria Lucerne & Golden Tulip Rome",
      rating: "4-Star Hotel Network",
      checkIn: "15:00 PM",
      checkOut: "11:00 AM",
      roomType: "Standard Double Room",
      amenities: ["City Center Location", "Free Wi-Fi", "Breakfast Buffet"],
    },
    transportation: {
      flightInfo: "Flights via Qatar Airways, Turkish Airlines, or Emirates.",
      transfers: "First class Eurail high-speed trains & private AC tour coaches.",
      driver: "Licensed European tour director.",
    },
    importantNotes: [
      "Schengen Visa appointment booking & document file creation included.",
      "Passport valid for at least 6 months required.",
    ],
    faqs: [
      {
        q: "Does Skywalk Holidays assist with the Schengen Visa application?",
        a: "Yes! We handle full appointment scheduling, flight itineraries, hotel vouchers, cover letters, and insurance files for VFS Kathmandu.",
      },
    ],
  },

  "singapore-6d": {
    id: "singapore-6d",
    title: "Singapore & Malaysia Twin City Fun",
    destination: "Singapore & Kuala Lumpur, Malaysia",
    duration: "5 Nights / 6 Days",
    price: 62000,
    originalPrice: 74000,
    rating: 4.7,
    reviewsCount: 128,
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    ],
    overview:
      "Explore Asia's top modern capitals! Experience Universal Studios Singapore on Sentosa Island, marvel at Marina Bay Sands and Gardens by the Bay, ride the Awana SkyWay cable car in Genting Highlands, and admire the Petronas Twin Towers in Kuala Lumpur.",
    highlights: [
      "Universal Studios Singapore Full-Day Admission Ticket",
      "Marina Bay Sands SkyPark Observation Deck & Gardens by the Bay Light Show",
      "Sentosa Island Cable Car Ride & Wings of Time Night Show",
      "Kuala Lumpur City Tour: Petronas Twin Towers, King's Palace & Batu Caves",
      "Genting Highlands Day Trip with Awana SkyWay Cable Car",
      "Intercity Luxury Express Coach from Singapore to Kuala Lumpur",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Singapore & Gardens by the Bay", activity: "Changi airport transfer, hotel check-in, Supertree Grove light show." },
      { day: "Day 2", title: "Universal Studios Singapore & Sentosa", activity: "Full day at Universal Studios theme park & Wings of Time laser show." },
      { day: "Day 3", title: "Marina Bay SkyPark & Coach to KL", activity: "Marina Bay Sands SkyPark 57th deck, luxury coach transfer to Kuala Lumpur." },
      { day: "Day 4", title: "Kuala Lumpur City Tour & Batu Caves", activity: "Petronas Twin Towers, Batu Caves rainbow stairs, King's Palace." },
      { day: "Day 5", title: "Genting Highlands Cable Car Excursion", activity: "Full-day trip to Genting Highlands, Awana SkyWay cable car ride." },
      { day: "Day 6", title: "Departure to Kathmandu", activity: "Bukit Bintang shopping, KLIA airport transfer for return flight." },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Singapore & Gardens by the Bay",
        description:
          "Arrive at Changi Airport (SIN). Hotel check-in. Evening visit to Gardens by the Bay Supertree Grove light show.",
      },
      {
        day: "Day 2",
        title: "Universal Studios Singapore & Sentosa Island",
        description:
          "Full day at Universal Studios Singapore. Ride Transformers, Battlestar Galactica, and watch Wings of Time laser show.",
      },
      {
        day: "Day 3",
        title: "Marina Bay SkyPark & Coach to Kuala Lumpur",
        description:
          "Visit Marina Bay Sands SkyPark 57th floor deck. Afternoon luxury coach transfer across Johor border to Kuala Lumpur.",
      },
      {
        day: "Day 4",
        title: "Kuala Lumpur City Tour & Batu Caves",
        description:
          "Guided tour covering Petronas Twin Towers, Batu Caves rainbow steps, King's Palace, and Central Market shopping.",
      },
      {
        day: "Day 5",
        title: "Genting Highlands Cable Car Day Excursion",
        description:
          "Full-day excursion to Genting Highlands. Ride Awana SkyWay cable car, explore Genting SkyWorlds Theme Park & Casino.",
      },
      {
        day: "Day 6",
        title: "Departure to Kathmandu",
        description:
          "Free time for shopping at Bukit Bintang before transfer to KLIA Airport for return flight to Kathmandu.",
      },
    ],
    inclusions: [
      "International Flights (Kathmandu ⇄ Singapore / KL)",
      "5 Nights Accommodation in 4-Star Hotels with Breakfast",
      "Universal Studios Singapore Ticket",
      "Genting Highlands Awana Cable Car Ticket",
      "Intercity Express Coach (Singapore → KL)",
      "Airport & City Sightseeing Transfers",
    ],
    exclusions: [
      "Personal shopping & extra theme park rides",
      "Malaysia Tourism Tax (10 MYR/room/night)",
      "Meals not specified in itinerary",
    ],
    equipment: [
      {
        category: "Clothing & Shoes",
        items: [
          "Lightweight cotton clothes for humid weather & light jacket for Genting Highlands",
          "Comfortable walking sneakers for Universal Studios & Batu Caves steps",
        ],
      },
      {
        category: "Travel Tech & Accessories",
        items: [
          "UK 3-pin G-type power adapter",
          "Portable phone charger, sunscreen & sunglasses",
        ],
      },
      {
        category: "Documents & Cards",
        items: [
          "Passport valid for at least 6 months",
          "SG Arrival Card & Malaysia Digital Arrival Card",
          "Singapore Dollar (SGD) & Malaysian Ringgit (MYR)",
        ],
      },
    ],
    hotelInfo: {
      name: "Hotel Boss Singapore & Furama Bukit Bintang Kuala Lumpur",
      rating: "4-Star Hotel",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "Deluxe Queen Room",
      amenities: ["Swimming Pool", "Gym", "Central Location"],
    },
    transportation: {
      flightInfo: "Flights via Singapore Airlines, Malaysia Airlines, or Malindo Air.",
      transfers: "Luxury intercity express coach & private AC van.",
      driver: "English speaking local driver.",
    },
    importantNotes: [
      "Singapore SG Arrival Card & Malaysia Digital Arrival Card submitted online.",
    ],
    faqs: [
      {
        q: "Is Universal Studios ticket included in the price?",
        a: "Yes! Full-day one-day pass to Universal Studios Singapore is included.",
      },
    ],
  },

  "japan-7d": {
    id: "japan-7d",
    title: "Magical Japan — Tokyo, Mt. Fuji & Kyoto",
    destination: "Tokyo, Kyoto & Mt. Fuji, Japan",
    duration: "6 Nights / 7 Days",
    price: 145000,
    originalPrice: 170000,
    rating: 4.9,
    reviewsCount: 94,
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
    ],
    overview:
      "Journey to the Land of the Rising Sun! Experience Tokyo's neon-lit Shibuya Crossing, ride the bullet train (Shinkansen) past majestic Mt. Fuji, and immerse yourself in Kyoto's ancient golden temples, bamboo groves, and traditional tea houses.",
    highlights: [
      "Shinkansen Bullet Train ride between Tokyo & Kyoto",
      "Mt. Fuji 5th Station & Lake Kawaguchi scenic excursion",
      "Guided Tokyo City Tour: Senso-ji Temple, Akihabara & Shibuya Crossing",
      "Kyoto Ancient Temples: Kinkaku-ji (Golden Pavilion) & Arashiyama Bamboo Grove",
      "Full Japan Tourist Visa application & appointment guidance from Kathmandu",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Tokyo & Hotel Check-in", activity: "Airport transfer to Tokyo hotel, evening free in Shinjuku." },
      { day: "Day 2", title: "Tokyo Highlights Tour", activity: "Senso-ji Temple, Imperial Palace Outer Gardens, Tokyo Tower, Shibuya Crossing." },
      { day: "Day 3", title: "Mt. Fuji & Lake Kawaguchi Day Trip", activity: "Drive to Mt. Fuji 5th Station, Hakone ropeway ride & Lake Ashi cruise." },
      { day: "Day 4", title: "Shinkansen Bullet Train to Kyoto", activity: "Bullet train to Kyoto, check-in, evening Gion Geisha district walk." },
      { day: "Day 5", title: "Kyoto Golden Temple & Bamboo Grove", activity: "Kinkaku-ji Golden Pavilion, Fushimi Inari torii gates, Arashiyama Bamboo Grove." },
      { day: "Day 6", title: "Nara Deer Park & Osaka Castle Excursion", activity: "Visit Nara Park friendly deer, Osaka Castle & Dotonbori street food market." },
      { day: "Day 7", title: "Departure to Kathmandu", activity: "Free morning for souvenir shopping, airport transfer for return flight." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Tokyo & Hotel Check-in", description: "Arrive at Narita or Haneda Airport. Transfer to Tokyo city center hotel. Evening walk in Shinjuku." },
      { day: "Day 2", title: "Tokyo City Tour", description: "Visit Senso-ji Asakusa, Nakamise street, Tokyo Skytree photo stop, and Shibuya Crossing." },
      { day: "Day 3", title: "Mt. Fuji & Hakone Excursion", description: "Travel to Mt. Fuji 5th station. Ride the Hakone ropeway cable car and cruise Lake Ashi." },
      { day: "Day 4", title: "Shinkansen Bullet Train to Kyoto", description: "Ride the 300 km/h Bullet Train to Kyoto. Evening walk through historic Gion quarter." },
      { day: "Day 5", title: "Kyoto Temples & Bamboo Forest", description: "Visit Kinkaku-ji Golden Pavilion, Fushimi Inari 10,000 red torii gates, and Arashiyama." },
      { day: "Day 6", title: "Nara Deer Park & Osaka Day Excursion", description: "Feed bowing deer at Nara Park, visit Osaka Castle, and eat street food at Dotonbori." },
      { day: "Day 7", title: "Departure to Kathmandu", description: "Shopping at Ginza before private transfer to airport for return flight." },
    ],
    inclusions: [
      "International Flights (Kathmandu ⇄ Tokyo)",
      "6 Nights Accommodation in 4-Star Hotels with Breakfast",
      "JR Shinkansen Bullet Train Ticket (Tokyo → Kyoto)",
      "Full-Day Mt. Fuji & Hakone Tour",
      "Japan Tourist Visa Documentation Support",
      "Airport & City Sightseeing Transfers",
    ],
    exclusions: [
      "Personal expenses & unmentioned dinners",
      "Japan Visa fee paid to Embassy (if applicable)",
    ],
    equipment: [
      { category: "Clothing", items: ["Comfortable sneakers for walking", "Layered clothing depending on season"] },
      { category: "Essentials", items: ["Japan 2-pin Type-A adapter", "Pocket Wi-Fi / Suica IC card"] },
      { category: "Documents", items: ["Passport valid 6+ months", "Printed e-Visa / Sticker copy"] },
    ],
    hotelInfo: {
      name: "Shinjuku Washington Hotel Tokyo & Hotel Gracery Kyoto",
      rating: "4-Star Hotel",
      checkIn: "15:00 PM",
      checkOut: "11:00 AM",
      roomType: "Standard Twin Room",
      amenities: ["Free High-Speed Wi-Fi", "Breakfast Buffet", "Central Station Access"],
    },
    transportation: { flightInfo: "Flights via Singapore Airlines, Cathay Pacific, or Malaysia Airlines.", transfers: "High-speed train & private AC coach.", driver: "English speaking local guide." },
    importantNotes: ["Japan Tourist Visa processed within 5-7 business days."],
    faqs: [{ q: "Is Japan Visa difficult for Nepalese passport holders?", a: "With complete tax & bank documents through Skywalks, Japan visa approvals are fast and straightforward!" }],
  },

  "vietnam-6d": {
    id: "vietnam-6d",
    title: "Discover Vietnam — Ha Long Bay Cruise & Hanoi",
    destination: "Ha Long Bay & Hanoi, Vietnam",
    duration: "5 Nights / 6 Days",
    price: 45000,
    originalPrice: 56000,
    rating: 4.8,
    reviewsCount: 112,
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=85",
      "https://images.unsplash.com/photo-1509030450996-939a26352142?w=800&q=80",
      "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
    ],
    overview:
      "Discover the emerald waters and limestone pillars of Ha Long Bay! Sail on a luxury 5-star cruise ship, kayak through hidden caves, and explore the ancient streets and egg coffee cafes of Hanoi.",
    highlights: [
      "2-Day 1-Night Luxury Ha Long Bay Cruise with private balcony cabin",
      "Guided Hanoi Old Quarter Cyclo tour & Hoan Kiem Lake walk",
      "Ninh Binh Trang An boat tour through water caves",
      "Fast Vietnam e-Visa issuance within 3 days",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Hanoi & Old Quarter Walk", activity: "Airport pickup, hotel check-in, evening street food walk." },
      { day: "Day 2", title: "Hanoi to Ha Long Bay Luxury Cruise", activity: "Scenic drive to pier, board luxury cruise ship, kayaking & cave tour." },
      { day: "Day 3", title: "Tai Chi on Deck & Return to Hanoi", activity: "Sunrise Tai Chi, Sung Sot cave, return to Hanoi." },
      { day: "Day 4", title: "Ninh Binh Trang An Boat Excursion", activity: "Rowboat cruise through Trang An karst mountains & Tam Coc." },
      { day: "Day 5", title: "Hanoi Cultural Tour & Coffee Tasting", activity: "Ho Chi Minh Complex, Temple of Literature, famous egg coffee." },
      { day: "Day 6", title: "Departure to Kathmandu", activity: "Free morning shopping, airport transfer." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Hanoi", description: "Arrive at Noi Bai Airport. Transfer to boutique hotel in Old Quarter." },
      { day: "Day 2", title: "Ha Long Bay Cruise Boarding", description: "Board 5-star cruise ship. Kayak through limestone karst lagoons and enjoy seafood buffet." },
      { day: "Day 3", title: "Morning Cave Tour & Return to Hanoi", description: "Visit Surprise Cave, Tai Chi lesson on deck, drive back to Hanoi." },
      { day: "Day 4", title: "Ninh Binh Trang An Karst Boat Tour", description: "Cruise through Trang An UNESCO water caves and climb Mua Cave viewpoint." },
      { day: "Day 5", title: "Hanoi City Tour & Egg Coffee", description: "Visit Temple of Literature, Train Street, and sample legendary Vietnamese egg coffee." },
      { day: "Day 6", title: "Departure to Kathmandu", description: "Free time for shopping before transfer to airport for return flight." },
    ],
    inclusions: [
      "International Flights (Kathmandu ⇄ Hanoi)",
      "4 Nights Hotel + 1 Night 5-Star Ha Long Bay Cruise",
      "All Meals on Cruise Ship & Daily Hotel Breakfast",
      "Kayaking & Cave Entry Tickets",
      "Vietnam e-Visa Approval Letter",
    ],
    exclusions: ["Personal expenses & alcoholic drinks on cruise."],
    equipment: [
      { category: "Clothing", items: ["Swimwear for kayaking", "Light summer clothes"] },
      { category: "Documents", items: ["Passport valid 6+ months", "Printed Vietnam e-Visa"] },
    ],
    hotelInfo: {
      name: "La Sinfonía del Rey Hanoi & Ambassador Ha Long Cruise",
      rating: "4-Star Hotel & 5-Star Cruise",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "Balcony Executive Cabin",
      amenities: ["Rooftop Bar", "Cruise Kayaks", "Free Wi-Fi"],
    },
    transportation: { flightInfo: "Flights via Thai Airways, Singapore Airlines, or VietJet.", transfers: "Luxury AC Limousine bus.", driver: "English speaking local guide." },
    importantNotes: ["Vietnam e-Visa issued online in 3 business days."],
    faqs: [{ q: "Is Vietnam suitable for budget travelers?", a: "Vietnam offers exceptional value for money with world-class food, cruises, and sights at affordable rates!" }],
  },

  "maldives-5d": {
    id: "maldives-5d",
    title: "Maldives Luxury Overwater Villa Resort",
    destination: "Malé & South Atoll, Maldives",
    duration: "4 Nights / 5 Days",
    price: 85000,
    originalPrice: 105000,
    rating: 5.0,
    reviewsCount: 142,
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    ],
    overview:
      "Paradise found! Wake up above crystal-clear turquoise lagoons in your private overwater villa. Step directly into the Indian Ocean, swim with manta rays and sea turtles, and watch spectacular sunsets.",
    highlights: [
      "4 Nights Overwater Ocean Villa with private deck & ocean staircase",
      "Speedboat / Seaplane transfers between Malé Airport & Resort Island",
      "All-Inclusive / Half-Board meal plan with international gourmet buffets",
      "Guided coral reef snorkeling tour & sunset dolphin cruise",
      "Free Visa on Arrival for Nepalese citizens at Malé Airport",
    ],
    outlineItinerary: [
      { day: "Day 1", title: "Arrival in Malé & Speedboat to Island Resort", activity: "Airport greeting, speedboat transfer to island, villa check-in." },
      { day: "Day 2", title: "Coral Reef Snorkeling & Lagoon Swimming", activity: "Guided house reef snorkeling, sea turtle spotting, beach relaxation." },
      { day: "Day 3", title: "Sunset Dolphin Cruise & Candlelight Dinner", activity: "Dolphin watching boat cruise, beachfront romantic candlelight dinner." },
      { day: "Day 4", title: "Water Sports & Spa Relaxation", activity: "Kayaking, paddleboarding, couple's oceanfront spa session." },
      { day: "Day 5", title: "Departure to Kathmandu", activity: "Breakfast over lagoon, speedboat transfer to Malé for return flight." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Malé & Resort Transfer", description: "Arrive at Velana Airport (MLE). Speedboat transfer across turquoise lagoon to resort island villa." },
      { day: "Day 2", title: "Lagoon Swimming & Coral Reef Snorkeling", description: "Swim directly from your overwater deck into crystal lagoon. Guided snorkeling with tropical fish." },
      { day: "Day 3", title: "Sunset Dolphin Cruise & Beachfront Dinner", description: "Board traditional Maldivian Dhoni for dolphin watching. Seafood candlelight dinner under stars." },
      { day: "Day 4", title: "Water Sports & Oceanfront Spa", description: "Enjoy complimentary glass-bottom kayaks, stand-up paddleboarding, and ocean spa." },
      { day: "Day 5", title: "Departure to Kathmandu", description: "Final breakfast over ocean before speedboat transfer to Malé Airport for return flight." },
    ],
    inclusions: [
      "International Flights (Kathmandu ⇄ Malé)",
      "4 Nights Accommodation in Luxury Overwater Villa",
      "Daily Breakfast, Lunch & Dinner (Full Board)",
      "Round-Trip Speedboat Airport Transfers",
      "Snorkeling Gear Rental & Sunset Dolphin Cruise",
      "Free Visa on Arrival at Malé Airport",
    ],
    exclusions: ["Personal motorized water sports (jet ski, scuba diving)."],
    equipment: [
      { category: "Resortwear", items: ["Flowy beach dresses, linen shirts, swimsuits", "Flip-flops & sunglasses"] },
      { category: "Gear", items: ["Waterproof phone case", "Reef-safe SPF 50+ sunscreen"] },
    ],
    hotelInfo: {
      name: "Adaaran Prestige Water Villas / Sun Siyam Olhuveli Maldives",
      rating: "5-Star Island Resort",
      checkIn: "14:00 PM",
      checkOut: "12:00 PM",
      roomType: "Water Villa with Lagoon Access",
      amenities: ["Private Sundeck", "Infinity Pool", "Ocean Spa", "Free Water Sports"],
    },
    transportation: { flightInfo: "Flights via SriLankan Airlines, Qatar Airways, or FlyDubai.", transfers: "Luxury speedboat or seaplane.", driver: "Resort island host." },
    importantNotes: ["30-Day Tourist Visa on Arrival issued FREE for Nepalese passport holders!"],
    faqs: [{ q: "Do Nepalese citizens need a visa before traveling to Maldives?", a: "No! Maldives provides a FREE 30-day Visa on Arrival for all Nepalese travelers." }],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pkg = PACKAGES_DICTIONARY[id] || PACKAGES_DICTIONARY["dubai-6d"];

  return {
    title: `${pkg.title} (${pkg.duration}) | Skywalks Holidays`,
    description: pkg.overview,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // 1. Try static dictionary lookup
  let pkg = PACKAGES_DICTIONARY[id];

  // 2. Fallback lookup by numeric ID if passed as '1', '2', '3', etc.
  if (!pkg) {
    if (id === "1") pkg = PACKAGES_DICTIONARY["dubai-6d"];
    if (id === "2") pkg = PACKAGES_DICTIONARY["thailand-5d"];
    if (id === "3") pkg = PACKAGES_DICTIONARY["bali-7d"];
    if (id === "4") pkg = PACKAGES_DICTIONARY["europe-11d"];
    if (id === "5") pkg = PACKAGES_DICTIONARY["singapore-6d"];
  }

  // Fallback to Dubai default package if ID isn't matched
  if (!pkg) {
    pkg = PACKAGES_DICTIONARY["dubai-6d"];
  }

  return (
    <div className="bg-[#f8fafc] pb-20 font-sans">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-[#e2e8f0] py-3 text-xs text-[#64748b]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#0ea5e9]">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/services/packages/international" className="hover:text-[#0ea5e9]">
            Holiday Packages
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0a1628] font-semibold truncate">{pkg.title}</span>
        </div>
      </div>

      <div className="container-custom pt-8">
        {/* Top Header Information */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1 rounded-full uppercase tracking-wider">
                International Package
              </span>
              <span className="flex items-center gap-1 text-xs text-amber-500 font-bold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                <Star size={12} className="fill-amber-400" />
                {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] leading-tight">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#64748b] mt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={14} className="text-[#0ea5e9]" />
                {pkg.destination}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1]" />
              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-[#0ea5e9]" />
                {pkg.duration}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div>
              <span className="text-xs text-[#94a3b8] uppercase font-semibold block text-left md:text-right">Starting From</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#0a1628]">
                  NPR {pkg.price.toLocaleString("en-US")}
                </span>
                <span className="text-sm text-[#94a3b8] line-through">
                  NPR {pkg.originalPrice.toLocaleString("en-US")}
                </span>
              </div>
              <span className="text-xs text-[#64748b] block text-left md:text-right">per person (all taxes included)</span>
            </div>
            <div className="mt-1">
              <PackagePdfButton pkg={pkg} />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Quick-Jump Sub-Navigation Bar */}
      <PackageSubNav pkg={pkg} />

      <div className="container-custom">
        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: All 6 Required Detail Modules */}
          <div className="lg:col-span-2 space-y-12 text-left">
            
            {/* 1. Package Introduction & Overview Section */}
            <section id="overview" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4 flex items-center gap-2">
                <FileText className="text-[#0ea5e9]" size={24} />
                Package Introduction &amp; Overview
              </h2>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-6">
                {pkg.overview}
              </p>

              <h3 className="font-bold text-[#0a1628] text-sm uppercase tracking-wider mb-3">
                Key Trip Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#334155] bg-[#f8fafc] p-3 rounded-2xl border border-[#e2e8f0]">
                    <ShieldCheck size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Photo Gallery Section */}
            <section id="gallery">
              <PackageGallerySection gallery={pkg.gallery} packageTitle={pkg.title} />
            </section>

            {/* 3. Outline Itinerary Section */}
            <section id="outline-itinerary" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#0a1628] flex items-center gap-2">
                    <Calendar className="text-[#0ea5e9]" size={24} />
                    Outline Itinerary
                  </h2>
                  <p className="text-xs text-[#64748b] mt-1">
                    At-a-glance high level summary of your travel program.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0a1628] text-white uppercase text-[11px] font-bold tracking-wider">
                      <th className="py-3 px-4 w-24">Day</th>
                      <th className="py-3 px-4">Title &amp; Destination</th>
                      <th className="py-3 px-4">Key Activity Summary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0] bg-white">
                    {pkg.outlineItinerary?.map((out: any, idx: number) => (
                      <tr key={idx} className="hover:bg-[#f8fafc] transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-[#0ea5e9] whitespace-nowrap">
                          {out.day}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#0a1628]">
                          {out.title}
                        </td>
                        <td className="py-3.5 px-4 text-[#475569]">
                          {out.activity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Detailed Day-by-Day Itinerary Section */}
            <section id="detailed-itinerary" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-6 flex items-center gap-2">
                <Clock className="text-[#0ea5e9]" size={24} />
                Detailed Day-by-Day Itinerary
              </h2>

              <div className="relative border-l-2 border-[#0ea5e9]/30 pl-6 sm:pl-8 space-y-8 ml-3">
                {pkg.itinerary.map((dayItem: any, idx: number) => (
                  <div key={idx} className="relative">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-[#0a1628] text-white font-extrabold text-xs flex items-center justify-center border-4 border-white shadow-md">
                      {idx + 1}
                    </div>

                    <div className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e2e8f0]">
                      <span className="inline-block text-xs font-bold text-[#0ea5e9] bg-[#e0f2fe] px-3 py-1 rounded-full mb-2">
                        {dayItem.day}
                      </span>
                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">{dayItem.title}</h3>
                      <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                        {dayItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions Card */}
            <section className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={24} />
                What&apos;s Included In This Package
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.inclusions.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] bg-emerald-50/60 border border-emerald-200/70 p-3.5 rounded-2xl">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Excluding Cost / Exclusions Section */}
            <section id="excluding-cost" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4 flex items-center gap-2">
                <XCircle className="text-rose-500" size={24} />
                Excluding Cost (What&apos;s Not Included)
              </h2>
              <p className="text-xs text-[#64748b] mb-6">
                The following costs are excluded from the base package fare and remain the traveler&apos;s responsibility:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.exclusions.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] bg-rose-50/60 border border-rose-200/70 p-3.5 rounded-2xl">
                    <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Equipment & Packing List / Travel Essentials Section */}
            <section id="equipment" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-[#0a1628] flex items-center gap-2">
                  <Briefcase className="text-[#0ea5e9]" size={24} />
                  Equipment &amp; Travel Essentials Checklist
                </h2>
                <p className="text-xs text-[#64748b] mt-1">
                  Recommended clothing, travel gear, footwear, and documents to pack for this trip.
                </p>
              </div>

              <div className="space-y-6">
                {pkg.equipment?.map((eqCat: any, idx: number) => (
                  <div key={idx} className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e2e8f0]">
                    <h3 className="text-sm font-extrabold text-[#0a1628] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Luggage size={16} className="text-[#0ea5e9]" />
                      {eqCat.category}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155]">
                      {eqCat.items.map((itemStr: string, iIdx: number) => (
                        <li key={iIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#e2e8f0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-2 shrink-0" />
                          <span>{itemStr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotel & Transport Info */}
            <section id="hotel-info" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-6 flex items-center gap-2">
                <Hotel className="text-[#0ea5e9]" size={24} />
                Hotel &amp; Accommodation Details
              </h2>

              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-[#e2e8f0]">
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1628]">{pkg.hotelInfo.name}</h3>
                    <p className="text-xs text-[#0ea5e9] font-semibold mt-0.5">{pkg.hotelInfo.rating}</p>
                  </div>
                  <span className="text-xs bg-[#0a1628] text-white px-3 py-1 rounded-full font-bold">
                    {pkg.hotelInfo.roomType}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm mb-5 text-[#475569]">
                  <div>
                    <strong className="text-[#0a1628]">Standard Check-in:</strong> {pkg.hotelInfo.checkIn}
                  </div>
                  <div>
                    <strong className="text-[#0a1628]">Standard Check-out:</strong> {pkg.hotelInfo.checkOut}
                  </div>
                </div>

                <h4 className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-2">
                  Hotel Amenities:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pkg.hotelInfo.amenities.map((a: string) => (
                    <span key={a} className="text-xs bg-white text-[#334155] border border-[#e2e8f0] px-3 py-1 rounded-full font-medium">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-6 flex items-center gap-2">
                <HelpCircle className="text-[#0ea5e9]" size={24} />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {pkg.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="p-5 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                    <h3 className="font-bold text-[#0a1628] text-sm md:text-base mb-2">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs md:text-sm text-[#64748b] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Inquiry Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <PackageInquirySidebar
                packageTitle={pkg.title}
                packagePrice={pkg.price}
                destination={pkg.destination}
                duration={pkg.duration}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
