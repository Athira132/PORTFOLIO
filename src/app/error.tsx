"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCcw, Home } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics service
    console.error("Runtime error logged in production:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-white overflow-hidden p-6">
      <BackgroundEffects />
      
      <div className="max-w-md w-full text-center z-10 glass-panel p-10 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative">
        {/* Glow accent */}
        <div className="absolute -inset-px bg-gradient-to-tr from-purple-glow/10 to-electric-blue/10 rounded-3xl blur opacity-30 -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-space font-extrabold text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-glow to-electric-blue tracking-tight mb-4"
        >
          500
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-space font-bold text-xl md:text-2xl text-white mb-4"
        >
          Something Went Wrong
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-text-muted font-light text-sm mb-8 leading-relaxed"
        >
          An unexpected error occurred while loading this page. Please try refreshing or return to the main page.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => reset()}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-electric-blue hover:bg-electric-blue-dark text-white font-space font-bold tracking-wider text-sm transition-all duration-300 shadow-lg shadow-electric-blue/20 hover:scale-[1.02] cursor-pointer"
          >
            <RefreshCcw size={16} />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-space font-bold tracking-wider text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <Home size={16} />
            <span>Go Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
