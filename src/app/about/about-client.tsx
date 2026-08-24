"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about";
import { VisionMissionSection } from "@/components/sections/vision-mission";
import { CoreValuesSection } from "@/components/sections/core-values";
import { AspirationsSection } from "@/components/sections/aspirations";
import { useLanguage } from "@/components/layout/language-context";
import { PageHeader } from "@/components/ui/page-header";

export function AboutClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "من نحن | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "About Us | Zybiov Multi-Activities Limited";
  }, [language]);

  const titleNode = language === "en" ? (
    <>
      About{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#2B7DDC] bg-clip-text text-transparent"
      >
        Zybiov
      </span>
    </>
  ) : (
    <>
      حول{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#2B7DDC] bg-clip-text text-transparent"
      >
        زيبيوف
      </span>
    </>
  );

  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        <PageHeader
          title={titleNode}
          description={t("aboutPage.desc")}
          tag={t("aboutPage.tag")}
          bgImage="/about-pharmacist.webp"
          breadcrumbLabel={language === "en" ? "About Us" : "من نحن"}
        />

        {/* Verbatim About Details */}
        <AboutSection />

        {/* Vision & Mission Card Layout */}
        <VisionMissionSection />

        {/* Core Values Grid */}
        <CoreValuesSection />

        {/* Future Aspirations CTA */}
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
