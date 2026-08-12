"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Globe } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.expertise", href: "/expertise" },
  { key: "nav.whyZybiov", href: "/why-us" },
  { key: "nav.contact", href: "/contact" },
];

// Minimalist sliding capsule language toggle with fixed width to prevent layout shifts
function LanguageToggle({ language, setLanguage }: { language: "en" | "ar", setLanguage: (l: "en" | "ar") => void }) {
  return (
    <div
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="relative w-[86px] h-[38px] bg-[#F0F2FA] rounded-full p-[3px] flex items-center justify-between cursor-pointer border border-[#E4E7F2] select-none"
    >
      {/* Sliding Pill Indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="absolute top-[3px] bottom-[3px] w-[38px] bg-white rounded-full shadow-sm"
        style={{
          left: language === "en" ? "3px" : "calc(100% - 41px)"
        }}
      />
      {/* Labels */}
      <span className={cn(
        "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200",
        language === "en" ? "text-[#5B43D6]" : "text-[#8892A4]"
      )}>
        EN
      </span>
      <span className={cn(
        "z-10 text-[10px] font-extrabold flex-1 text-center transition-colors duration-200",
        language === "ar" ? "text-[#5B43D6]" : "text-[#8892A4]"
      )}>
        عربي
      </span>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-[#E4E7F2]",
          scrolled
            ? "shadow-[0_4px_24px_rgba(30,36,75,0.08)]"
            : "shadow-[0_2px_12px_rgba(30,36,75,0.04)]"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[80px] sm:h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-[155px] h-[55px] sm:w-[170px] sm:h-[60px] md:w-[185px] md:h-[66px] lg:w-[200px] lg:h-[72px] transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/logo.webp"
                alt={t("brandName")}
                fill
                className={cn(
                  "object-contain",
                  dir === "rtl" ? "object-right" : "object-left"
                )}
                priority
                sizes="(max-width: 640px) 55px, (max-width: 768px) 60px, (max-width: 1024px) 66px, 72px"
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-2.5 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold transition-all duration-200 rounded-lg hover:text-[#5B43D6] hover:bg-[#5B43D6]/5",
                    isActive ? "text-[#5B43D6]" : "text-[#1E244B]"
                  )}
                >
                  {t(link.key)}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 h-0.5 bg-[#5B43D6] left-2.5 right-2.5 xl:left-4 xl:right-4 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA & Language Toggle — desktop only */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              {t("contactUs")}
              <ArrowRight className={cn("w-4 h-4 transition-transform duration-200", dir === "rtl" && "rotate-180")} />
            </Link>
          </div>

          {/* Mobile menu toggle & Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setMobileOpen(true)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-[#1E244B] hover:bg-[#5B43D6]/10 transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ─── Right-Side Mobile Drawer ─── */}
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
              className="fixed inset-0 z-[60] bg-[#0d1136]/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
              className={cn(
                "fixed top-0 bottom-0 z-[70] w-[310px] sm:w-[360px] bg-white shadow-[0_0_40px_rgba(30,36,75,0.15)] flex flex-col lg:hidden overflow-hidden",
                dir === "rtl" ? "left-0" : "right-0"
              )}
            >
              {/* Top gradient strip */}
              <div className="h-1 w-full bg-gradient-to-r from-[#5B43D6] via-[#7C5CFC] to-[#A78BFA]" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-5 border-b border-[#F0F2FA]">
                <div className="relative w-[150px] h-[53px]">
                  <Image
                    src="/logo.webp"
                    alt={t("brandShort")}
                    fill
                    className={cn(
                      "object-contain",
                      dir === "rtl" ? "object-right" : "object-left"
                    )}
                    priority
                    sizes="55px"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5F4FF] text-[#5B43D6] hover:bg-[#5B43D6] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label={t("nav.closeMenu")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col px-4 py-4 flex-1 overflow-y-auto gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-4 text-[15px] font-semibold rounded-xl transition-all duration-200 group",
                          isActive
                            ? "text-[#5B43D6] bg-[#5B43D6]/8"
                            : "text-[#1E244B] hover:text-[#5B43D6] hover:bg-[#5B43D6]/5"
                        )}
                      >
                        <span>{t(link.key)}</span>
                        <span
                          className={cn(
                            "w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200",
                            isActive
                              ? "bg-[#5B43D6] text-white"
                              : "bg-[#F0F2FA] text-[#5B43D6] group-hover:bg-[#5B43D6]/10",
                            dir === "rtl" ? "rotate-180" : ""
                          )}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA & Language Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="p-5 border-t border-[#F0F2FA] bg-[#FAFBFD] space-y-4"
              >
                <div className="flex items-center justify-between bg-white border border-[#E4E7F2] p-3 rounded-xl">
                  <span className="text-xs font-bold text-[#5E647A]">{language === "en" ? "Change Language" : "تغيير اللغة"}</span>
                  <LanguageToggle language={language} setLanguage={setLanguage} />
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#5B43D6] hover:bg-[#4A35C0] text-white font-semibold text-[15px] py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_4px_16px_rgba(91,67,214,0.3)]"
                >
                  {t("contactUs")}
                  <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                </Link>
                <a
                  href="tel:+249111909092"
                  className="flex items-center justify-center gap-2 w-full text-[14px] font-medium text-[#5B6790] hover:text-[#5B43D6] transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("nav.touch")}</span>
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
