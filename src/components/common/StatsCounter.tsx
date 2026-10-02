import React from "react";
import { STATS } from "@/lib/constants";
import { Award, Clock, Globe, Users, Sparkles } from "lucide-react";

export default function StatsCounter() {
  return (
    <section className="relative bg-[#070e1b] py-16 md:py-20 overflow-hidden border-y border-white/10">
      {/* Background radial glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, index) => {
            const IconComponent = stat.icon || Sparkles;
            const formattedValue =
              typeof stat.value === "number"
                ? stat.value.toLocaleString("en-US")
                : stat.value;

            return (
              <div
                key={index}
                className="group relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sky-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10 backdrop-blur-md overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute -top-20 -right-20 w-36 h-36 bg-gradient-to-br from-sky-400/20 to-blue-600/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-sky-500/10">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <Sparkles className="w-4 h-4 text-sky-400/40 group-hover:text-sky-400 transition-colors" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1 flex items-baseline gap-0.5">
                    <span>{formattedValue}</span>
                    <span className="text-sky-400 font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

