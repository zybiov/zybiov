"use client";

import React from "react";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";
import { GradientBlobCard } from "@/components/ui/gradient-bold-card";

export function CoreValuesSection() {
  const { t, language, dir } = useLanguage();
  const isRTL = dir === "rtl";

  const coreValues = [
    {
      number: "01",
      icon: Compass,
      title: t("coreValues.v1Title"),
      desc: t("coreValues.v1Desc"),
      tag: language === "ar" ? "معيار الجودة" : "WHO-GMP Benchmark",
      color: "#5B43D6",
      blobGradient: "from-[#5B43D6] via-[#7B64E0] to-[#2B7DDC]",
      features: language === "ar"
        ? ["توريد معتمد من GMP", "معايير فحص دقيقة"]
        : ["WHO-GMP Certified Sourcing", "Strict Quality Checks"],
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: t("coreValues.v2Title"),
      desc: t("coreValues.v2Desc"),
      tag: language === "ar" ? "شفافية مطلقة" : "100% Transparency",
      color: "#2B7DDC",
      blobGradient: "from-[#2B7DDC] via-[#38BDF8] to-[#1E40AF]",
      features: language === "ar"
        ? ["حوكمة أخلاقية كاملة", "سلاسل توريد موثوقة"]
        : ["Ethical Governance", "Verified Supply Chains"],
    },
    {
      number: "03",
      icon: Sparkles,
      title: t("coreValues.v3Title"),
      desc: t("coreValues.v3Desc"),
      tag: language === "ar" ? "تطوير مستمر" : "Future-Ready Tech",
      color: "#0D9488",
      blobGradient: "from-[#0D9488] via-[#14B8A6] to-[#2DD4BF]",
      features: language === "ar"
        ? ["سلسلة إمداد ذكية", "تتبع مبرد متطور"]
        : ["Smart Cold-Chain IoT", "Dynamic Agility"],
    },
    {
      number: "04",
      icon: FileCheck2,
      title: t("coreValues.v4Title"),
      desc: t("coreValues.v4Desc"),
      tag: language === "ar" ? "امتثال صارم" : "Full Compliance",
      color: "#6366F1",
      blobGradient: "from-[#6366F1] via-[#8B5CF6] to-[#4338CA]",
      features: language === "ar"
        ? ["تراخيص وزارة الصحة", "معايير ISO 9001"]
        : ["Ministry Clearances", "ISO 9001 Protocol"],
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: t("coreValues.v5Title"),
      desc: t("coreValues.v5Desc"),
      tag: language === "ar" ? "أولوية الشريك" : "Partner-Centric",
      color: "#E11D48",
      blobGradient: "from-[#E11D48] via-[#F43F5E] to-[#FB7185]",
      features: language === "ar"
        ? ["دعم واستجابة سريعة", "شراكات مستدامة"]
        : ["High-Response SLA", "Long-term Partnerships"],
    },
  ];

  return (
    <section
      id="values"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFD] to-white"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: "#5B43D6" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: "#28B7C7" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#1E244B 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm border border-[#5B43D6]/15 bg-[#5B43D6]/5 text-[#5B43D6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("coreValues.badge")}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
            style={{
              color: "#1E244B",
              fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif",
            }}
          >
            {t("coreValues.title")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 50%, #0D9488 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("coreValues.titleAccent")}
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed"
            style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "inherit" }}
          >
            {t("coreValues.sub")}
          </p>
        </Reveal>

        {/* 5-Pillar Cards with Animated Gradient Blobs */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              const isLastOdd = idx === 4;

              return (
                <motion.div
                  key={idx}
                  variants={fadeUpItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={cn(
                    "h-full",
                    // On 3-col desktop layout, make the 4th and 5th cards span elegantly across 2 cols if desired
                    idx === 3 ? "lg:col-span-1" : "",
                    idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  )}
                >
                  <GradientBlobCard
                    blobGradient={value.blobGradient}
                    className="h-full"
                    innerClassName="h-full min-h-[300px]"
                  >
                    <div>
                      {/* Top Bar: Number & Tag Pill */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className="text-xs font-mono font-extrabold tracking-wider px-2.5 py-1 rounded-lg border bg-white/90 shadow-xs"
                          style={{
                            color: value.color,
                            borderColor: `${value.color}30`,
                          }}
                        >
                          {value.number}
                        </span>
                        <span
                          className="inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border bg-white/90 backdrop-blur-xs"
                          style={{
                            color: value.color,
                            borderColor: `${value.color}30`,
                          }}
                        >
                          {value.tag}
                        </span>
                      </div>

                      {/* Frosted Icon Shield */}
                      <div
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-[#1E244B]/5 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)`,
                        }}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold mb-3 text-[#1E244B] tracking-tight group-hover:text-[#5B43D6] transition-colors duration-200"
                        style={{
                          fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif",
                        }}
                      >
                        {value.title}
                      </h3>

                      {/* Narrative */}
                      <p className="text-xs sm:text-sm text-[#5E647A] leading-relaxed font-normal mb-6">
                        {value.desc}
                      </p>
                    </div>

                    {/* Bottom: Feature Pills */}
                    <div className="pt-4 border-t border-[#E4E7F2]/80 flex flex-wrap gap-2">
                      {value.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/[0.02] border border-black/[0.05] text-[11px] font-medium text-[#1E244B]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0D9488]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </GradientBlobCard>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
