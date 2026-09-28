import React from "react";
import { Metadata } from "next";
import AdminClientWrapper from "@/components/admin/AdminClientWrapper";

export const metadata: Metadata = {
  title: "Admin Dashboard | Skywalks Holidays Control Center",
  description: "Travel agency package inventory, flight deals, hotel stays, and departure content management portal.",
};

export default function AdminPage() {
  return <AdminClientWrapper />;
}
