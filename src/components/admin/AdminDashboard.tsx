"use client";

import React, { useState, useEffect } from "react";
import PackageManager from "./PackageManager";
import DepartureManager from "./DepartureManager";
import FlightManager from "./FlightManager";
import HotelManager from "./HotelManager";
import GalleryManager from "./GalleryManager";
import {
  Package,
  RefreshCw,
  Lock,
  LogOut,
  KeyRound,
  ShieldAlert,
  Flame,
  Plane,
  Hotel,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("skywalk_admin_logged") === "true";
    }
    return false;
  });
  
  const [loginEmail, setLoginEmail] = useState("admin@skywalkholidays.com");
  const [loginPassword, setLoginPassword] = useState("admin123");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<"packages" | "departures" | "flights" | "hotels" | "gallery">("packages");

  // Verify auth session background verification
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("skywalk_admin_logged") === "true") {
      setIsAuthenticated(true);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch("/api/sys-admin/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            if (typeof window !== "undefined") {
              localStorage.setItem("skywalk_admin_logged", "true");
            }
            setIsAuthenticated(true);
            return;
          }
        }
      } catch (err) {}

      const fallback = typeof window !== "undefined" ? localStorage.getItem("skywalk_admin_logged") : null;
      setIsAuthenticated(fallback === "true");
    };

    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/sys-admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("skywalk_admin_logged", "true");
        }
        setIsAuthenticated(true);
      } else if (loginEmail.trim() === "admin@skywalkholidays.com" && loginPassword.trim() === "admin123") {
        if (typeof window !== "undefined") {
          localStorage.setItem("skywalk_admin_logged", "true");
        }
        setIsAuthenticated(true);
      } else {
        setLoginError(data.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      if (loginEmail.trim() === "admin@skywalkholidays.com" && loginPassword.trim() === "admin123") {
        if (typeof window !== "undefined") {
          localStorage.setItem("skywalk_admin_logged", "true");
        }
        setIsAuthenticated(true);
      } else {
        setLoginError("Server error. Please check server status.");
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("skywalk_admin_logged");
    }
    document.cookie = "skywalk_admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
  };

  // 1. Admin Login Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-c from-sky-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/40 shadow-2xl max-w-md w-full relative z-10 text-left">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#f97316] flex items-center justify-center font-bold text-white text-xl shadow-xl mx-auto mb-4">
              <Lock size={26} />
            </div>
            <h1 className="text-2xl font-extrabold text-[#0a1628]">Admin Portal Login</h1>
            <p className="text-xs text-[#64748b] mt-1">
              Skywalk Holidays Control Center &amp; Inventory Management
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-xl mb-4 flex items-center gap-2 font-semibold">
              <ShieldAlert size={16} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 block">
                Admin Email Address
              </label>
              <Input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@skywalkholidays.com"
                className="bg-slate-50"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-1.5 block">
                Password
              </label>
              <Input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-slate-50"
              />
            </div>

            <Button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-[#0a1628] hover:bg-[#0ea5e9] text-white font-bold py-3 rounded-xl transition-colors shadow-lg min-h-[44px]"
            >
              {loginLoading ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <>
                  <KeyRound size={16} />
                  Login to Control Center
                </>
              )}
            </Button>
          </form>

          {/* Quick Demo Credentials Box */}
          <div className="mt-6 pt-5 border-t border-[#e2e8f0] text-center">
            <div className="bg-[#f0f9ff] p-3 rounded-xl border border-[#0ea5e9]/30 text-xs text-[#0a1628] text-left">
              <span className="font-bold block text-[#0ea5e9] mb-1">🔑 Demo Admin Credentials:</span>
              <div><strong>Email:</strong> admin@skywalkholidays.com</div>
              <div><strong>Password:</strong> admin123</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Dashboard & Content Editor
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0a1628] font-sans pb-16">
      {/* Header Bar */}
      <header className="bg-[#0a1628] text-white border-b border-[#1e293b] sticky top-0 z-40 shadow-xl">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#f97316] flex items-center justify-center font-bold text-white shadow-lg">
              SH
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">
                Skywalk Holidays — Control Center
              </h1>
              <p className="text-xs text-[#94a3b8]">
                Inventory, Flights, Hotels &amp; Departure Content Manager
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={activeTab === "packages" ? "default" : "outline-white"}
              size="sm"
              onClick={() => setActiveTab("packages")}
              className="gap-2 min-h-[40px]"
            >
              <Package size={16} />
              Holiday Packages
            </Button>

            <Button
              variant={activeTab === "departures" ? "default" : "outline-white"}
              size="sm"
              onClick={() => setActiveTab("departures")}
              className="gap-2 min-h-[40px]"
            >
              <Flame size={16} className="text-[#f97316]" />
              Upcoming Departures
            </Button>

            <Button
              variant={activeTab === "flights" ? "default" : "outline-white"}
              size="sm"
              onClick={() => setActiveTab("flights")}
              className="gap-2 min-h-[40px]"
            >
              <Plane size={16} className="text-[#0ea5e9]" />
              Flight Deals
            </Button>

            <Button
              variant={activeTab === "hotels" ? "default" : "outline-white"}
              size="sm"
              onClick={() => setActiveTab("hotels")}
              className="gap-2 min-h-[40px]"
            >
              <Hotel size={16} className="text-amber-400" />
              Hotels &amp; Stays
            </Button>

            <Button
              variant={activeTab === "gallery" ? "default" : "outline-white"}
              size="sm"
              onClick={() => setActiveTab("gallery")}
              className="gap-2 min-h-[40px]"
            >
              <Camera size={16} className="text-purple-400" />
              Photo Gallery
            </Button>

            <Button
              variant="outline-white"
              size="sm"
              onClick={handleLogout}
              className="gap-1.5 border-red-500/50 text-red-300 hover:bg-red-500 hover:text-white min-h-[40px] ml-2"
            >
              <LogOut size={14} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      {activeTab === "packages" ? (
        <PackageManager />
      ) : activeTab === "departures" ? (
        <DepartureManager />
      ) : activeTab === "flights" ? (
        <FlightManager />
      ) : activeTab === "hotels" ? (
        <HotelManager />
      ) : (
        <GalleryManager />
      )}
    </div>
  );
}
