"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

const pillarIcons = [Globe2, Lightbulb, TrendingUp];
const pillarColors = [
  "linear-gradient(135deg, #5B43D6, #2B7DDC)",
  "linear-gradient(135deg, #2B7DDC, #28B7C7)",
  "linear-gradient(135deg, #28B7C7, #5B43D6)",
];

export function AspirationsSection() {
  const { t, dir } = useLanguage();

  const pillars = [
    {
      label: t("aspirations.pillar1Title"),
      sub: t("aspirations.pillar1Desc"),
      Icon: pillarIcons[0],
      gradient: pillarColors[0],
    },
    {
      label: t("aspirations.pillar2Title"),
      sub: t("aspirations.pillar2Desc"),
      Icon: pillarIcons[1],
      gradient: pillarColors[1],
    },
    {
      label: t("aspirations.pillar3Title"),
      sub: t("aspirations.pillar3Desc"),
      Icon: pillarIcons[2],
      gradient: pillarColors[2],
    },
  ];

  return (
    <section
      id="aspirations"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F3F5FC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1E244B 0%, #2B3a7a 50%, #1a2d5a 100%)",
            boxShadow: "0 40px 100px rgba(30,36,75,0.3)",
          }}
        >
          {/* Background image with cinematic depth */}
          <div className="absolute inset-0">
            <Image
              src="/vision-future.webp"
              alt="Future of healthcare innovation and pharmaceutical networks"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
          </div>

          {/* Cinematic lighting & contrast overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(30,36,75,0.3) 0%, rgba(14,18,48,0.85) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(91,67,214,0.4) 0%, rgba(43,125,220,0.25) 50%, rgba(40,183,199,0.2) 100%)",
            }}
          />

          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)",
              transform: "translate(20%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)",
              transform: "translate(-20%, 30%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-14 sm:py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 sm:mb-8"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28B7C7] animate-pulse" />
                  {t("aspirations.tag")}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {t("aspirations.title")}
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-14 text-white/80 max-w-3xl mx-auto">
                  {t("aspirations.desc")}
                </p>
              </Reveal>

              {/* Aspiration pillars */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-6 sm:p-7 text-center group transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.12] cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ background: pillar.gradient }}
                      >
                        <pillar.Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-bold text-sm sm:text-base mb-2 group-hover:text-[#28B7C7] transition-colors">
                        {pillar.label}
                      </p>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                        {pillar.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary active:scale-[0.98] transition-transform"
                    style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
                  >
                    {t("aspirations.ctaGetInTouch")}
                    <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                  </Link>
                  <Link
                    href="/expertise"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                    style={{
                      border: "2px solid rgba(255,255,255,0.3)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {t("aspirations.ctaExpertise")}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
