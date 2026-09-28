import Metadata from "next";
import VlogsClient from "@/components/vlogs/VlogsClient";

export const metadata = {
  title: "Travel Vlogs & Video Guides | Skywalk Holidays",
  description:
    "Watch travel vlogs, destination walkthroughs, customer review videos, and expert travel tips for your next international holiday from Nepal.",
  openGraph: {
    title: "Travel Vlogs & Video Guides | Skywalk Holidays",
    description:
      "Watch travel vlogs, destination walkthroughs, customer review videos, and expert travel tips for your next international holiday from Nepal.",
    url: "https://skywalkholidays.com/vlogs",
    siteName: "Skywalk Holidays",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Skywalk Holidays Travel Vlogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function VlogsPage() {
  return <VlogsClient />;
}
