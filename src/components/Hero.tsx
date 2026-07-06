"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Cpu, Layers } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy, Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tagline / intro */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 text-electric-blue text-xs font-semibold uppercase tracking-wider mb-6 self-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
            <span>aathi.dev</span>
          </motion.div>

          {/* Huge Editorial Headings */}
          <motion.h1
            variants={itemVariants}
            className="font-space font-extrabold text-5xl md:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 text-white"
          >
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-soft-cyan to-purple-glow">
              DIGITAL
            </span>{" "}
            <br />
            EXPERIENCES
          </motion.h1>

          {/* Intro text */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted max-w-xl mb-10 leading-relaxed font-sora font-light"
          >
            Hi, I&apos;m <span className="text-white font-medium">Athira K</span>. I&apos;m a Full Stack Web Developer passionate about building responsive websites, scalable web applications, and digital experiences that combine creativity with modern technology.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group px-6 py-3.5 rounded-full bg-electric-blue text-white hover:bg-electric-blue-dark font-space font-bold tracking-wide transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-electric-blue/25 hover:shadow-electric-blue/40 hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <a
              href="/resume.pdf"
              download="Athira_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-space font-bold tracking-wide transition-all duration-300 hover:scale-[1.02]"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full border border-electric-blue/40 hover:border-electric-blue text-electric-blue hover:text-white hover:bg-electric-blue/10 font-space font-bold tracking-wide transition-all duration-300 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait, code card overlay, floating tech badges */}
        <div className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Base Glowing Radial Circle */}
          <div className="absolute w-[350px] h-[350px] bg-electric-blue/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
          <div className="absolute w-[250px] h-[250px] bg-purple-glow/10 rounded-full blur-[60px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

          {/* Main Floating Dev Portrait with editorial overlaps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative w-[300px] h-[390px] md:w-[350px] md:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-electric-blue/10 animate-float"
          >
            {/* Subtle blue rim light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/15 to-transparent pointer-events-none z-10 opacity-70" />
            <Image
              src="/images/profile-new.png"
              alt="Athira Developer Portrait"
              fill
              className="object-cover brightness-[0.9] scale-105 hover:scale-100 transition-transform duration-700"
              sizes="(max-width: 768px) 300px, 350px"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />
          </motion.div>

          {/* Floating UI Elements & Mockups */}

          {/* Tech Card Overlay: Terminal / Code */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 -right-2 md:-right-8 glass-panel px-4 py-3 rounded-xl flex items-center space-x-3 border border-white/10 shadow-lg text-xs animate-float-delayed"
          >
            <Terminal className="text-electric-blue animate-pulse" size={16} />
            <div className="font-mono text-left text-[10px]">
              <span className="text-electric-blue">const</span> dev = <span className="text-purple-glow">{`{`}</span> <br />
              &nbsp;&nbsp;name: <span className="text-soft-cyan">&apos;Athira K&apos;</span>, <br />
              &nbsp;&nbsp;role: <span className="text-soft-cyan">&apos;Full Stack&apos;</span> <br />
              <span className="text-purple-glow">{`}`}</span>;
            </div>
          </motion.div>

          {/* Feature Badges floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-1/4 -left-4 md:-left-8 w-10 h-10 rounded-lg bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-electric-blue shadow-lg animate-float"
          >
            <Cpu size={20} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute top-12 right-6 md:right-10 w-8 h-8 rounded-lg bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-soft-cyan shadow-lg animate-float-delayed"
          >
            <Layers size={16} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
