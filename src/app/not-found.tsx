"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-white overflow-hidden p-6">
      <BackgroundEffects />
      
      <div className="max-w-md w-full text-center z-10 glass-panel p-10 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative">
        {/* Glow accent */}
        <div className="absolute -inset-px bg-gradient-to-tr from-electric-blue/10 to-purple-glow/10 rounded-3xl blur opacity-30 -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-space font-extrabold text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-soft-cyan tracking-tight mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-space font-bold text-xl md:text-2xl text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-text-muted font-light text-sm mb-8 leading-relaxed"
        >
          The digital experience you are looking for has shifted or doesn&apos;t exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-electric-blue hover:bg-electric-blue-dark text-white font-space font-bold tracking-wider text-sm transition-all duration-300 shadow-lg shadow-electric-blue/20 hover:scale-[1.02]"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
