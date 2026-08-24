"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertiseSection } from "@/components/sections/expertise";
import { AspirationsSection } from "@/components/sections/aspirations";
import { useLanguage } from "@/components/layout/language-context";
import { PageHeader } from "@/components/ui/page-header";

export function ExpertiseClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "مجالات الخبرة | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Areas of Expertise | Zybiov Multi-Activities Limited";
  }, [language]);

  const titleNode = language === "en" ? (
    <>
      Areas of{" "}
      <span
        className="bg-gradient-to-r from-[#2B7DDC] to-[#28B7C7] bg-clip-text text-transparent"
      >
        Expertise
      </span>
    </>
  ) : (
    <>
      مجالات{" "}
      <span
        className="bg-gradient-to-r from-[#2B7DDC] to-[#28B7C7] bg-clip-text text-transparent"
      >
        الخبرة
      </span>
    </>
  );

  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        <PageHeader
          title={titleNode}
          description={t("expertisePage.desc")}
          tag={t("expertisePage.tag")}
          bgImage="/production.webp"
          breadcrumbLabel={language === "en" ? "Expertise" : "مجالات الخبرة"}
        />

        <ExpertiseSection />
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
