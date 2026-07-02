"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { number: "2+", label: "Projects Completed" },
    { number: "12+", label: "Technologies" },
    { number: "2+", label: "Certifications" },
    { number: "5+", label: "Years of Learning" },
  ];

  const coreFocus = [
    { icon: <Zap size={18} />, title: "Full-Stack Developer", desc: "Building robust architectures and efficient database layers." },
    { icon: <Sparkles size={18} />, title: "UI/UX Designer", desc: "Crafting beautiful interfaces with optimal user paths." },
    { icon: <Terminal size={18} />, title: "Digital Marketer", desc: "SEO, conversion rate optimization, and brand positioning." },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Introduction
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              ABOUT
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Athira is a digital architect combining clean-code practices with editorial graphic design aesthetics.
          </p>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Creative Placeholder Profile Block */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden group"
            >
              {/* Outer glowing border ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue to-purple-glow opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Inner wrapper with relative bounds */}
              <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-dark-bg border border-white/15">
                <Image
                  src="/images/developer_portrait.jpg"
                  alt="Athira Profile"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 380px"
                />
                
                {/* Floating Card Overlay inside */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-lg border border-white/10 flex items-center space-x-2 text-xs">
                  <ShieldCheck className="text-electric-blue flex-shrink-0" size={16} />
                  <span className="font-mono text-white text-[11px]">Athira K | Creative Technologist</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Intro & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="font-space font-bold text-2xl md:text-3xl text-white mb-6">
              Designing and developing modern brands and digital experiences.
            </h3>
            
            <p className="text-text-muted font-light text-sm md:text-base leading-relaxed mb-6">
              Recently graduated with an <span className="text-white font-medium">Integrated MSc in Computer Science</span> from <span className="text-white font-medium">Pondicherry Central University</span> (2021–2026), I have developed a strong practical foundation in modern web technologies through rigorous academic courses and hands-on projects.
            </p>
            
            <p className="text-text-muted font-light text-sm md:text-base leading-relaxed mb-8">
              I am passionate about full-stack web development, user experience design, and digital branding. I actively seek complex challenges where I can write clean code, design modern workflows, and learn new technical skillsets.
            </p>

            <div className="border-l-2 border-electric-blue pl-4 py-1 mb-8 italic text-white/90 text-sm md:text-base">
              &ldquo;I believe great digital experiences are built where clean code meets thoughtful design.&rdquo;
            </div>

            {/* Core Pillars List */}
            <div className="space-y-6 mb-10">
              {coreFocus.map((focus, idx) => (
                <motion.div
                  key={focus.title}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex space-x-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue flex-shrink-0">
                    {focus.icon}
                  </div>
                  <div>
                    <h4 className="font-space font-semibold text-white text-base">{focus.title}</h4>
                    <p className="text-text-muted text-xs md:text-sm font-light mt-1">{focus.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Statistics Bar - Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-electric-blue/30 transition-all duration-300"
            >
              <span className="font-space font-extrabold text-3xl md:text-5xl text-white group-hover:text-electric-blue transition-colors duration-300 mb-1">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-widest text-text-muted font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
