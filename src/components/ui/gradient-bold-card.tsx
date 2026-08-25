"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientBlobCardProps {
  children?: React.ReactNode;
  className?: string;
  blobGradient?: string;
  blobSize?: string;
  glowBlur?: string;
  innerClassName?: string;
}

export const GradientBlobCard: React.FC<GradientBlobCardProps> = ({
  children,
  className,
  blobGradient = "from-[#5B43D6] via-[#2B7DDC] to-[#28B7C7]",
  blobSize = "w-[220px] h-[220px]",
  glowBlur = "blur-[28px]",
  innerClassName,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl sm:rounded-3xl p-[2.5px] overflow-hidden transition-all duration-300 group hover:shadow-xl",
        className
      )}
      style={{
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.02)",
      }}
    >
      {/* Animated Gradient Blob in the background */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0 animate-blob pointer-events-none bg-gradient-to-r",
          blobSize,
          glowBlur,
          blobGradient
        )}
      />

      {/* Glassy Frosted Content Layer */}
      <div
        className={cn(
          "relative z-10 w-full h-full bg-white/92 backdrop-blur-[24px] rounded-[14px] sm:rounded-[22px] border border-white/80 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300",
          innerClassName
        )}
      >
        {children}
      </div>

      {/* Inline keyframes animation */}
      <style jsx>{`
        @keyframes blobMove {
          0% {
            transform: translate(-100%, -100%) scale(1);
          }
          25% {
            transform: translate(10%, -90%) scale(1.1);
          }
          50% {
            transform: translate(10%, 10%) scale(1);
          }
          75% {
            transform: translate(-90%, 10%) scale(1.15);
          }
          100% {
            transform: translate(-100%, -100%) scale(1);
          }
        }

        .animate-blob {
          animation: blobMove 7s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default GradientBlobCard;
