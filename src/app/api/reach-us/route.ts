import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const rateCheck = checkRateLimit(req, 10, 60000);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again in 1 minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, serviceInterested, destination, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required contact form fields." },
        { status: 400 }
      );
    }

    const contactMsg = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        serviceInterested: serviceInterested || "General Travel Inquiry",
        destination: destination || null,
        message,
        status: "NEW",
      },
    });

    logger.info("New contact message saved", { id: contactMsg.id, name });

    return NextResponse.json({ success: true, contactMsg }, { status: 201 });
  } catch (error) {
    logger.error("Error creating contact message", error);
    return NextResponse.json({ error: "Failed to submit contact message." }, { status: 500 });
  }
}
