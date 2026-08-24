"use client";

import React, { useRef, useState, useCallback } from "react";
import { Counter } from "@/components/ui/counter";
import { Award, Package, Globe2, Building2, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value?: number;
  valueKey?: string;
  isText?: boolean;
  suffix?: string;
  labelKey: string;
  subKey: string;
  tag: string;
  tagAr: string;
  color: string;
  beamGradient: string;
  spotlightColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  beaconColor: string;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 10,
    suffix: "+",
    labelKey: "stats.expLabel",
    subKey: "stats.expSub",
    tag: "Excellence",
    tagAr: "التميز",
    color: "#5B43D6",
    beamGradient: "from-transparent via-[#5B43D6] to-transparent",
    spotlightColor: "rgba(91, 67, 214, 0.18)",
    badgeBg: "bg-[#EEECFC]",
    badgeText: "text-[#5B43D6]",
    badgeBorder: "border-[#5B43D6]/25",
    beaconColor: "bg-[#5B43D6]",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    labelKey: "stats.prodLabel",
    subKey: "stats.prodSub",
    tag: "Catalog",
    tagAr: "المنتجات",
    color: "#2B7DDC",
    beamGradient: "from-transparent via-[#2B7DDC] to-transparent",
    spotlightColor: "rgba(43, 125, 220, 0.18)",
    badgeBg: "bg-[#EBF5FF]",
    badgeText: "text-[#2B7DDC]",
    badgeBorder: "border-[#2B7DDC]/25",
    beaconColor: "bg-[#28B7C7]",
  },
  {
    icon: Globe2,
    valueKey: "stats.covValue",
    isText: true,
    labelKey: "stats.covLabel",
    subKey: "stats.covSub",
    tag: "Nationwide",
    tagAr: "سودانياً",
    color: "#0E95A4",
    beamGradient: "from-transparent via-[#0E95A4] to-transparent",
    spotlightColor: "rgba(14, 149, 164, 0.18)",
    badgeBg: "bg-[#E6F9FB]",
    badgeText: "text-[#0E95A4]",
    badgeBorder: "border-[#28B7C7]/25",
    beaconColor: "bg-[#10B981]",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    labelKey: "stats.partnerLabel",
    subKey: "stats.partnerSub",
    tag: "Partners",
    tagAr: "الشركاء",
    color: "#7C3AED",
    beamGradient: "from-transparent via-[#EC4899] to-transparent",
    spotlightColor: "rgba(124, 58, 237, 0.18)",
    badgeBg: "bg-[#F5EEFC]",
    badgeText: "text-[#7C3AED]",
    badgeBorder: "border-[#7C3AED]/25",
    beaconColor: "bg-[#EC4899]",
  },
];

// Aceternity Interactive Glow Card
function AceternityStatCard({
  stat,
  language,
  t,
}: {
  stat: StatItem;
  language: string;
  t: (k: string) => string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      variants={fadeUpItem}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 bg-white/90 backdrop-blur-xl border border-[#E2E6F2] shadow-[0_4px_24px_rgba(30,36,75,0.04)] hover:shadow-[0_16px_40px_rgba(30,36,75,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* ── Aceternity Mouse-Follow Spotlight Glow ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, ${stat.spotlightColor}, transparent 80%)`,
        }}
      />

      {/* ── Aceternity Border Spotlight Halo ── */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, ${stat.color}, transparent 70%)`,
          maskImage:
            "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
        }}
      />

      {/* ── Top Neon Beam Highlight ── */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-40 group-hover:opacity-100 transition-opacity duration-300",
          stat.beamGradient
        )}
      />

      {/* ── Top Row: Icon Badge & Live Beacon ── */}
      <div className="relative z-10 flex items-center justify-between mb-3.5">
        <div
          className={cn(
            "w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs",
            stat.badgeBg,
            stat.badgeText,
            stat.badgeBorder
          )}
        >
          <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2px]" />
        </div>

        {/* Status Chip with pulsating beacon */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F4F6FC] border border-[#E4E7F2] text-[10px] sm:text-[11px] font-semibold text-[#5E647A]">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                stat.beaconColor
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full h-1.5 w-1.5",
                stat.beaconColor
              )}
            />
          </span>
          <span className="tracking-wide">
            {language === "ar" ? stat.tagAr : stat.tag}
          </span>
        </div>
      </div>

      {/* ── Metric Value Counter with Gradient Shine ── */}
      <div className="relative z-10 my-1">
        <div
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E244B] tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1E244B] group-hover:to-[#5B43D6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
          style={{
            fontFamily:
              language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif",
          }}
        >
          {stat.isText ? (
            <span className="text-xl sm:text-2xl lg:text-3xl font-black">
              {t(stat.valueKey!)}
            </span>
          ) : (
            <Counter value={Number(stat.value)} suffix={stat.suffix} />
          )}
        </div>
      </div>

      {/* ── Label & Subtext ── */}
      <div className="relative z-10">
        <div className="text-xs sm:text-sm font-bold text-[#1E244B] leading-snug line-clamp-1">
          {t(stat.labelKey)}
        </div>
        <div className="text-[10px] sm:text-xs text-[#5E647A] leading-tight mt-0.5 hidden xs:block sm:block line-clamp-1">
          {t(stat.subKey)}
        </div>
      </div>
    </motion.div>
  );
}

export function StatsStrip() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-8 sm:py-12 lg:py-14 border-y border-[#E4E7F2]/80 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] overflow-hidden">
      {/* Ambient background blur spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-80 h-80 rounded-full bg-[#5B43D6]/5 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 rounded-full bg-[#28B7C7]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#5B43D6 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <AceternityStatCard
              key={stat.labelKey}
              stat={stat}
              language={language}
              t={t}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
