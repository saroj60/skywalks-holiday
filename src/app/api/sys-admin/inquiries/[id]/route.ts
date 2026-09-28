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

  const { id } = await params;

  try {
    const { table, status, assignedStaff, notes } = await req.json();

    const updateData: any = {};
    if (status) updateData.status = status;
    if (assignedStaff !== undefined) updateData.assignedStaff = assignedStaff;
    if (notes !== undefined) updateData.notes = notes;

    let updatedRecord: any = null;

    if (table === "flight") {
      updatedRecord = await prisma.flightInquiry.update({ where: { id }, data: updateData });
    } else if (table === "hotel") {
      updatedRecord = await prisma.hotelInquiry.update({ where: { id }, data: updateData });
    } else if (table === "package") {
      updatedRecord = await prisma.holidayPackageInquiry.update({ where: { id }, data: updateData });
    } else if (table === "visa") {
      updatedRecord = await prisma.visaApplication.update({ where: { id }, data: updateData });
    } else if (table === "bus") {
      updatedRecord = await prisma.busInquiry.update({ where: { id }, data: updateData });
    } else if (table === "contact") {
      updatedRecord = await prisma.contactMessage.update({ where: { id }, data: updateData });
    }

    return NextResponse.json({ success: true, updatedRecord });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update lead record." }, { status: 500 });
  }
}
