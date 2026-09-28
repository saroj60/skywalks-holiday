import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const rateCheck = checkRateLimit(req, 10, 60000);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many application requests. Please try again in 1 minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { fullName, nationality, destinationCountry, visaType, travelPurpose, whatsappNumber, email } = body;

    if (!fullName || !destinationCountry || !visaType || !whatsappNumber) {
      return NextResponse.json(
        { error: "Missing required visa application fields." },
        { status: 400 }
      );
    }

    const application = await prisma.visaApplication.create({
      data: {
        fullName,
        nationality: nationality || "Nepalese",
        destinationCountry,
        visaType,
        travelPurpose: travelPurpose || "Tourism",
        whatsappNumber,
        email: email || "",
        status: "NEW",
      },
    });

    logger.info("New visa application saved", { id: application.id, fullName });

    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (error) {
    logger.error("Error creating visa application", error);
    return NextResponse.json({ error: "Failed to submit visa application." }, { status: 500 });
  }
}
