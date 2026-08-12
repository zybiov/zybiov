"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumb } from "./breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: React.ReactNode;
  description: string;
  tag: string;
  bgImage: string;
  breadcrumbLabel: string;
}

export function PageHeader({
  title,
  description,
  tag,
  bgImage,
  breadcrumbLabel,
}: PageHeaderProps) {
  return (
    <section
      className="relative py-12 sm:py-24 lg:py-28 overflow-hidden border-b border-[#E4E7F2]/80 cursor-default"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F5F7FF 100%)",
      }}
    >
      {/* Subtle Zoom-In Background Image on Page Load */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Floating Glowing Orbs (Abstract Luxury UI) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Orb 1: Indigo */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5B43D6] to-[#7C5CFC] opacity-[0.06] blur-[80px]"
        />

        {/* Orb 2: Cyan */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 20, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#28B7C7] to-[#5B43D6] opacity-[0.05] blur-[100px]"
        />

        {/* Subtle grid layout to structure background spacing */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#5B43D6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content Layer with reveal staggered animations */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <Breadcrumb
            items={[{ label: breadcrumbLabel }]}
            className="justify-center !mb-4"
          />

          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-tag inline-flex"
          >
            {tag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-5 max-w-4xl"
            style={{ fontFamily: "Manrope, sans-serif", lineHeight: 1.15 }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-[#5E647A] leading-relaxed font-medium opacity-90"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
