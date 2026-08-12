"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  ChevronDown,
  Award,
  Zap,
  Sparkles,
  Building2,
  ShieldCheck,
  Layers,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

// ─── Language Capsule Toggle ──────────────────────────────────────────────────
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
      className="relative w-[84px] h-[34px] bg-[#F0F2FA] rounded-full p-[2px] flex items-center justify-between cursor-pointer border border-[#E2E5F3] select-none shadow-inner transition-all hover:border-[#5B43D6]/40"
      aria-label="Toggle language / تغيير اللغة"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="absolute top-[2px] bottom-[2px] w-[38px] bg-white rounded-full shadow-[0_2px_6px_rgba(91,67,214,0.12)] border border-[#E2E5F3]"
        style={{
          left: language === "en" ? "2px" : "calc(100% - 40px)",
        }}
      />
      <span
        className={cn(
          "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200",
          language === "en" ? "text-[#5B43D6]" : "text-[#8892A4]"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200",
          language === "ar" ? "text-[#5B43D6]" : "text-[#8892A4]"
        )}
      >
        عربي
      </span>
    </button>
  );
}

// ─── Main 21st.dev Mini Floating Capsule Navbar ───────────────────────────────
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
        ? "شركة رائدة في استيراد وتوزيع المستلزمات الطبية في السودان"
        : "Leading pharmaceutical & medical supply operator in Sudan",
      href: "/about",
      gradient: "from-[#5B43D6] to-[#6E56E8]",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "لماذا تختار زيبوف" : "Why Choose Zybiov",
      desc: isAr
        ? "شراكات عالمية، معايير ISO وسلسلة توريد موثوقة على مدار الساعة"
        : "Global network, ISO compliance, and 24/7 logistics resilience",
      href: "/why-us",
      gradient: "from-[#2B7DDC] to-[#5B43D6]",
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 sm:top-5 left-1/2 transform -translate-x-1/2 z-50",
          "flex flex-col items-center",
          "px-4 sm:px-6 py-2.5 sm:py-3",
          "bg-white/92 backdrop-blur-2xl border border-[#E2E5F3]",
          "shadow-[0_16px_50px_rgba(30,36,75,0.14)]",
          "w-[calc(100%-2rem)] max-w-6xl sm:w-auto",
          "transition-all duration-300 ease-out",
          mobileOpen ? "rounded-2xl sm:rounded-3xl" : "rounded-full"
        )}
      >
        <div className="flex items-center justify-between w-full gap-x-4 sm:gap-x-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0 relative"
          >
            <div className="relative w-[135px] h-[44px] sm:w-[160px] sm:h-[50px] transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/logo.webp"
                alt={t("brandName")}
                fill
                className={cn(
                  "object-contain",
                  dir === "rtl" ? "object-right" : "object-left"
                )}
                priority
                sizes="(max-width: 640px) 135px, 160px"
              />
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
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
                "relative px-4 py-1.5 text-[14px] font-bold transition-colors duration-200 rounded-full z-10",
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
                  "relative px-4 py-1.5 text-[14px] font-bold transition-colors duration-200 rounded-full z-10 inline-flex items-center gap-1.5",
                  pathname.startsWith("/about") || pathname === "/why-us"
                    ? "text-[#5B43D6]"
                    : "text-[#1E244B] hover:text-[#5B43D6]"
                )}
              >
                <span>{t("nav.about")}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
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
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "absolute top-full pt-3 z-50 w-[340px]",
                      dir === "rtl" ? "right-0" : "left-0"
                    )}
                  >
                    <div className="bg-white/95 backdrop-blur-2xl border border-[#E2E5F3] rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(30,36,75,0.18)] space-y-1">
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
                                "w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br",
                                item.gradient
                              )}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#1E244B] group-hover:text-[#5B43D6] transition-colors flex items-center gap-1">
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
                  "relative px-4 py-1.5 text-[14px] font-bold transition-colors duration-200 rounded-full z-10 inline-flex items-center gap-1.5",
                  pathname.startsWith("/expertise")
                    ? "text-[#5B43D6]"
                    : "text-[#1E244B] hover:text-[#5B43D6]"
                )}
              >
                <span>{t("nav.expertise")}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
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
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "absolute top-full pt-3 z-50 w-[360px]",
                      dir === "rtl" ? "right-0" : "left-0"
                    )}
                  >
                    <div className="bg-white/95 backdrop-blur-2xl border border-[#E2E5F3] rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(30,36,75,0.18)] space-y-1">
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
                                "w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br",
                                item.gradient
                              )}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#1E244B] group-hover:text-[#5B43D6] transition-colors flex items-center gap-1">
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
                "relative px-4 py-1.5 text-[14px] font-bold transition-colors duration-200 rounded-full z-10",
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
                "relative px-4 py-1.5 text-[14px] font-bold transition-colors duration-200 rounded-full z-10",
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
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <Link
              href="/contact"
              className="relative group overflow-hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] shadow-[0_4px_16px_rgba(91,67,214,0.3)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(91,67,214,0.45)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>{t("contactUs")}</span>
              <ArrowRight
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1",
                  dir === "rtl" && "rotate-180 group-hover:-translate-x-1"
                )}
              />
            </Link>
          </div>

          {/* ── Mobile Trigger & Language Toggle ── */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F2FA] text-[#1E244B] border border-[#E2E5F3] hover:bg-[#5B43D6] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Accordion Menu Inside Floating Capsule ── */}
        <div
          className={cn(
            "lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden",
            mobileOpen
              ? "max-h-[500px] opacity-100 pt-4 border-t border-[#F0F2FA] mt-3"
              : "max-h-0 opacity-0 pt-0 mt-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-1 text-base w-full">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname === "/" ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B]"
              )}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname.startsWith("/about") ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B]"
              )}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/expertise"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname.startsWith("/expertise") ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B]"
              )}
            >
              {t("nav.expertise")}
            </Link>
            <Link
              href="/why-us"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname === "/why-us" ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B]"
              )}
            >
              {t("nav.whyZybiov")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname === "/contact" ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B]"
              )}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="flex flex-col items-center space-y-2 mt-3 w-full pt-3 border-t border-[#F0F2FA]">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] rounded-full shadow-md flex items-center justify-center gap-1.5"
            >
              <span>{t("contactUs")}</span>
              <ArrowRight className={cn("w-3.5 h-3.5", dir === "rtl" && "rotate-180")} />
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
}
