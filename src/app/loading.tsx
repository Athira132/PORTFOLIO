"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#050505] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Subtle background grids */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-electric-blue/5 rounded-full blur-[60px] pointer-events-none animate-pulse" />

      {/* Loading container */}
      <div className="flex flex-col items-center space-y-6">
        {/* Pulsing Outline Logo */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(47, 128, 255, 0.1)",
              "0 0 20px 4px rgba(47, 128, 255, 0.2)",
              "0 0 0 0 rgba(47, 128, 255, 0.1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center font-space font-extrabold text-2xl text-white bg-transparent relative"
        >
          AD
        </motion.div>

        {/* Loading Progress Bar Indicator */}
        <div className="w-24 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-electric-blue to-transparent"
          />
        </div>

        {/* Subtext */}
        <span className="font-space text-xs font-semibold uppercase tracking-widest text-white/40 animate-pulse">
          Loading Experience
        </span>
      </div>
    </div>
  );
}
