"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Reviews
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              TESTIMONIALS
            </h2>
          </div>
          <p className="text-text-muted max-w-xs mt-4 md:mt-0 font-sora font-light text-xs md:text-sm">
            Feedback from startup founders, agency leads, and technology directors.
          </p>
        </div>

        {/* Centered 2-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={test.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl flex flex-col relative group overflow-hidden border border-white/5 hover:border-electric-blue/20 transition-all duration-300"
            >
              {/* Quote icon watermark */}
              <div className="absolute right-6 top-6 text-white/5 group-hover:text-electric-blue/10 transition-colors duration-300">
                <Quote size={40} />
              </div>

              {/* Quote content */}
              <blockquote className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-8 flex-grow">
                &ldquo;{test.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                {/* Circular profile photo with hover scale and soft blue glow */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-electric-blue/40 shadow-[0_0_15px_rgba(47,128,255,0.05)] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all duration-300 flex-shrink-0">
                  <Image
                    src={test.image}
                    alt={test.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <cite className="not-italic font-space font-bold text-sm text-white block hover:text-electric-blue transition-colors">
                    {test.instagram ? (
                      <a href={test.instagram} target="_blank" rel="noreferrer">
                        {test.name}
                      </a>
                    ) : (
                      test.name
                    )}
                  </cite>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider block mt-0.5">
                    {test.company ? `${test.role}, ${test.company}` : test.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
