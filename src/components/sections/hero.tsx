"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
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
  const [videoEnabled, setVideoEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  // Delay video loading to ensure initial LCP paints instantly without network congestion
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setVideoEnabled(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

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

  // Play active video when available
  useEffect(() => {
    if (videoRef.current && videoEnabled) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current, videoEnabled]);

  const sloganText =
    language === "en"
      ? "Quality in Every Step Toward Better Healthcare."
      : "الجودة في كل خطوة نحو رعاية صحية أفضل.";

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0F142D]"
    >
      {/* ── Background Layer: Priority High-Performance LCP Image ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/hero-lab.webp"
          alt="Precision Pharmaceutical Research Laboratory"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        {/* ── Lazy-mounted Single Video Layer (Only loads active slide) ── */}
        {videoEnabled && (
          <video
            key={SLIDES[current].src}
            ref={videoRef}
            src={SLIDES[current].src}
            poster="/hero-lab.webp"
            loop
            muted
            playsInline
            preload="none"
            tabIndex={-1}
            onError={() => next()}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          >
            <track kind="captions" src="data:text/vtt;charset=utf-8,WEBVTT" label="Captions" default />
          </video>
        )}

        {/* Darkening Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F28]/60 via-[#0B0F28]/25 to-[#0B0F28]/35" />
      </div>

      {/* ── Foreground Content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20 sm:pb-24 min-h-screen"
      >
        {/* Brand badge */}
        <div className="mb-6">
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
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mb-6 leading-[1.12]"
          style={{
            fontFamily:
              language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif",
            textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 4px 30px rgba(0,0,0,0.6)",
          }}
        >
          {sloganText}
        </h1>

        {/* Description - LCP element painted immediately without JS opacity delay */}
        <p
          className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-2xl mb-10 font-normal"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
        >
          {t("hero.desc")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-14">
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
        </div>

        {/* ── Background Video Controls (Dots & Arrows with 44px tap targets) ── */}
        <div
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 shadow-xl"
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
            className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-full text-white transition-all duration-200 hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicator Dots with min 44x44px touch targets and GPU-composited scaleX */}
          <div className="flex items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to background video ${i + 1}`}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
              >
                <span
                  className="transition-transform duration-300 rounded-full inline-block"
                  style={{
                    width: "8px",
                    height: "8px",
                    transform: i === current ? "scaleX(2.75)" : "scaleX(1)",
                    transformOrigin: "center",
                    background: i === current ? "#28B7C7" : "rgba(255,255,255,0.45)",
                    boxShadow:
                      i === current ? "0 0 10px rgba(40,183,199,0.8)" : "none",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next video background"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-full text-white transition-all duration-200 hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

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

      {/* ── Bottom Progress Bar (GPU Composited scaleX) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-20 origin-left"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <motion.div
          key={current}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full bg-gradient-to-r from-[#5B43D6] via-[#28B7C7] to-[#7B64E0]"
        />
      </div>
    </section>
  );
}
