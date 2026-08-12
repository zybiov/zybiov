"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-context";

// ─── Animated Text Roll Link ──────────────────────────────────────────────────
const AnimatedNavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block overflow-hidden h-6 flex items-center text-[14px] font-bold px-3 py-1 rounded-full transition-colors",
        isActive ? "text-[#5B43D6] bg-[#5B43D6]/10" : "text-[#1E244B] hover:text-[#5B43D6]"
      )}
    >
      <div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2">
        <span className={isActive ? "text-[#5B43D6]" : "text-[#1E244B]"}>
          {children}
        </span>
        <span className="text-[#5B43D6] font-extrabold">{children}</span>
      </div>
    </Link>
  );
};

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
        className="absolute top-[2px] bottom-[2px] w-[38px] bg-white rounded-full shadow-[0_2px_6px_rgba(91,67,214,0.15)] border border-[#E2E5F3]"
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

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { language, setLanguage, t, dir } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-2xl sm:rounded-3xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.expertise"), href: "/expertise" },
    { label: t("nav.whyZybiov"), href: "/why-us" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 sm:top-5 left-1/2 transform -translate-x-1/2 z-50",
        "flex flex-col items-center",
        "px-4 sm:px-6 py-2.5 sm:py-3",
        "bg-white/92 backdrop-blur-xl border border-[#E2E5F3]",
        "shadow-[0_12px_40px_rgba(30,36,75,0.12)]",
        "w-[calc(100%-2rem)] sm:w-auto max-w-6xl",
        "transition-all duration-300 ease-out",
        headerShapeClass
      )}
    >
      <div className="flex items-center justify-between w-full gap-x-4 sm:gap-x-8">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div className="relative w-[145px] h-[40px] sm:w-[175px] sm:h-[44px] md:w-[190px] md:h-[44px] transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src="/logo.webp"
              alt={t("brandName")}
              fill
              className={cn(
                "object-contain",
                dir === "rtl" ? "object-right" : "object-left"
              )}
              priority
              sizes="(max-width: 640px) 145px, (max-width: 768px) 175px, 190px"
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <AnimatedNavLink
              key={link.href}
              href={link.href}
              isActive={pathname === link.href}
            >
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <Link
            href="/contact"
            className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] rounded-full hover:shadow-[0_4px_16px_rgba(91,67,214,0.35)] hover:scale-[1.03] transition-all duration-200 flex items-center gap-1.5"
          >
            <span>{t("contactUs")}</span>
            <ArrowRight className={cn("w-3.5 h-3.5", dir === "rtl" && "rotate-180")} />
          </Link>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button
            className="flex items-center justify-center w-9 h-9 text-[#1E244B] bg-[#F0F2FA] rounded-full focus:outline-none cursor-pointer border border-[#E2E5F3]"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Accordion Inside Island */}
      <div
        className={cn(
          "lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden",
          isOpen
            ? "max-h-[500px] opacity-100 pt-4 border-t border-[#F0F2FA] mt-3"
            : "max-h-0 opacity-0 pt-0 mt-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-2 text-base w-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-bold w-full text-center rounded-xl transition-colors",
                pathname === link.href
                  ? "text-[#5B43D6] bg-[#5B43D6]/10"
                  : "text-[#1E244B] hover:text-[#5B43D6] hover:bg-[#F0F2FA]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center space-y-2 mt-4 w-full pt-3 border-t border-[#F0F2FA]">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#5B43D6] via-[#6E56E8] to-[#28B7C7] rounded-full shadow-md flex items-center justify-center gap-1.5"
          >
            <span>{t("contactUs")}</span>
            <ArrowRight className={cn("w-3.5 h-3.5", dir === "rtl" && "rotate-180")} />
          </Link>
        </div>
      </div>
    </header>
  );
}
