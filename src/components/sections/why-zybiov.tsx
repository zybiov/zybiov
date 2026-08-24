"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Globe2, Settings2, TrendingUp, FileCheck, Snowflake, Award, ShieldCheck, FileHeart } from "lucide-react";
import { useLanguage } from "../layout/language-context";

const reasons = [
  {
    icon: Globe2,
    titleKey: "why.r1Title",
    descKey: "why.r1Desc",
    gradient: "linear-gradient(135deg, #5B43D6, #4A31C0)",
  },
  {
    icon: Settings2,
    titleKey: "why.r2Title",
    descKey: "why.r2Desc",
    gradient: "linear-gradient(135deg, #2B7DDC, #1a6bc4)",
  },
  {
    icon: TrendingUp,
    titleKey: "why.r3Title",
    descKey: "why.r3Desc",
    gradient: "linear-gradient(135deg, #28B7C7, #1a9baa)",
  },
  {
    icon: FileCheck,
    titleKey: "why.r4Title",
    descKey: "why.r4Desc",
    gradient: "linear-gradient(135deg, #5E35B1, #4527A0)",
  },
];

const badges = [
  {
    icon: Award,
    titleEn: "WHO-GMP Sourced",
    titleAr: "مصادر معتمدة من GMP",
    descEn: "Sourcing exclusively from certified manufacturers ensuring world-class production quality.",
    descAr: "التوريد حصرياً من مصانع معتمدة تضمن أعلى مستويات جودة الإنتاج العالمية.",
    lightBg: "rgba(91,67,214,0.04)",
    borderColor: "rgba(91,67,214,0.08)",
  },
  {
    icon: Snowflake,
    titleEn: "Validated Cold Chain",
    titleAr: "سلسلة تبريد معتمدة",
    descEn: "Temperature-controlled logistics (2°C to 8°C) to secure molecular and generic efficacy.",
    descAr: "لوجستيات مبردة ومحكمة الحرارة (من 2 إلى 8 درجات) لضمان فاعلية الأدوية والمستلزمات.",
    lightBg: "rgba(43,125,220,0.04)",
    borderColor: "rgba(43,125,220,0.08)",
  },
  {
    icon: ShieldCheck,
    titleEn: "ISO 9001:2015 QMS",
    titleAr: "شهادة آيزو 9001:2015",
    descEn: "Strict management systems ensuring service safety, transparency, and operational standards.",
    descAr: "أنظمة إدارة جودة صارمة لضمان سلامة الخدمات وشفافية العمليات التشغيلية.",
    lightBg: "rgba(40,183,199,0.04)",
    borderColor: "rgba(40,183,199,0.08)",
  },
  {
    icon: FileHeart,
    titleEn: "Ministry & FDA Clearance",
    titleAr: "تراخيص وزارة الصحة والغذاء",
    descEn: "Full compliance and licensing verification before import, distribution, and local marketing.",
    descAr: "تراخيص رسمية ومطابقة كاملة للوائح والتشريعات قبل الاستيراد والتسويق المحلي.",
    lightBg: "rgba(94,53,177,0.04)",
    borderColor: "rgba(94,53,177,0.08)",
  },
];

export function WhyZybiovSection() {
  const { language, t, dir } = useLanguage();

  return (
    <section
      id="why"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">{t("why.badge")}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ color: "#1E244B", fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}>
                {t("why.title")}{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {t("why.titleAccent")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "#5E647A" }}>
                {t("why.sub")}
              </p>
            </Reveal>

            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-col gap-4 sm:gap-5">
                {reasons.map((reason) => (
                  <motion.div
                    key={reason.titleKey}
                    variants={fadeUpItem}
                    whileHover={{ x: dir === "rtl" ? -4 : 4 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border"
                    style={{
                      background: "#FAFBFD",
                      borderColor: "#E4E7F2",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ background: reason.gradient }}
                    >
                      <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[15px] sm:text-[16px] font-bold mb-1.5" style={{ color: "#1E244B" }}>
                        {t(reason.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5E647A" }}>
                        {t(reason.descKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Right: Image collage */}
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large top */}
              <div className="relative rounded-3xl overflow-hidden col-span-2" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/expert-team.webp"
                  alt="Zybiov Multidisciplinary Pharmaceutical Research Team"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(30,36,75,0.5) 100%)"
                }} />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">{t("why.collageTeam")}</span>
                </div>
              </div>

              {/* Bottom-left */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/gmp-facilities.webp"
                  alt="GMP Certified Pharmaceutical Production Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(30,36,75,0.55) 100%)"
                }} />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageGmp")}</span>
                </div>
              </div>

              {/* Bottom-right */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/lab-digital.webp"
                  alt="Digital health lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(30,36,75,0.55) 100%)"
                }} />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageDigital")}</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* ─── Premium Trust & Compliance Badges ─── */}
        <div className="mt-20 pt-16 border-t border-[#E4E7F2]">
          <Reveal className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex">
              {language === "en" ? "Compliance & Standards" : "الامتثال والمعايير"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E244B]">
              {language === "en" ? "Uncompromising Quality Standards" : "معايير جودة لا نقبل المساومة عليها"}
            </h3>
            <p className="text-sm sm:text-base max-w-xl mx-auto mt-3 text-[#5E647A]">
              {language === "en" 
                ? "Every pharmaceutical product, medical device, and logistics process adheres to global health requirements."
                : "يلتزم كل منتج صيدلاني وجهاز طبي وعملية لوجستية بالمتطلبات الصحية العالمية."}
            </p>
          </Reveal>

          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl border flex flex-col items-center text-center justify-between"
                  style={{
                    background: badge.lightBg,
                    borderColor: badge.borderColor,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#5B43D6]/10 flex items-center justify-center mb-4 text-[#5B43D6]">
                      <badge.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#1E244B] mb-2">
                      {language === "en" ? badge.titleEn : badge.titleAr}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#5E647A] px-2">
                      {language === "en" ? badge.descEn : badge.descAr}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-[#5B43D6] rounded-full mt-4" />
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
