import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/auth";

export const SAMPLE_DEPARTURES = [
  {
    id: "dep-001",
    title: "Dubai & Desert Safari — Dashain Special",
    destination: "Dubai & Abu Dhabi",
    startDate: "2026-10-12",
    endDate: "2026-10-18",
    seasonTag: "🪔 Dashain Special",
    totalSeats: 20,
    availableSeats: 3,
    price: 62000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    status: "FILLING_FAST",
  },
  {
    id: "dep-002",
    title: "Tropical Bali & Ubud Villa Escape",
    destination: "Bali, Indonesia",
    startDate: "2026-10-25",
    endDate: "2026-11-01",
    seasonTag: "🌺 Autumn Romance",
    totalSeats: 16,
    availableSeats: 5,
    price: 52000,
    originalPrice: 64000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    status: "UPCOMING",
  },
  {
    id: "dep-003",
    title: "Thailand Phuket & Bangkok Beach Tour",
    destination: "Thailand",
    startDate: "2026-11-04",
    endDate: "2026-11-09",
    seasonTag: "🪔 Tihar Holiday",
    totalSeats: 24,
    availableSeats: 8,
    price: 38000,
    originalPrice: 46000,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    status: "UPCOMING",
  },
  {
    id: "dep-004",
    title: "Grand Europe 4-Country Gala Departure",
    destination: "Paris, Swiss Alps, Venice & Rome",
    startDate: "2026-12-24",
    endDate: "2027-01-04",
    seasonTag: "🎆 New Year 2027",
    totalSeats: 15,
    availableSeats: 2,
    price: 195000,
    originalPrice: 230000,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    status: "FILLING_FAST",
  },
];

export async function GET(req: NextRequest) {
  try {
    let departures: any[] = [];
    try {
      departures = await prisma.upcomingDeparture.findMany({
        orderBy: { startDate: "asc" },
      });
    } catch (e) {}

    if (!departures || departures.length === 0) {
      departures = SAMPLE_DEPARTURES;
    }

    return NextResponse.json({ success: true, departures });
  } catch (error) {
    return NextResponse.json({ success: true, departures: SAMPLE_DEPARTURES });
  }
}

export async function POST(req: NextRequest) {
  const admin = getAdminUserFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, destination, startDate, endDate, seasonTag, totalSeats, availableSeats, price, originalPrice, image } = body;

    const departure = await prisma.upcomingDeparture.create({
      data: {
        title,
        destination,
        startDate,
        endDate: endDate || startDate,
        seasonTag: seasonTag || "Upcoming Departure",
        totalSeats: Number(totalSeats || 20),
        availableSeats: Number(availableSeats || totalSeats || 20),
        price: Number(price),
        originalPrice: Number(originalPrice || price * 1.2),
        image: image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        status: Number(availableSeats) <= 3 ? "FILLING_FAST" : "UPCOMING",
      },
    });

    return NextResponse.json({ success: true, departure }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to schedule departure." }, { status: 500 });
  }
}
