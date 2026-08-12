"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

// ─── 5 Verified 200 OK Royalty-Free Pharma & Healthcare Videos ───────────────
const SLIDES = [
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/4121322/4121322-hd_1920_1080_25fps.mp4",
    poster: "/hero-lab.webp",
    label: "Precision Laboratory Research",
    labelAr: "أبحاث المختبرات الدقيقة",
  },
  {
    id: 2,
    src: "https://videos.pexels.com/video-files/8381327/8381327-hd_1920_1080_25fps.mp4",
    poster: "/hero-lab.webp",
    label: "Automated Diagnostic Analyzers",
    labelAr: "محللات التشخيص الآلية",
  },
  {
    id: 3,
    src: "https://videos.pexels.com/video-files/7033769/7033769-sd_960_540_25fps.mp4",
    poster: "/hero-lab.webp",
    label: "Pharmaceutical Innovation & Supplies",
    labelAr: "الابتكار والإمدادات الدوائية",
  },
  {
    id: 4,
    src: "https://videos.pexels.com/video-files/3195394/3195394-sd_960_540_25fps.mp4",
    poster: "/hero-lab.webp",
    label: "Advanced Healthcare Solutions",
    labelAr: "حلول الرعاية الصحية المتقدمة",
  },
  {
    id: 5,
    src: "https://videos.pexels.com/video-files/3191574/3191574-sd_960_540_25fps.mp4",
    poster: "/hero-lab.webp",
    label: "Biopharmaceutical Manufacturing",
    labelAr: "التصنيع الصيدلاني الحيوي",
  },
];

const INTERVAL_MS = 6500;

export function HeroSection() {
  const { language, t } = useLanguage();

  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setTimeout(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      INTERVAL_MS
    );
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  // Play active video, pause inactive
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === current) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [current]);

  const sloganText =
    language === "en"
      ? "Quality in Every Step Toward Better Healthcare."
      : "الجودة في كل خطوة نحو رعاية صحية أفضل.";

  const words = sloganText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0F142D]"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      {/* ── Background Video Layers ── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.src}
              poster={slide.poster}
              autoPlay={i === 0}
              loop
              muted
              playsInline
              preload={i === 0 ? "auto" : "none"}
              onError={() => next()}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Lightened Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F28]/40 via-[#0B0F28]/15 to-[#0B0F28]/25" />
      </div>

      {/* ── Foreground Content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white rounded-full shadow-lg border border-white/20"
            style={{
              background: "rgba(91,67,214,0.45)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#28B7C7] animate-pulse" />
            {language === "en"
              ? "Zybiov Multi-Activities Limited"
              : "شركة زيبوف للأنشطة المتعددة المحدودة"}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mb-6 leading-[1.12]"
          style={{
            fontFamily:
              language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif",
            textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 4px 30px rgba(0,0,0,0.6)",
          }}
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-2xl mb-10 font-normal"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
        >
          {t("hero.desc")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-14"
        >
          <Link href="/expertise" className="btn-primary text-sm sm:text-base">
            {t("hero.btnExpertise")}
            <ArrowRight
              className={cn("w-4 h-4", language === "ar" && "rotate-180")}
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] font-semibold text-white border border-white/35 transition-all duration-300 hover:bg-white/15 hover:border-white/60 shadow-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {t("contactUs")}
          </Link>
        </motion.div>

        {/* ── Background Video Controls (Dots & Arrows) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex items-center gap-4 px-4 py-2 rounded-full border border-white/20 shadow-xl"
          style={{
            background: "rgba(30,36,75,0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous video background"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-all duration-200 hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to background video ${i + 1}`}
                className="transition-all duration-300 rounded-full focus:outline-none cursor-pointer"
                style={{
                  width: i === current ? "22px" : "8px",
                  height: "8px",
                  background: i === current ? "#28B7C7" : "rgba(255,255,255,0.45)",
                  boxShadow:
                    i === current ? "0 0 10px rgba(40,183,199,0.8)" : "none",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next video background"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-all duration-200 hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Current Background Video Scene Title */}
        <div className="mt-3 h-6 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold text-white/70 tracking-widest uppercase"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              {language === "ar"
                ? SLIDES[current].labelAr
                : SLIDES[current].label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[#5B43D6] via-[#28B7C7] to-[#7B64E0]"
        />
      </div>
    </section>
  );
}
