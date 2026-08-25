"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { t, language, dir } = useLanguage();

  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const highlights = [
    t("about.h1Desc"),
    t("about.h2Desc"),
    t("about.h3Desc"),
    t("about.h4Desc"),
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <Reveal direction="left" className="relative w-full h-full order-2 lg:order-1">
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 2000 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(91,67,214,0.15)] bg-white border border-white/40 cursor-crosshair"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Inner wrapper for image scaling */}
              <div className="relative w-full" style={{ aspectRatio: "16/10", transform: "translateZ(30px)" }}>
                <Image
                  src="/about-us.webp"
                  alt="Zybiov state-of-the-art pharmaceutical distribution and medical logistics center"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Glossy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E244B]/30 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />

                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Content */}
          <div className="flex flex-col order-1 lg:order-2">
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">{t("about.whoWeAre")}</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 text-[#1E244B]">
                <span className="block text-sm uppercase tracking-wider text-[#5B43D6] mb-2 font-bold">
                  {t("about.titleLeading")}
                </span>
                {t("about.titleMain")}{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {t("about.titleHighlight")}
                </span>
              </h2>
            </Reveal>

            {/* Plain paragraphs — no card, no box, no border */}
            <div className="space-y-4 mb-6 sm:mb-8">
              <Reveal delay={0.15}>
                <p className="text-[15px] sm:text-[15px] md:text-base leading-[1.8] text-[#111827]">
                  {t("about.desc1")}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-[15px] sm:text-[15px] md:text-base leading-[1.8] text-[#111827]">
                  {t("about.desc2")}
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-[15px] sm:text-[15px] md:text-base leading-[1.8] text-[#111827]">
                  {t("about.desc3")}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-[15px] sm:text-[15px] md:text-base leading-[1.8] text-[#111827]">
                  {t("about.desc4")}
                </p>
              </Reveal>
            </div>

            <StaggerContainer staggerDelay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7F2]">
                {highlights.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUpItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#5B43D6]" />
                    <span className="text-sm leading-snug font-semibold text-[#111827]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/why-us"
                className={cn("btn-primary text-sm", dir === "rtl" && "flex-row-reverse")}
              >
                {t("whyChooseUs.cta")}
                <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
