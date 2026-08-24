"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function VisionMissionSection() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="vision"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F3F5FC" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2B7DDC 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="section-tag mb-4 sm:mb-5 inline-flex">{t("visionMission.badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
            {t("visionMission.title")}{" "}
            <span style={{
              background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              {t("visionMission.titleAccent")}
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#5E647A" }}>
            {t("visionMission.sub")}
          </p>
        </Reveal>

        {/* Mobile: stack Vision → Image → Mission */}
        {/* Desktop: 3-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Vision Card */}
          <Reveal delay={0.1} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 30px 70px rgba(91,67,214,0.15)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-7 sm:p-8 relative overflow-hidden h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #4A31C0 100%)",
                boxShadow: "0 20px 50px rgba(91,67,214,0.2)"
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 sm:mb-6">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {t("visionMission.visionTitle")}
                </h3>
                <p className="text-white/85 leading-relaxed text-[14px] sm:text-[15px]">
                  {t("visionMission.visionDesc")}
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* Center: Image — visible on all screens */}
          <Reveal delay={0.2} className="lg:col-span-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[300px]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/patient-care.webp"
                alt="Zybiov delivering healthcare to Sudanese communities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, transparent 40%, rgba(30,36,75,0.6) 100%)"
              }} />
              <div className={cn("absolute bottom-5 sm:bottom-6 px-6", dir === "rtl" ? "right-5 sm:right-6" : "left-5 sm:left-6")}>
                <p className="text-white/95 text-sm font-medium italic leading-relaxed">
                  &quot;{t("footer.tagline")}&quot;
                </p>
                <p className="text-white/60 text-xs mt-1">— {t("aboutPage.title")}</p>
              </div>
            </div>
          </Reveal>

          {/* Mission Card */}
          <Reveal delay={0.3} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 30px 70px rgba(43,125,220,0.15)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-7 sm:p-8 relative overflow-hidden h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #2B7DDC 0%, #1a6bc4 100%)",
                boxShadow: "0 20px 50px rgba(43,125,220,0.2)"
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {t("visionMission.missionTitle")}
                </h3>
                <p className="text-white/85 leading-relaxed text-[14px] sm:text-[15px]">
                  {t("visionMission.missionDesc")}
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
