"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { AspirationsSection } from "@/components/sections/aspirations";
import { QuickActionsSection } from "@/components/sections/quick-actions";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";
import { cn } from "@/lib/utils";

// Partner data — real global pharma & healthcare companies with inline SVG wordmarks
const partners = [
  {
    name: "Pfizer",
    domain: "pfizer.com",
    // Pfizer blue wordmark — simple bold sans-serif
    svg: (
      <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-0.5">Pfizer</text>
      </svg>
    ),
  },
  {
    name: "Novartis",
    domain: "novartis.com",
    svg: (
      <svg viewBox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="currentColor" letterSpacing="-0.3">Novartis</text>
      </svg>
    ),
  },
  {
    name: "Roche",
    domain: "roche.com",
    svg: (
      <svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-0.3">Roche</text>
      </svg>
    ),
  },
  {
    name: "AstraZeneca",
    domain: "astrazeneca.com",
    svg: (
      <svg viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="currentColor" letterSpacing="-0.3">AstraZeneca</text>
      </svg>
    ),
  },
  {
    name: "Sanofi",
    domain: "sanofi.com",
    svg: (
      <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-0.3">Sanofi</text>
      </svg>
    ),
  },
  {
    name: "GSK",
    domain: "gsk.com",
    svg: (
      <svg viewBox="0 0 72 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="30" fill="currentColor" letterSpacing="0">GSK</text>
      </svg>
    ),
  },
  {
    name: "Bayer",
    domain: "bayer.com",
    svg: (
      <svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-0.3">Bayer</text>
      </svg>
    ),
  },
  {
    name: "AbbVie",
    domain: "abbvie.com",
    svg: (
      <svg viewBox="0 0 112 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="27" fill="currentColor" letterSpacing="-0.3">AbbVie</text>
      </svg>
    ),
  },
  {
    name: "Merck",
    domain: "merck.com",
    svg: (
      <svg viewBox="0 0 104 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-0.3">Merck</text>
      </svg>
    ),
  },
  {
    name: "Haleon",
    domain: "haleon.com",
    svg: (
      <svg viewBox="0 0 114 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="27" fill="currentColor" letterSpacing="-0.3">Haleon</text>
      </svg>
    ),
  },
  {
    name: "Alexion",
    domain: "alexion.com",
    svg: (
      <svg viewBox="0 0 118 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="27" fill="currentColor" letterSpacing="-0.3">Alexion</text>
      </svg>
    ),
  },
  {
    name: "Grifols",
    domain: "grifols.com",
    svg: (
      <svg viewBox="0 0 112 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="27" fill="currentColor" letterSpacing="-0.3">Grifols</text>
      </svg>
    ),
  },
];

export function HomeClientPage() {
  const { t, language, dir } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "شركة زيبوف للأنشطة المتعددة المحدودة | استيراد وتوزيع الأدوية والمستلزمات الطبية في السودان"
      : "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution — Sudan";
  }, [language]);

  const expertiseSectors = [
    {
      key: "1",
      image: "/pharmaceutical-products.webp",
      title: t("expertise.sector1Title"),
      desc: t("expertise.sector1Desc"),
      stat: t("expertise.sector1Stat"),
      tags: language === "en"
        ? ["Branded & Generic", "Importation", "Distribution", "Quality Control"]
        : ["مبتكرة وجنيسية", "استيراد", "توزيع", "رقابة جودة"],
      gradient: "from-[#5B43D6] to-[#2B7DDC]",
      iconGradient: "linear-gradient(135deg, #5B43D6, #2B7DDC)",
    },
    {
      key: "2",
      image: "/medical-equipment.webp",
      title: t("expertise.sector2Title"),
      desc: t("expertise.sector2Desc"),
      stat: t("expertise.sector2Stat"),
      tags: language === "en"
        ? ["Diagnostic Devices", "Surgical Equipment", "Lab Instruments", "Imaging"]
        : ["أجهزة تشخيص", "معدات جراحية", "معدات مختبرية", "تصوير طبي"],
      gradient: "from-[#2B7DDC] to-[#28B7C7]",
      iconGradient: "linear-gradient(135deg, #2B7DDC, #28B7C7)",
    },
    {
      key: "3",
      image: "/nutritional-supplements.webp",
      title: t("expertise.sector3Title"),
      desc: t("expertise.sector3Desc"),
      stat: t("expertise.sector3Stat"),
      tags: language === "en"
        ? ["Vitamins & Minerals", "Herbal Formulas", "Sports Nutrition", "Wellness"]
        : ["فيتامينات", "تركيبات عشبية", "تغذية رياضية", "العافية"],
      gradient: "from-[#28B7C7] to-[#5B43D6]",
      iconGradient: "linear-gradient(135deg, #28B7C7, #5B43D6)",
    },
  ];

  const whyFeatures = [
    {
      icon: Globe,
      title: language === "en" ? "Global Partnerships" : "شراكات عالمية",
      desc: language === "en"
        ? "Strategic alliances with internationally certified manufacturers across India, China, Germany, Japan & US."
        : "تحالفات استراتيجية مع مصنعين معتمدين دولياً.",
    },
    {
      icon: ShieldCheck,
      title: language === "en" ? "Full Compliance" : "امتثال كامل",
      desc: language === "en"
        ? "Highest standards of legal & regulatory compliance, ensuring reliable and transparent operations."
        : "أعلى معايير الامتثال القانوني والتنظيمي.",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Scalable Model" : "نموذج قابل للتوسع",
      desc: language === "en"
        ? "Flexible business model designed to adapt to regional and international market demands."
        : "نموذج أعمال مرن مصمم للتكيف مع متطلبات السوق.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Counter Statistics Strip */}
        <StatsStrip />

        {/* ── Areas of Expertise (3 sectors) ── */}
        <section
          id="expertise-home"
          className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
          style={{ background: "#F3F5FC" }}
        >
          {/* Subtle bg decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
              style={{
                background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)",
                transform: "translate(-40%, -50%)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <Reveal className="text-center mb-12 sm:mb-16">
              <span className="section-tag mb-4 sm:mb-5 inline-flex">{t("expertise.tag")}</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E244B] mb-4"
              >
                {language === "en" ? (
                  <>
                    What We{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Specialize In
                    </span>
                  </>
                ) : (
                  <>
                    ما نتخصص{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      فيه
                    </span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto">
                {t("expertise.desc")}
              </p>
            </Reveal>

            {/* 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {expertiseSectors.map((sector, idx) => (
                <Reveal key={sector.key} delay={idx * 0.1}>
                  <div className="premium-card rounded-[22px] overflow-hidden bg-white border border-[#E4E7F2] h-full flex flex-col group hover:shadow-[0_20px_60px_rgba(91,67,214,0.12)] transition-all duration-300">
                    {/* Photo */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3
                        className="text-lg sm:text-xl font-bold text-[#1E244B] mb-3"
                      >
                        {sector.title}
                      </h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-1">
                        {sector.desc}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#E4E7F2]">
                        {sector.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                            style={{
                              background: "rgba(91,67,214,0.07)",
                              color: "#5B43D6",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center">
              <Link href="/expertise" className="btn-primary">
                {t("expertise.cta")}
                <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Trusted Partners — infinite marquee ── */}
        <section className="py-12 sm:py-16 border-b border-[#E4E7F2] bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
            <Reveal className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E4E7F2]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#8892A4] whitespace-nowrap px-2">
                {language === "en" ? "Trusted Partners & Distributors" : "شركاؤنا الموثوقون"}
              </p>
              <div className="h-px flex-1 bg-[#E4E7F2]" />
            </Reveal>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, white 0%, transparent 100%)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg, white 0%, transparent 100%)" }} />
            <div className="marquee-track">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex items-center justify-center mx-10 sm:mx-14 text-[#8892A4] hover:text-[#1E244B] transition-colors duration-300 select-none"
                  title={p.name}
                >
                  {p.svg}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Zybiov ── */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
            style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <div className="flex flex-col">
                <Reveal>
                  <span className="section-tag mb-4 sm:mb-5">{t("whyChooseUs.tag")}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E244B] leading-tight mb-5 sm:mb-6"
                  >
                    {language === "en" ? (
                      <>
                        Uncompromising Commitment to{" "}
                        <span
                          style={{
                            background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          Reliability & Trust
                        </span>
                      </>
                    ) : (
                      <>
                        التزام راسخ بالـ{" "}
                        <span
                          style={{
                            background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          موثوقية والثقة
                        </span>
                      </>
                    )}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base text-[#4B5563] leading-relaxed mb-7 sm:mb-8">
                    {t("whyChooseUs.desc")}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="space-y-5 mb-8">
                    {whyFeatures.map((feat) => (
                      <div key={feat.title} className="flex items-start gap-4 rounded-xl p-4 border border-[#E4E7F2] bg-[#FAFBFD]">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, rgba(91,67,214,0.1), rgba(43,125,220,0.1))" }}
                        >
                          <feat.icon className="w-5 h-5 text-[#5B43D6]" />
                        </div>
                        <div>
                          <p className="font-bold text-[#1E244B] text-sm mb-0.5">{feat.title}</p>
                          <p className="text-xs text-[#4B5563]">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <Link href="/why-us" className="btn-primary">
                    {t("whyChooseUs.cta")}
                    <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                  </Link>
                </Reveal>
              </div>

              {/* Right: Image grid */}
              <Reveal direction="right" className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden col-span-2" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src="/expert-team.webp"
                    alt="Zybiov research team"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/40 to-transparent" />
                  <div className={cn("absolute bottom-3 sm:bottom-4", dir === "rtl" ? "right-3 sm:right-4" : "left-3 sm:left-4")}>
                    <span className="text-white font-semibold text-xs sm:text-sm">{t("whyChooseUs.expertTeam")}</span>
                  </div>
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/gmp-facilities.webp"
                    alt="GMP Certified Pharmaceutical Production Facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/50 to-transparent" />
                  <div className={cn("absolute bottom-2 sm:bottom-3", dir === "rtl" ? "right-2 sm:right-3" : "left-2 sm:left-3")}>
                    <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageGmp")}</span>
                  </div>
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/lab-digital.webp"
                    alt="Digital laboratory operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/50 to-transparent" />
                  <div className={cn("absolute bottom-2 sm:bottom-3", dir === "rtl" ? "right-2 sm:right-3" : "left-2 sm:left-3")}>
                    <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageDigital")}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Building a Healthier Future (Aspirations) ── */}
        <AspirationsSection />

        {/* ── CTA Buttons & Mini Stats (Moved Down) ── */}
        <QuickActionsSection />

        {/* ── Contact Teaser Showcase (Elevated Floating Card on Light Canvas) ── */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-[#F4F6FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden p-8 sm:p-14 lg:p-20 text-center shadow-[0_30px_90px_rgba(15,20,45,0.25)] border border-white/20"
              style={{
                background: "linear-gradient(135deg, #0D122B 0%, #161D42 45%, #0E1430 100%)",
              }}
            >
              {/* Internal glowing ambient lights */}
              <div className="absolute top-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-25 bg-gradient-to-br from-[#5B43D6] to-[#28B7C7] blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full opacity-20 bg-gradient-to-tr from-[#2B7DDC] to-[#5B43D6] blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              <div className="relative z-10 max-w-3xl mx-auto">
                <Reveal>
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                    style={{ background: "rgba(255,255,255,0.08)", color: "#28B7C7", border: "1px solid rgba(40,183,199,0.3)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28B7C7] animate-pulse" />
                    {t("contactTeaser.tag")}
                  </span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2
                    className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-5 sm:mb-6 leading-tight"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {t("contactTeaser.title")}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
                    {t("contactTeaser.desc")}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="btn-primary py-3.5 px-8 text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(91,67,214,0.4)]"
                      style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
                    >
                      {t("contactTeaser.ctaContact")}
                      <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 bg-white/10 hover:bg-white/20 border border-white/20 text-sm sm:text-base backdrop-blur-sm"
                    >
                      {t("contactTeaser.ctaAbout")}
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
