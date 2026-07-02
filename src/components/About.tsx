"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function About() {
  const stats = [
    { number: "2+", label: "Projects Completed" },
    { number: "12+", label: "Technologies" },
    { number: "2+", label: "Certifications" },
    { number: "5+", label: "Years of Learning" },
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
              ABOUT ME
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Athira is a digital architect combining clean-code practices with editorial graphic design aesthetics.
          </p>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Creative Profile Block */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden group"
            >
              {/* Outer glowing border ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/30 to-purple-glow/30 opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Inner wrapper with relative bounds */}
              <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-dark-bg border border-white/15">
                {/* Subtle blue rim light */}
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/15 to-transparent pointer-events-none z-10 opacity-70" />
                <Image
                  src="/images/profile.png"
                  alt="Athira Profile"
                  fill
                  className="object-cover brightness-[0.9] scale-105 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 380px"
                />
                
                {/* Floating Card Overlay inside */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-lg border border-white/10 flex items-center space-x-2 text-xs z-20">
                  <ShieldCheck className="text-electric-blue flex-shrink-0" size={16} />
                  <span className="font-mono text-white text-[11px]">Athira K | Creative Technologist</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Intro & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.h3 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-space font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight"
            >
              Building digital products that are fast, functional, and visually engaging.
            </motion.h3>
            
            <motion.p 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-text-muted font-light text-sm md:text-base leading-relaxed mb-4"
            >
              I create modern websites, web applications, and digital experiences that combine clean design with reliable functionality. Every project is built with a focus on performance, usability, and maintainable code.
            </motion.p>
            
            <motion.p 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-text-muted font-light text-sm md:text-base leading-relaxed mb-8"
            >
              I&apos;m passionate about turning ideas into polished products, constantly exploring new technologies and refining my development workflow to deliver better user experiences.
            </motion.p>

            {/* Glowing quote glassmorphism card */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative p-6 rounded-2xl glass-panel border border-white/5 shadow-lg shadow-electric-blue/[0.02] hover:border-electric-blue/20 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-electric-blue" />
              <p className="text-white font-space italic text-base md:text-lg pl-4">
                &ldquo;Great products aren&apos;t just built—they&apos;re carefully crafted.&rdquo;
              </p>
            </motion.div>
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
