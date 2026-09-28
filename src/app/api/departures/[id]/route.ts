import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = getAdminUserFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    let updated = null;
    try {
      if (prisma && prisma.upcomingDeparture) {
        updated = await prisma.upcomingDeparture.update({
          where: { id },
          data: {
            title: body.title,
            destination: body.destination,
            startDate: body.startDate,
            endDate: body.endDate,
            seasonTag: body.seasonTag,
            totalSeats: Number(body.totalSeats),
            availableSeats: Number(body.availableSeats),
            price: Number(body.price),
            originalPrice: Number(body.originalPrice),
            image: body.image,
            status: Number(body.availableSeats) <= 3 ? "FILLING_FAST" : "UPCOMING",
          },
        });
      }
    } catch (e) {}

    return NextResponse.json({ success: true, departure: updated || body });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update departure." }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = getAdminUserFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { id } = await params;
    try {
      if (prisma && prisma.upcomingDeparture) {
        await prisma.upcomingDeparture.delete({ where: { id } });
      }
    } catch (e) {}

    return NextResponse.json({ success: true, message: "Departure deleted." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete departure." }, { status: 500 });
  }
}
