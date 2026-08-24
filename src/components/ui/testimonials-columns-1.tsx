"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-7 sm:p-8 rounded-[24px] border border-[#E4E7F2] bg-white shadow-[0_10px_30px_rgba(30,36,75,0.05)] hover:border-[#2B7DDC]/30 hover:shadow-xl transition-all duration-300 max-w-xs w-full flex flex-col justify-between"
                  key={i}
                >
                  <div>
                    {/* 5-Star Rating */}
                    <div className="flex gap-1 mb-4 text-[#F5A623]">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-[#4A5568] leading-relaxed italic">
                      "{text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#F0F3FA]">
                    <img
                      width={42}
                      height={42}
                      src={image}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 rounded-full object-cover border border-[#E4E7F2] shadow-sm flex-shrink-0"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-sm text-[#1E244B]">{name}</div>
                      <div className="text-xs text-[#8892A4] font-medium">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
