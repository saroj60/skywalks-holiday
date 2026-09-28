import Metadata from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Media Gallery | Skywalk Holidays — Photos & Travel Moments",
  description:
    "Explore photos of international destinations, happy Nepalese travelers, luxury hotels, and unforgettable tour moments with Skywalk Holidays.",
  openGraph: {
    title: "Media Gallery | Skywalk Holidays",
    description:
      "Explore photos of international destinations, happy Nepalese travelers, luxury hotels, and unforgettable tour moments with Skywalk Holidays.",
    url: "https://skywalkholidays.com/gallery",
    siteName: "Skywalk Holidays",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Skywalk Holidays Media Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
