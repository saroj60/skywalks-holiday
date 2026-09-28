import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const admin = getAdminUserFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const flights = await prisma.flightInquiry.findMany();
    const hotels = await prisma.hotelInquiry.findMany();
    const packages = await prisma.holidayPackageInquiry.findMany();
    const visas = await prisma.visaApplication.findMany();
    const buses = await prisma.busInquiry.findMany();
    const contacts = await prisma.contactMessage.findMany();

    // Map all inquiries to unified CRM lead format
    const leads = [
      ...flights.map((f: any) => ({
        id: `FL-${f.id.slice(0, 6)}`,
        rawId: f.id,
        table: "flight",
        customerName: f.customerName,
        serviceType: "Flight Ticket",
        destination: `${f.fromCity} → ${f.toCity}`,
        travelDate: f.departureDate,
        whatsappNumber: f.whatsappNumber,
        status: f.status,
        createdDate: f.createdAt.toISOString().split("T")[0],
        assignedStaff: f.assignedStaff || "Unassigned",
        notes: f.notes || "Trip: " + f.tripType + ", Class: " + f.cabinClass,
      })),
      ...hotels.map((h: any) => ({
        id: `HT-${h.id.slice(0, 6)}`,
        rawId: h.id,
        table: "hotel",
        customerName: h.customerName,
        serviceType: "Hotel Booking",
        destination: h.destination,
        travelDate: h.checkIn,
        whatsappNumber: h.whatsappNumber,
        status: h.status,
        createdDate: h.createdAt.toISOString().split("T")[0],
        assignedStaff: h.assignedStaff || "Unassigned",
        notes: h.notes || "Guests: " + h.guests + ", Rooms: " + h.rooms,
      })),
      ...packages.map((p: any) => ({
        id: `PKG-${p.id.slice(0, 6)}`,
        rawId: p.id,
        table: "package",
        customerName: p.customerName,
        serviceType: "Holiday Package",
        destination: p.destination,
        travelDate: p.travelDate,
        whatsappNumber: p.whatsappNumber,
        status: p.status,
        createdDate: p.createdAt.toISOString().split("T")[0],
        assignedStaff: p.assignedStaff || "Unassigned",
        notes: p.notes || "Package: " + p.packageName,
      })),
      ...visas.map((v: any) => ({
        id: `VISA-${v.id.slice(0, 6)}`,
        rawId: v.id,
        table: "visa",
        customerName: v.fullName,
        serviceType: "Visa Assistance",
        destination: v.destinationCountry,
        travelDate: v.travelPurpose,
        whatsappNumber: v.whatsappNumber,
        status: v.status,
        createdDate: v.createdAt.toISOString().split("T")[0],
        assignedStaff: v.assignedStaff || "Unassigned",
        notes: v.notes || "Visa Type: " + v.visaType + ", Email: " + v.email,
      })),
      ...buses.map((b: any) => ({
        id: `BUS-${b.id.slice(0, 6)}`,
        rawId: b.id,
        table: "bus",
        customerName: b.customerName,
        serviceType: "Bus Booking",
        destination: `${b.departureCity} → ${b.destinationCity}`,
        travelDate: b.travelDate,
        whatsappNumber: b.phone,
        status: b.status,
        createdDate: b.createdAt.toISOString().split("T")[0],
        assignedStaff: b.assignedStaff || "Unassigned",
        notes: b.notes || "Passengers: " + b.passengers,
      })),
      ...contacts.map((c: any) => ({
        id: `MSG-${c.id.slice(0, 6)}`,
        rawId: c.id,
        table: "contact",
        customerName: c.name,
        serviceType: c.serviceInterested || "Contact Inquiry",
        destination: c.destination || "General Inquiry",
        travelDate: "Flexible",
        whatsappNumber: c.phone,
        status: c.status,
        createdDate: c.createdAt.toISOString().split("T")[0],
        assignedStaff: c.assignedStaff || "Unassigned",
        notes: c.notes || c.message,
      })),
    ].sort((a, b) => (a.createdDate < b.createdDate ? 1 : -1));

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch CRM leads." }, { status: 500 });
  }
}
