"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";
import { useLanguage } from "@/components/layout/language-context";
import { PageHeader } from "@/components/ui/page-header";

export function ContactClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "تواصل معنا | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Contact Us | Zybiov Multi-Activities Limited";
  }, [language]);

  const titleNode = language === "en" ? (
    <>
      Get In{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#2B7DDC] bg-clip-text text-transparent"
      >
        Touch
      </span>
    </>
  ) : (
    <>
      تواصل{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#2B7DDC] bg-clip-text text-transparent"
      >
        معنا
      </span>
    </>
  );

  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        <PageHeader
          title={titleNode}
          description={t("contactPage.desc")}
          tag={t("contactPage.tag")}
          bgImage="/molecule.webp"
          breadcrumbLabel={language === "en" ? "Contact Us" : "تواصل معنا"}
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
