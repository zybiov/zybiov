"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhyZybiovSection } from "@/components/sections/why-zybiov";
import TestimonialSection from "@/components/ui/testimonials";
import { useLanguage } from "@/components/layout/language-context";
import { PageHeader } from "@/components/ui/page-header";

export function WhyUsClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "لماذا زيبوف | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Why Choose Zybiov | Zybiov Multi-Activities Limited";
  }, [language]);

  const titleNode = language === "en" ? (
    <>
      Why Choose{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#28B7C7] bg-clip-text text-transparent"
      >
        Zybiov
      </span>
    </>
  ) : (
    <>
      لماذا تختار{" "}
      <span
        className="bg-gradient-to-r from-[#5B43D6] to-[#28B7C7] bg-clip-text text-transparent"
      >
        زيبوف
      </span>
    </>
  );

  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        <PageHeader
          title={titleNode}
          description={language === "en" ? "Discover how our global partnerships, full compliance, and professional management make us the trusted distributor in healthcare." : "اكتشف كيف تجعلنا شراكاتنا العالمية والامتثال الكامل والإدارة المهنية الموزع الموثوق به في مجال الرعاية الصحية."}
          tag={language === "en" ? "Our Advantages" : "مميزاتنا"}
          bgImage="/advanced-research.png"
          breadcrumbLabel={language === "en" ? "Why Zybiov" : "لماذا زيبوف"}
        />

        <WhyZybiovSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
