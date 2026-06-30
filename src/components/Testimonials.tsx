"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, Apex Ventures",
      quote: "Athira&apos;s unique combination of visual design sense and robust development capabilities was a game-changer for our SaaS dashboard. She understood the vision and delivered a premium product.",
      avatarInitials: "SJ",
    },
    {
      name: "Marcus Vance",
      role: "Product Director, VibeChat",
      quote: "The mobile UI work is absolutely stunning. Athira delivered clean, fully working React components, and her project management throughout the launch process was stellar.",
      avatarInitials: "MV",
    },
    {
      name: "Clara Croft",
      role: "Founder, Aura Studios",
      quote: "aathi.dev transformed our digital presence completely. The loading speed of the site, editorial layouts, and animations have already drawn rave reviews from our clients.",
      avatarInitials: "CC",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl flex flex-col relative group overflow-hidden"
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
                {/* Visual Avatar with letters */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-electric-blue to-purple-glow flex items-center justify-center font-bold text-xs text-white">
                  {test.avatarInitials}
                </div>
                <div>
                  <cite className="not-italic font-space font-bold text-sm text-white block">
                    {test.name}
                  </cite>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider block mt-0.5">
                    {test.role}
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
