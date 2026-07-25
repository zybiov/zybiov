"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

export function NotFoundClientPage() {
  const { language, dir } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-[#FAFBFD] pt-24 pb-12">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(#5B43D6 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-md mx-auto px-4 text-center z-10">
          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-[#E4E7F2] shadow-[0_12px_40px_rgba(91,67,214,0.06)] flex items-center justify-center mx-auto mb-8 relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-[#5B43D6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FileQuestion className="w-10 h-10 sm:w-12 sm:h-12 text-[#5B43D6] animate-pulse" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#1E244B] mb-4 tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            404
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-[#1E244B] mb-3"
            style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}
          >
            {language === "en" ? "Page Not Found" : "الصفحة غير موجودة"}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-sm sm:text-base text-[#5E647A] leading-relaxed mb-8 max-w-sm mx-auto"
          >
            {language === "en"
              ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
              : "الصفحة التي تبحث عنها قد تكون تمت إزالتها، أو تم تغيير اسمها، أو أنها غير متاحة مؤقتاً."}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-8 text-sm"
              style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
            >
              <ArrowLeft className={cn("w-4 h-4 transition-transform duration-200", dir === "rtl" && "rotate-180")} />
              {language === "en" ? "Return Home" : "العودة للرئيسية"}
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
