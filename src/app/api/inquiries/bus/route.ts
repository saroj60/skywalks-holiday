import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const rateCheck = checkRateLimit(req, 10, 60000);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many booking requests. Please try again in 1 minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { departureCity, destinationCity, travelDate, passengers, customerName, phone } = body;

    if (!departureCity || !destinationCity || !travelDate || !customerName || !phone) {
      return NextResponse.json(
        { error: "Missing required bus inquiry fields." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.busInquiry.create({
      data: {
        departureCity,
        destinationCity,
        travelDate,
        passengers: passengers || "1 Passenger",
        customerName,
        phone,
        status: "NEW",
      },
    });

    logger.info("New bus inquiry saved", { id: inquiry.id, customerName });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    logger.error("Error creating bus inquiry", error);
    return NextResponse.json({ error: "Failed to submit bus inquiry." }, { status: 500 });
  }
}
