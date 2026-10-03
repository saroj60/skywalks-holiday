"use client";

import React from "react";
import { FileDown, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackagePdfButtonProps {
  pkg: any;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export default function PackagePdfButton({
  pkg,
  variant = "primary",
  className = "",
  size = "default",
}: PackagePdfButtonProps) {
  const handleDownloadPdf = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Pop-up blocker active! Please allow pop-ups for this site to download the PDF itinerary.");
      return;
    }

    const highlightsList = pkg.highlights
      ? pkg.highlights.map((h: string) => `<li>${h}</li>`).join("")
      : "";

    const outlineRows = pkg.outlineItinerary
      ? pkg.outlineItinerary
          .map(
            (item: any) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0ea5e9;">${item.day}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0a1628;">${item.title}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${item.activity || ""}</td>
          </tr>
        `
          )
          .join("")
      : "";

    const detailedDays = pkg.itinerary
      ? pkg.itinerary
          .map(
            (day: any) => `
          <div style="margin-bottom: 16px; page-break-inside: avoid; background-color: #f8fafc; padding: 14px 18px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
              <span style="font-weight: 800; font-size: 13px; color: #0ea5e9; background-color: #e0f2fe; padding: 3px 10px; border-radius: 20px;">${day.day}</span>
              <span style="font-weight: 700; font-size: 14px; color: #0a1628;">${day.title}</span>
            </div>
            <p style="margin: 6px 0 0 0; font-size: 12px; color: #475569; line-height: 1.6;">${day.description || ""}</p>
          </div>
        `
          )
          .join("")
      : "";

    const inclusionsList = pkg.inclusions
      ? pkg.inclusions.map((inc: string) => `<li style="margin-bottom: 6px; color: #166534;">✔ ${inc}</li>`).join("")
      : "";

    const exclusionsList = pkg.exclusions
      ? pkg.exclusions.map((exc: string) => `<li style="margin-bottom: 6px; color: #991b1b;">✘ ${exc}</li>`).join("")
      : "";

    const equipmentContent = pkg.equipment
      ? pkg.equipment
          .map(
            (eq: any) => `
          <div style="margin-bottom: 10px;">
            <strong style="color: #0a1628; font-size: 12px;">${eq.category}:</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; color: #475569;">
              ${(eq.items || []).map((it: string) => `<li>${it}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")
      : "";

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${pkg.title} - Skywalk Holidays Official Itinerary</title>
        <style>
          @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .header-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #0ea5e9;
            padding-bottom: 14px;
            margin-bottom: 20px;
          }
          .brand-logo {
            font-size: 24px;
            font-weight: 900;
            color: #0a1628;
            letter-spacing: -0.5px;
          }
          .brand-accent {
            color: #0ea5e9;
          }
          .company-details {
            text-align: right;
            font-size: 11px;
            color: #64748b;
            line-height: 1.4;
          }
          .package-banner {
            background: linear-gradient(135deg, #0a1628 0%, #1e293b 100%);
            color: #ffffff;
            padding: 20px;
            border-radius: 16px;
            margin-bottom: 24px;
          }
          .package-title {
            font-size: 22px;
            font-weight: 800;
            margin: 0 0 8px 0;
            color: #ffffff;
          }
          .meta-grid {
            display: flex;
            gap: 16px;
            font-size: 12px;
            color: #94a3b8;
          }
          .meta-item {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .price-badge {
            margin-top: 12px;
            font-size: 18px;
            font-weight: 800;
            color: #38bdf8;
          }
          .section-title {
            font-size: 15px;
            font-weight: 800;
            color: #0a1628;
            border-left: 4px solid #0ea5e9;
            padding-left: 10px;
            margin: 24px 0 12px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .overview-text {
            font-size: 12px;
            line-height: 1.7;
            color: #334155;
            margin-bottom: 16px;
          }
          .highlights-box {
            background-color: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 12px;
            padding: 14px 18px;
            margin-bottom: 20px;
          }
          .highlights-box ul {
            margin: 0;
            padding-left: 18px;
            font-size: 12px;
            color: #0369a1;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
            margin-bottom: 20px;
          }
          th {
            background-color: #0a1628;
            color: #ffffff;
            text-align: left;
            padding: 8px 12px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 10px;
          }
          .inc-exc-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 20px;
            page-break-inside: avoid;
          }
          .box-inc {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 14px;
            border-radius: 12px;
          }
          .box-exc {
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            padding: 14px;
            border-radius: 12px;
          }
          .box-title {
            font-weight: 800;
            font-size: 12px;
            margin-bottom: 8px;
            text-transform: uppercase;
          }
          .footer-note {
            margin-top: 30px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 10px;
            color: #94a3b8;
          }
          @media print {
            .no-print {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 16px; right: 16px; z-index: 9999; display: flex; gap: 8px;">
          <button onclick="window.print()" style="background-color: #0ea5e9; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px; shadow: 0 4px 12px rgba(0,0,0,0.15);">
            🖨️ Print / Save as PDF
          </button>
          <button onclick="window.close()" style="background-color: #64748b; color: white; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px;">
            Close
          </button>
        </div>

        <div class="header-bar">
          <div>
            <div class="brand-logo">SKYWALK<span class="brand-accent">HOLIDAYS</span></div>
            <div style="font-size: 11px; font-weight: 600; color: #64748b; margin-top: 2px;">Your Trusted Travel Partner in Nepal</div>
          </div>
          <div class="company-details">
            <strong>Skywalk Holidays Pvt. Ltd.</strong><br />
            Kathmandu, Nepal<br />
            📞 Phone: +977-9800000000 | ✉️ info@skywalkholidays.com<br />
            🌐 www.skywalkholidays.com
          </div>
        </div>

        <div class="package-banner">
          <div class="package-title">${pkg.title}</div>
          <div class="meta-grid">
            <div class="meta-item">📍 <strong>Destination:</strong> ${pkg.destination}</div>
            <div class="meta-item">⏱️ <strong>Duration:</strong> ${pkg.duration}</div>
            <div class="meta-item">⭐ <strong>Rating:</strong> ${pkg.rating} (${pkg.reviewsCount || 100}+ reviews)</div>
          </div>
          <div class="price-badge">
            NPR ${(pkg.price || 0).toLocaleString("en-US")} <span style="font-size: 11px; font-weight: normal; color: #cbd5e1;">per person (All Taxes Included)</span>
          </div>
        </div>

        <div class="section-title">Package Overview</div>
        <div class="overview-text">${pkg.overview}</div>

        ${
          highlightsList
            ? `
          <div class="highlights-box">
            <div style="font-weight: 800; font-size: 12px; margin-bottom: 6px; color: #0284c7; text-transform: uppercase;">Key Trip Highlights</div>
            <ul>${highlightsList}</ul>
          </div>
        `
            : ""
        }

        ${
          outlineRows
            ? `
          <div class="section-title">Outline Itinerary</div>
          <table>
            <thead>
              <tr>
                <th style="width: 80px;">Day</th>
                <th>Title & Program</th>
                <th>Activity Summary</th>
              </tr>
            </thead>
            <tbody>
              ${outlineRows}
            </tbody>
          </table>
        `
            : ""
        }

        ${
          detailedDays
            ? `
          <div class="section-title">Detailed Day-by-Day Itinerary</div>
          ${detailedDays}
        `
            : ""
        }

        <div class="inc-exc-grid">
          ${
            inclusionsList
              ? `
            <div class="box-inc">
              <div class="box-title" style="color: #15803d;">Included in Package</div>
              <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 11px; line-height: 1.5;">${inclusionsList}</ul>
            </div>
          `
              : ""
          }
          ${
            exclusionsList
              ? `
            <div class="box-exc">
              <div class="box-title" style="color: #b91c1c;">Excluded / Extra Costs</div>
              <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 11px; line-height: 1.5;">${exclusionsList}</ul>
            </div>
          `
              : ""
          }
        </div>

        ${
          equipmentContent
            ? `
          <div class="section-title">Essential Packing & Equipment Checklist</div>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; margin-bottom: 20px;">
            ${equipmentContent}
          </div>
        `
            : ""
        }

        ${
          pkg.hotelInfo
            ? `
          <div class="section-title">Accommodation & Hotel Details</div>
          <div style="font-size: 11px; color: #334155; line-height: 1.6; margin-bottom: 20px; background-color: #f8fafc; padding: 12px; border-radius: 8px;">
            <strong>Hotel Name:</strong> ${pkg.hotelInfo.name || "4-Star Deluxe Hotels"}<br />
            <strong>Category:</strong> ${pkg.hotelInfo.rating || "4-Star"}<br />
            <strong>Room Type:</strong> ${pkg.hotelInfo.roomType || "Standard Deluxe"}<br />
            <strong>Check-In / Out:</strong> ${pkg.hotelInfo.checkIn || "14:00"} / ${pkg.hotelInfo.checkOut || "12:00"}
          </div>
        `
            : ""
        }

        <div class="footer-note">
          <strong>Skywalk Holidays Pvt. Ltd.</strong> • Official Tour Package Itinerary • Generated on ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}<br />
          For inquiries or custom bookings, call +977-9800000000 or visit www.skywalkholidays.com
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 600);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  if (variant === "outline") {
    return (
      <Button
        onClick={handleDownloadPdf}
        variant="outline"
        size={size}
        className={`border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white font-bold gap-2 shadow-sm ${className}`}
      >
        <FileDown size={16} />
        <span>Download PDF</span>
      </Button>
    );
  }

  if (variant === "secondary") {
    return (
      <Button
        onClick={handleDownloadPdf}
        size={size}
        className={`bg-[#0a1628] hover:bg-[#1e293b] text-white font-bold gap-2 shadow-md ${className}`}
      >
        <FileDown size={16} />
        <span>Download PDF</span>
      </Button>
    );
  }

  return (
    <Button
      onClick={handleDownloadPdf}
      size={size}
      className={`bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-extrabold gap-2 shadow-lg shadow-sky-500/25 ${className}`}
    >
      <FileDown size={18} />
      <span>Download PDF Itinerary</span>
    </Button>
  );
}
