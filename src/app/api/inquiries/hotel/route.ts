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
    const { destination, checkIn, checkOut, guests, rooms, customerName, whatsappNumber } = body;

    if (!destination || !checkIn || !customerName || !whatsappNumber) {
      return NextResponse.json(
        { error: "Missing required hotel inquiry fields." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.hotelInquiry.create({
      data: {
        destination,
        checkIn,
        checkOut: checkOut || null,
        guests: guests || "2 Guests",
        rooms: rooms || "1 Room",
        customerName,
        whatsappNumber,
        status: "NEW",
      },
    });

    logger.info("New hotel inquiry saved", { id: inquiry.id, customerName });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    logger.error("Error creating hotel inquiry", error);
    return NextResponse.json({ error: "Failed to submit hotel inquiry." }, { status: 500 });
  }
}
