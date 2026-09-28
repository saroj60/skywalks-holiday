import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const rateCheck = checkRateLimit(req, 10, 60000);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many inquiry requests. Please try again in 1 minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { tripType, fromCity, toCity, departureDate, returnDate, passengers, cabinClass, customerName, whatsappNumber } = body;

    if (!fromCity || !toCity || !departureDate || !customerName || !whatsappNumber) {
      return NextResponse.json(
        { error: "Missing required flight inquiry fields." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.flightInquiry.create({
      data: {
        tripType: tripType || "one-way",
        fromCity,
        toCity,
        departureDate,
        returnDate: returnDate || null,
        passengers: passengers || "1 Adult",
        cabinClass: cabinClass || "Economy",
        customerName,
        whatsappNumber,
        status: "NEW",
      },
    });

    // Sync or create Customer profile
    await prisma.customer.upsert({
      where: { id: whatsappNumber },
      update: { fullName: customerName, phone: whatsappNumber, whatsapp: whatsappNumber },
      create: { id: whatsappNumber, fullName: customerName, phone: whatsappNumber, whatsapp: whatsappNumber },
    }).catch(() => null);

    logger.info("New flight inquiry saved", { id: inquiry.id, customerName });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    logger.error("Error creating flight inquiry", error);
    return NextResponse.json({ error: "Failed to submit flight inquiry." }, { status: 500 });
  }
}
