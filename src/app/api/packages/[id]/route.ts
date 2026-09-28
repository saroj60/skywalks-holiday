import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const pkg = await prisma.holidayPackage.findUnique({
      where: { id: Number(id) },
    });

    if (!pkg) {
      return NextResponse.json({ error: "Package not found." }, { status: 404 });
    }

    const parsedPackage = {
      ...pkg,
      inclusions: JSON.parse(pkg.inclusions || "[]"),
      exclusions: JSON.parse(pkg.exclusions || "[]"),
      itinerary: JSON.parse(pkg.itinerary || "[]"),
      gallery: JSON.parse(pkg.gallery || "[]"),
    };

    return NextResponse.json({ success: true, package: parsedPackage });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch package." }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = getAdminUserFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await req.json();
    const updateData: any = {};

    if (body.title) updateData.title = body.title;
    if (body.destination) updateData.destination = body.destination;
    if (body.price) updateData.price = Number(body.price);
    if (body.originalPrice) updateData.originalPrice = Number(body.originalPrice);
    if (body.duration) updateData.duration = body.duration;
    if (body.category) updateData.category = body.category;
    if (body.badge !== undefined) updateData.badge = body.badge;
    if (body.featured !== undefined) updateData.featured = Boolean(body.featured);
    if (body.status) updateData.status = body.status;

    if (body.inclusions) {
      updateData.inclusions = typeof body.inclusions === "string" ? body.inclusions : JSON.stringify(body.inclusions);
    }
    if (body.exclusions) {
      updateData.exclusions = typeof body.exclusions === "string" ? body.exclusions : JSON.stringify(body.exclusions);
    }
    if (body.itinerary) {
      updateData.itinerary = typeof body.itinerary === "string" ? body.itinerary : JSON.stringify(body.itinerary);
    }

    const updatedPackage = await prisma.holidayPackage.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return NextResponse.json({ success: true, package: updatedPackage });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update package." }, { status: 500 });
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

  const { id } = await params;

  try {
    await prisma.holidayPackage.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true, message: "Package deleted." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete package." }, { status: 500 });
  }
}
