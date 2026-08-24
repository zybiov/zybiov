"use client";

import { Counter } from "@/components/ui/counter";
import { Award, Package, MapPin, Users, Sparkles, Building2, Globe2 } from "lucide-react";
import { StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Award,
    value: 10,
    suffix: "+",
    labelKey: "stats.expLabel",
    subKey: "stats.expSub",
    iconBg: "bg-[#EEECFC] text-[#5B43D6] ring-1 ring-[#5B43D6]/20",
    glowColor: "rgba(91,67,214,0.15)",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    labelKey: "stats.prodLabel",
    subKey: "stats.prodSub",
    iconBg: "bg-[#EBF5FF] text-[#2B7DDC] ring-1 ring-[#2B7DDC]/20",
    glowColor: "rgba(43,125,220,0.15)",
  },
  {
    icon: Globe2,
    valueKey: "stats.covValue",
    isText: true,
    labelKey: "stats.covLabel",
    subKey: "stats.covSub",
    iconBg: "bg-[#E6F9FB] text-[#0E95A4] ring-1 ring-[#28B7C7]/20",
    glowColor: "rgba(40,183,199,0.15)",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    labelKey: "stats.partnerLabel",
    subKey: "stats.partnerSub",
    iconBg: "bg-[#F5EEFC] text-[#7C3AED] ring-1 ring-[#7C3AED]/20",
    glowColor: "rgba(124,58,237,0.15)",
  },
];

export function StatsStrip() {
  const { language, t, dir } = useLanguage();

  return (
    <section className="relative py-8 sm:py-12 lg:py-14 border-y border-[#E4E7F2]/80 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-[#5B43D6]/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-[#28B7C7]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8ECF6] shadow-[0_4px_20px_rgba(30,36,75,0.03)] hover:shadow-[0_12px_36px_rgba(91,67,214,0.09)] hover:border-[#5B43D6]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Top Row: Icon Badge */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs",
                    stat.iconBg
                  )}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2px]" />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2E5F3] group-hover:bg-[#5B43D6] transition-colors" />
              </div>

              {/* Metric Number */}
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E244B] tracking-tight mb-1 group-hover:text-[#5B43D6] transition-colors"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "Cairo, sans-serif"
                      : "Manrope, sans-serif",
                }}
              >
                {stat.isText ? (
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
                    {t(stat.valueKey!)}
                  </span>
                ) : (
                  <Counter value={Number(stat.value)} suffix={stat.suffix} />
                )}
              </div>

              {/* Metric Label & Subtitle */}
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#1E244B] leading-snug line-clamp-1">
                  {t(stat.labelKey)}
                </div>
                <div className="text-[11px] sm:text-xs text-[#5E647A] leading-tight mt-0.5 hidden xs:block sm:block line-clamp-1">
                  {t(stat.subKey)}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
