"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Award,
  Zap,
  Sparkles,
  Building2,
  ShieldCheck,
  Layers,
  ChevronRight,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

// ─── Compact Language Pill Toggle ─────────────────────────────────────────────
function LanguageToggle({
  language,
  setLanguage,
}: {
  language: "en" | "ar";
  setLanguage: (l: "en" | "ar") => void;
}) {
  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      type="button"
      className="relative w-[76px] h-[30px] sm:w-[80px] sm:h-[32px] bg-[#F0F2FA] rounded-full p-[2px] flex items-center justify-between cursor-pointer border border-[#E2E5F3] select-none shadow-inner transition-all hover:border-[#5B43D6]/40 flex-shrink-0"
      aria-label="Toggle language / تغيير اللغة"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
        className="absolute top-[2px] bottom-[2px] w-[34px] sm:w-[36px] bg-white rounded-full shadow-[0_2px_6px_rgba(91,67,214,0.14)] border border-[#E2E5F3]"
        style={{
          left: language === "en" ? "2px" : "calc(100% - 36px)",
        }}
      />
      <span
        className={cn(
          "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200 whitespace-nowrap",
          language === "en" ? "text-[#5B43D6]" : "text-[#8892A4]"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200 whitespace-nowrap",
          language === "ar" ? "text-[#5B43D6]" : "text-[#8892A4]"
        )}
      >
        عربي
      </span>
    </button>
  );
}

// ─── 21st.dev Floating Island Navbar with Mobile Slide Drawer ─────────────────
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { language, setLanguage, t, dir } = useLanguage();

  const isAr = language === "ar";

  // Mega Menu Data
  const expertiseItems = [
    {
      icon: Award,
      title: isAr ? "منتجات صيدلانية فاخرة" : "Pharmaceutical Products",
      desc: isAr
        ? "استيراد وتوزيع الأدوية المبتكرة والجنيسية المعتمدة"
        : "Branded & generic medicines with temperature control",
      href: "/expertise#pharma",
      gradient: "from-[#5B43D6] to-[#7C5CFC]",
    },
    {
      icon: Zap,
      title: isAr ? "حلول وتجهيزات طبية متقدمة" : "Advanced Medical Equipment",
      desc: isAr
        ? "أجهزة التشخيص، التصوير الطبي وتجهيز المستشفيات"
        : "Diagnostic analyzers, imaging systems & hospital setup",
      href: "/expertise#equipment",
      gradient: "from-[#2B7DDC] to-[#28B7C7]",
    },
    {
      icon: Sparkles,
      title: isAr ? "المكملات الغذائية والصحة" : "Nutraceuticals & Wellness",
      desc: isAr
        ? "فيتامينات وتركيبات عشبية لتلبية احتياجات الصحة اليومية"
        : "Vitamins, mineral formulas & daily health supplements",
      href: "/expertise#supplements",
      gradient: "from-[#28B7C7] to-[#10B981]",
    },
  ];

  const aboutItems = [
    {
      icon: Building2,
      title: isAr ? "عن زيبوف للأنشطة المتعددة" : "Corporate Overview",
      desc: isAr
        ? "شركة رائدة في استيراد وتوزيع الأدوية والمستلزمات الطبية إقليمياً ودولياً"
        : "Leading pharmaceutical & medical supply operator with global reach",
      href: "/about",
      gradient: "from-[#5B43D6] to-[#6E56E8]",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "لماذا تختار زيبوف" : "Why Choose Zybiov",
      desc: isAr
        ? "شراكات عالمية، إدارة مهنية وامتثال قانوني كامل"
        : "Global partners, professional governance & full compliance",
      href: "/why-us",
      gradient: "from-[#2B7DDC] to-[#3B82F6]",
    },
    {
      icon: Layers,
      title: isAr ? "الرؤية والقيم الجوهرية" : "Vision & Core Values",
      desc: isAr
        ? "التزام بالسعي نحو تميز الرعاية الصحية ونقاء الجودة"
        : "Uncompromising quality, integrity and commitment to care",
      href: "/about#vision",
      gradient: "from-[#28B7C7] to-[#2B7DDC]",
    },
  ];

  // Smart Hide on Scroll Down / Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near top of page
      if (currentScrollY < 60) {
        setVisible(true);
      }
      // Scrolling down -> hide navbar
      else if (currentScrollY > lastScrollY.current + 8) {
        if (!mobileOpen && !activeDropdown) {
          setVisible(false);
        }
      }
      // Scrolling up -> show navbar
      else if (currentScrollY < lastScrollY.current - 8) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen, activeDropdown]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setVisible(true);
  }, [pathname]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* ── Desktop & Mobile Floating Island Top Bar ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50",
          "flex items-center justify-between",
          "px-3.5 sm:px-5 py-2 sm:py-2.5",
          "bg-white/90 backdrop-blur-2xl border border-[#E2E5F3]",
          "shadow-[0_10px_35px_rgba(30,36,75,0.12)] hover:bg-white/95 rounded-full",
          "w-[calc(100%-1.5rem)] max-w-6xl sm:w-auto",
          "transition-all duration-300 ease-out"
        )}
      >
        <div className="flex items-center justify-between w-full gap-x-2 sm:gap-x-6 h-[38px] sm:h-[42px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0 relative py-0.5"
            aria-label="Zybiov Home"
          >
            <Image
              src="/logo.webp"
              alt={t("brandName")}
              width={160}
              height={80}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* ── Desktop Navigation Bar ── */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden lg:flex items-center gap-1 relative"
          >
            {/* Home */}
            <Link
              href="/"
              onMouseEnter={() => {
                setHoveredLink("/");
                handleMouseLeave();
              }}
              className={cn(
                "relative px-3.5 py-1.5 text-[13px] font-extrabold transition-colors duration-200 rounded-full z-10 whitespace-nowrap",
                pathname === "/" ? "text-[#5B43D6]" : "text-[#1E244B] hover:text-[#5B43D6]"
              )}
            >
              {t("nav.home")}
              {pathname === "/" && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-[#5B43D6]/10 rounded-full z-[-1] border border-[#5B43D6]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {hoveredLink === "/" && pathname !== "/" && (
                <motion.span
                  layoutId="hoverNavPill"
                  className="absolute inset-0 bg-[#F0F2FA] rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </Link>

            {/* About Us (with Mega Menu) */}
            <div
              onMouseEnter={() => {
                setHoveredLink("/about");
                handleMouseEnter("about");
              }}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Link
                href="/about"
                className={cn(
                  "relative px-3.5 py-1.5 text-[13px] font-extrabold transition-colors duration-200 rounded-full z-10 inline-flex items-center gap-1 whitespace-nowrap",
                  pathname.startsWith("/about") || pathname === "/why-us"
                    ? "text-[#5B43D6]"
                    : "text-[#1E244B] hover:text-[#5B43D6]"
                )}
              >
                <span>{t("nav.about")}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200 opacity-70 flex-shrink-0",
                    activeDropdown === "about" && "rotate-180 text-[#5B43D6]"
                  )}
                />
                {(pathname.startsWith("/about") || pathname === "/why-us") && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#5B43D6]/10 rounded-full z-[-1] border border-[#5B43D6]/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {hoveredLink === "/about" &&
                  !pathname.startsWith("/about") &&
                  pathname !== "/why-us" && (
                    <motion.span
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-[#F0F2FA] rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
              </Link>

              {/* About Mega Menu Dropdown */}
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "absolute top-full pt-3 z-50 w-[330px]",
                      dir === "rtl" ? "right-0" : "left-0"
                    )}
                  >
                    <div className="bg-white/96 backdrop-blur-2xl border border-[#E2E5F3] rounded-2xl p-3 shadow-[0_20px_50px_rgba(30,36,75,0.18)] space-y-1">
                      <div className="px-3 py-1 mb-1 border-b border-[#F0F2FA]">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B43D6]">
                          {isAr ? "معلومات الشركة" : "Company Highlights"}
                        </span>
                      </div>
                      {aboutItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#5B43D6]/5 transition-all duration-200 group"
                          >
                            <div
                              className={cn(
                                "w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br",
                                item.gradient
                              )}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#1E244B] group-hover:text-[#5B43D6] transition-colors flex items-center gap-1 whitespace-nowrap">
                                {item.title}
                                <ChevronRight className={cn("w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity", dir === "rtl" && "rotate-180")} />
                              </div>
                              <div className="text-[11px] text-[#5E647A] leading-tight mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Expertise (with Mega Menu) */}
            <div
              onMouseEnter={() => {
                setHoveredLink("/expertise");
                handleMouseEnter("expertise");
              }}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Link
                href="/expertise"
                className={cn(
                  "relative px-3.5 py-1.5 text-[13px] font-extrabold transition-colors duration-200 rounded-full z-10 inline-flex items-center gap-1 whitespace-nowrap",
                  pathname.startsWith("/expertise")
                    ? "text-[#5B43D6]"
                    : "text-[#1E244B] hover:text-[#5B43D6]"
                )}
              >
                <span>{t("nav.expertise")}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200 opacity-70 flex-shrink-0",
                    activeDropdown === "expertise" && "rotate-180 text-[#5B43D6]"
                  )}
                />
                {pathname.startsWith("/expertise") && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#5B43D6]/10 rounded-full z-[-1] border border-[#5B43D6]/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {hoveredLink === "/expertise" &&
                  !pathname.startsWith("/expertise") && (
                    <motion.span
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-[#F0F2FA] rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
              </Link>

              {/* Expertise Mega Menu Dropdown */}
              <AnimatePresence>
                {activeDropdown === "expertise" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "absolute top-full pt-3 z-50 w-[350px]",
                      dir === "rtl" ? "right-0" : "left-0"
                    )}
                  >
                    <div className="bg-white/96 backdrop-blur-2xl border border-[#E2E5F3] rounded-2xl p-3 shadow-[0_20px_50px_rgba(30,36,75,0.18)] space-y-1">
                      <div className="px-3 py-1 mb-1 border-b border-[#F0F2FA] flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B43D6]">
                          {isAr ? "مجالات الخبرة والتوريد" : "Core Expertise Sectors"}
                        </span>
                        <span className="text-[9px] bg-[#5B43D6]/10 text-[#5B43D6] px-2 py-0.5 rounded-full font-bold">
                          ISO Certified
                        </span>
                      </div>
                      {expertiseItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#5B43D6]/5 transition-all duration-200 group"
                          >
                            <div
                              className={cn(
                                "w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br",
                                item.gradient
                              )}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#1E244B] group-hover:text-[#5B43D6] transition-colors flex items-center gap-1 whitespace-nowrap">
                                {item.title}
                                <ChevronRight className={cn("w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity", dir === "rtl" && "rotate-180")} />
                              </div>
                              <div className="text-[11px] text-[#5E647A] leading-tight mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="pt-2 border-t border-[#F0F2FA]">
                        <Link
                          href="/expertise"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#F4F5FB] text-xs font-bold text-[#5B43D6] hover:bg-[#5B43D6] hover:text-white transition-all duration-200 group"
                        >
                          <span>{isAr ? "استكشف جميع قطاعات الخبرة" : "View All Sectors"}</span>
                          <ArrowRight className={cn("w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1", dir === "rtl" && "rotate-180 group-hover:-translate-x-1")} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Why Zybiov */}
            <Link
              href="/why-us"
              onMouseEnter={() => {
                setHoveredLink("/why-us");
                handleMouseLeave();
              }}
              className={cn(
                "relative px-3.5 py-1.5 text-[13px] font-extrabold transition-colors duration-200 rounded-full z-10 whitespace-nowrap",
                pathname === "/why-us" ? "text-[#5B43D6]" : "text-[#1E244B] hover:text-[#5B43D6]"
              )}
            >
              {t("nav.whyZybiov")}
              {pathname === "/why-us" && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-[#5B43D6]/10 rounded-full z-[-1] border border-[#5B43D6]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {hoveredLink === "/why-us" && pathname !== "/why-us" && (
                <motion.span
                  layoutId="hoverNavPill"
                  className="absolute inset-0 bg-[#F0F2FA] rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onMouseEnter={() => {
                setHoveredLink("/contact");
                handleMouseLeave();
              }}
              className={cn(
                "relative px-3.5 py-1.5 text-[13px] font-extrabold transition-colors duration-200 rounded-full z-10 whitespace-nowrap",
                pathname === "/contact" ? "text-[#5B43D6]" : "text-[#1E244B] hover:text-[#5B43D6]"
              )}
            >
              {t("nav.contact")}
              {pathname === "/contact" && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-[#5B43D6]/10 rounded-full z-[-1] border border-[#5B43D6]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {hoveredLink === "/contact" && pathname !== "/contact" && (
                <motion.span
                  layoutId="hoverNavPill"
                  className="absolute inset-0 bg-[#F0F2FA] rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </Link>
          </nav>

          {/* ── Action Section (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <Link
              href="/contact"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-[11px] tracking-wider uppercase text-white bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] shadow-[0_4px_16px_rgba(91,67,214,0.3)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(91,67,214,0.45)] hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
            >
              <span>{t("contactUs")}</span>
              <ArrowRight
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0",
                  dir === "rtl" && "rotate-180 group-hover:-translate-x-1"
                )}
              />
            </Link>
          </div>

          {/* ── Mobile Trigger & Language Toggle ── */}
          <div className="lg:hidden flex items-center gap-1.5 flex-shrink-0">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setMobileOpen(true)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#F0F2FA] text-[#1E244B] border border-[#E2E5F3] hover:bg-[#5B43D6] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm flex-shrink-0"
              aria-label={t("nav.openMenu")}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Slide-Over Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-[#0A0D24]/60 backdrop-blur-md lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 260,
                mass: 0.8,
              }}
              className={cn(
                "fixed top-0 bottom-0 z-[70] w-[300px] sm:w-[350px] bg-white/98 backdrop-blur-2xl shadow-[0_0_60px_rgba(10,13,36,0.25)] flex flex-col lg:hidden overflow-hidden border-l border-[#E2E5F3]",
                dir === "rtl" ? "left-0 border-r border-l-0" : "right-0"
              )}
            >
              {/* Glowing Top Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#5B43D6] via-[#28B7C7] to-[#7B64E0]" />

              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-[#F0F2FA]">
                <Image
                  src="/logo.webp"
                  alt={t("brandShort")}
                  width={140}
                  height={70}
                  className="h-8 w-auto object-contain"
                  priority
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F3F4FB] text-[#5B43D6] hover:bg-[#5B43D6] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer border border-[#E2E5F3]"
                  aria-label={t("nav.closeMenu")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col px-4 py-4 flex-1 overflow-y-auto space-y-1.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-2xl transition-all duration-200",
                    pathname === "/"
                      ? "text-[#5B43D6] bg-[#5B43D6]/10 border border-[#5B43D6]/20"
                      : "text-[#1E244B] hover:bg-[#F4F5FB]"
                  )}
                >
                  <span>{t("nav.home")}</span>
                  <ArrowRight
                    className={cn("w-4 h-4 opacity-50", dir === "rtl" && "rotate-180")}
                  />
                </Link>

                {/* About Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === "about" ? null : "about"
                      )
                    }
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-2xl transition-all duration-200 cursor-pointer",
                      pathname.startsWith("/about") || pathname === "/why-us"
                        ? "text-[#5B43D6] bg-[#5B43D6]/10 border border-[#5B43D6]/20"
                        : "text-[#1E244B] hover:bg-[#F4F5FB]"
                    )}
                  >
                    <span>{t("nav.about")}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200 opacity-60",
                        mobileExpanded === "about" && "rotate-180 text-[#5B43D6]"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "about" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pr-3 py-1 space-y-1"
                      >
                        {aboutItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-semibold text-[#5E647A] hover:text-[#5B43D6] hover:bg-[#5B43D6]/5 transition-all"
                          >
                            <item.icon className="w-4 h-4 text-[#5B43D6]" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expertise Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === "expertise" ? null : "expertise"
                      )
                    }
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-2xl transition-all duration-200 cursor-pointer",
                      pathname.startsWith("/expertise")
                        ? "text-[#5B43D6] bg-[#5B43D6]/10 border border-[#5B43D6]/20"
                        : "text-[#1E244B] hover:bg-[#F4F5FB]"
                    )}
                  >
                    <span>{t("nav.expertise")}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200 opacity-60",
                        mobileExpanded === "expertise" && "rotate-180 text-[#5B43D6]"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "expertise" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pr-3 py-1 space-y-1"
                      >
                        {expertiseItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-semibold text-[#5E647A] hover:text-[#5B43D6] hover:bg-[#5B43D6]/5 transition-all"
                          >
                            <item.icon className="w-4 h-4 text-[#5B43D6]" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Why Zybiov */}
                <Link
                  href="/why-us"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-2xl transition-all duration-200",
                    pathname === "/why-us"
                      ? "text-[#5B43D6] bg-[#5B43D6]/10 border border-[#5B43D6]/20"
                      : "text-[#1E244B] hover:bg-[#F4F5FB]"
                  )}
                >
                  <span>{t("nav.whyZybiov")}</span>
                  <ArrowRight
                    className={cn("w-4 h-4 opacity-50", dir === "rtl" && "rotate-180")}
                  />
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-2xl transition-all duration-200",
                    pathname === "/contact"
                      ? "text-[#5B43D6] bg-[#5B43D6]/10 border border-[#5B43D6]/20"
                      : "text-[#1E244B] hover:bg-[#F4F5FB]"
                  )}
                >
                  <span>{t("nav.contact")}</span>
                  <ArrowRight
                    className={cn("w-4 h-4 opacity-50", dir === "rtl" && "rotate-180")}
                  />
                </Link>
              </div>

              {/* Bottom Actions Panel */}
              <div className="p-4 border-t border-[#F0F2FA] bg-[#FAFBFD] space-y-3">
                <div className="flex items-center justify-between bg-white border border-[#E2E5F3] p-3 rounded-2xl shadow-sm">
                  <span className="text-xs font-extrabold text-[#1E244B]">
                    {isAr ? "تغيير اللغة" : "Select Language"}
                  </span>
                  <LanguageToggle language={language} setLanguage={setLanguage} />
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow-[0_4px_20px_rgba(91,67,214,0.35)] active:scale-[0.98]"
                >
                  <span>{t("contactUs")}</span>
                  <ArrowRight
                    className={cn("w-4 h-4", dir === "rtl" && "rotate-180")}
                  />
                </Link>
                <a
                  href="tel:+249111909092"
                  className="flex items-center justify-center gap-2 w-full text-[13px] font-bold text-[#5E647A] hover:text-[#5B43D6] transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5B43D6]" />
                  <span>{t("nav.touch")}</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
