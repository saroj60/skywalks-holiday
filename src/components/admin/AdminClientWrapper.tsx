"use client";

import dynamic from "next/dynamic";
import { RefreshCw } from "lucide-react";

const AdminDashboard = dynamic(
  () => import("./AdminDashboard"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center text-white">
        <RefreshCw size={36} className="animate-spin text-[#0ea5e9] mb-4" />
        <p className="text-sm font-semibold tracking-wider uppercase">Loading Control Center...</p>
      </div>
    ),
  }
);

export default function AdminClientWrapper() {
  return <AdminDashboard />;
}
