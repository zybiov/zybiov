"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #5B43D6 0%, #2B7DDC 50%, #28B7C7 100%)",
      }}
    />
  );
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { dir } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed bottom-6 ${dir === "rtl" ? "right-6" : "left-6"} z-[200] w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_8px_24px_rgba(91,67,214,0.3)] hover:shadow-[0_12px_32px_rgba(91,67,214,0.45)] transition-shadow duration-200`}
          style={{
            background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
          }}
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
