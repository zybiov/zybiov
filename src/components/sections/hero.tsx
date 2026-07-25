"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";
import { preload } from "react-dom";

export function HeroSection() {
  const { language, t } = useLanguage();

  preload("/hero-lab.webp", { as: "image", fetchPriority: "high" });

  const sloganText = language === "en"
    ? "Quality in Every Step Toward Better Healthcare."
    : "الجودة في كل خطوة نحو رعاية صحية أفضل.";

  const words = sloganText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full bg-white pt-[104px] sm:pt-[120px] pb-20 sm:pb-28"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#E4E7F2 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">

        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="section-tag inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#5B43D6] bg-[#5B43D6]/8 rounded-full border border-[#5B43D6]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28B7C7] animate-pulse" />
            {language === "en" ? "Zybiov Multi-Activities Limited" : "شركة زيبوف للأنشطة المتعددة المحدودة"}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E244B] tracking-tight max-w-4xl mb-6 leading-[1.15]"
          style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-[0.25em] rtl:ml-[0.25em] rtl:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg leading-relaxed text-[#5E647A] max-w-2xl mb-8"
        >
          {t("hero.desc")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12"
        >
          <Link href="/expertise" className="btn-primary text-sm sm:text-base">
            {t("hero.btnExpertise")}
            <ArrowRight className={cn("w-4 h-4", language === "ar" && "rotate-180")} />
          </Link>
          <Link href="/contact" className="btn-outline text-sm sm:text-base">
            {t("contactUs")}
          </Link>
        </motion.div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(91,67,214,0.18)] border-4 border-white/80 group"
          style={{ aspectRatio: "21/10" }}
        >
          <video
            src="https://videos.pexels.com/video-files/4121322/4121322-hd_1920_1080_25fps.mp4"
            poster="/hero-lab.webp"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
