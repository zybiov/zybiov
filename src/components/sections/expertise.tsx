"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { CheckCircle2, Award, Zap, ShieldAlert } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function ExpertiseSection() {
  const { t, language, dir } = useLanguage();

  const getLabel = (key: string) => {
    return t(key);
  };

  const sectors = [
    {
      key: "pharma",
      image: "/gmp-facilities.webp",
      title: t("expertise.sector1Title"),
      desc: t("expertise.sector1Desc"),
      stat: t("expertise.sector1Stat"),
      badge: language === "en" ? "01. Premium Pharmaceuticals" : "٠١. منتجات دوائية فاخرة",
      features: language === "en"
        ? ["Sourcing & Importation", "Global Manufacturer Network", "Branded & Generic Medicines", "Quality & Temperature Control"]
        : ["الاستيراد والتوريد الدولي", "شبكة مصنعين عالميين", "أدوية مبتكرة وجنيسية", "رقابة الجودة وسلسلة التبريد"],
      tags: language === "en"
        ? ["Branded", "Generics", "GMP Certified", "Secure Supply Chain"]
        : ["مبتكرة", "جنيسية", "معتمد GMP", "سلسلة إمداد آمنة"],
      icon: Award,
      gradient: "from-[#5B43D6] to-[#2B7DDC]",
    },
    {
      key: "equipment",
      image: "/medical-equipment.webp",
      title: t("expertise.sector2Title"),
      desc: t("expertise.sector2Desc"),
      stat: t("expertise.sector2Stat"),
      badge: language === "en" ? "02. Advanced Solutions" : "٠٢. حلول متقدمة",
      features: language === "en"
        ? ["Diagnostic & Lab Instruments", "Imaging & Surgical Systems", "Hospital Furniture & Setup", "Regulatory Compliance Sourcing"]
        : ["أجهزة التشخيص والمختبرات", "أنظمة التصوير والجراحة", "أثاث وتجهيز المستشفيات", "شراء متوافق تنظيمياً"],
      tags: language === "en"
        ? ["Diagnostics", "Imaging", "Hospital Furniture", "Surgical Technology"]
        : ["تشخيص", "تصوير طبي", "أثاث مستشفيات", "تقنيات جراحية"],
      icon: Zap,
      gradient: "from-[#2B7DDC] to-[#28B7C7]",
    },
    {
      key: "supplements",
      image: "/nutritional-supplements.webp",
      title: t("expertise.sector3Title"),
      desc: t("expertise.sector3Desc"),
      stat: t("expertise.sector3Stat"),
      badge: language === "en" ? "03. Health & Wellness" : "٠٣. الصحة والعافية",
      features: language === "en"
        ? ["Vitamins & Mineral Range", "Herbal & Botanical Formulas", "Sports Nutrition Solutions", "Strict Purity Standards Sourcing"]
        : ["مجموعة الفيتامينات والمعادن", "تركيبات عشبية ونباتية", "حلول التغذية الرياضية", "شراء بمعايير نقاء صارمة"],
      tags: language === "en"
        ? ["Wellness", "Nutrition", "Herbal", "Daily Health"]
        : ["العافية", "التغذية", "عشبي", "صحة يومية"],
      icon: CheckCircle2,
      gradient: "from-[#28B7C7] to-[#5B43D6]",
    },
  ];

  return (
    <section id="expertise" className="relative py-16 sm:py-24 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <Reveal className="text-center mb-16 sm:mb-24">
          <span className="section-tag mb-4 inline-flex">{t("expertise.tag")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E244B] mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
            {language === "en" ? (
              <>
                Delivering excellence across our{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Core Sectors
                </span>
              </>
            ) : (
              <>
                تقديم التميز في قطاعاتنا{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  الرئيسية
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-[#5E647A] max-w-2xl mx-auto leading-relaxed">
            {t("expertise.desc")}
          </p>
        </Reveal>

        {/* Alternating Sectors List */}
        <div className="space-y-24 sm:space-y-36">
          {sectors.map((sec, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={sec.key}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
                  isEven ? "" : "lg:flex-row-reverse"
                )}
              >
                {/* Visual Side */}
                <Reveal direction={isEven ? "left" : "right"} className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(30,36,75,0.08)] border border-[#E4E7F2] group hover:shadow-[0_25px_60px_rgba(43,125,220,0.14)] transition-all duration-500">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F28]/50 via-transparent to-transparent" />

                    {/* Floating Stat Badge */}
                    <div
                      className={cn(
                        "absolute bottom-4 sm:bottom-6 px-4 py-2 rounded-full text-white text-xs font-bold shadow-md bg-gradient-to-r backdrop-blur-md border border-white/20",
                        dir === "rtl" ? "right-4 sm:right-6" : "left-4 sm:left-6",
                        sec.gradient
                      )}
                    >
                      {sec.stat}
                    </div>
                  </div>
                </Reveal>

                {/* Text Side */}
                <Reveal direction={isEven ? "right" : "left"} className="w-full lg:w-1/2 flex flex-col">
                  {/* Badge */}
                  <span className="text-xs font-extrabold tracking-widest text-[#5B43D6] uppercase mb-3">
                    {sec.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1E244B] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {sec.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#5E647A] leading-relaxed mb-6">
                    {sec.desc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {sec.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-[#F8FAFD] transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#28B7C7] flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1E244B]">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-[#E4E7F2]">
                    {sec.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-bold transition-colors"
                        style={{
                          background: "rgba(91,67,214,0.06)",
                          color: "#5B43D6",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
