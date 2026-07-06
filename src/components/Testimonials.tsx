"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Heading - Kept completely static & fixed in place */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Reviews
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              TESTIMONIALS
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm">
            What clients and collaborators say about working with me.
          </p>
        </div>

        {/* Continuous Infinite Testimonial Marquee Carousel - Animating only the cards */}
        <div className="w-full overflow-hidden mask-marquee py-4 mt-12 relative">
          <div className="flex space-x-6 animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] w-max select-none cursor-grab active:cursor-grabbing">
            
            {/* First Set of Testimonials */}
            {testimonialsData.map((test, idx) => (
              <div
                key={`first-${test.name}-${idx}`}
                className="w-[300px] md:w-[360px] flex-shrink-0 glass-panel p-8 rounded-2xl flex flex-col relative group overflow-hidden border border-white/5 hover:border-electric-blue/20 transition-all duration-300"
              >
                {/* Quote icon watermark */}
                <div className="absolute right-6 top-6 text-white/5 group-hover:text-electric-blue/10 transition-colors duration-300 pointer-events-none">
                  <Quote size={40} />
                </div>

                {/* Star rating rendering */}
                <div className="flex items-center space-x-1 mb-4 text-[#F7DF1E] pointer-events-none">
                  {Array.from({ length: test.stars }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                {/* Quote content */}
                <blockquote className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-8 flex-grow">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                  {/* Circular profile photo */}
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
              </div>
            ))}

            {/* Duplicated Set for Seamless Infinite Scrolling */}
            {testimonialsData.map((test, idx) => (
              <div
                key={`second-${test.name}-${idx}`}
                className="w-[300px] md:w-[360px] flex-shrink-0 glass-panel p-8 rounded-2xl flex flex-col relative group overflow-hidden border border-white/5 hover:border-electric-blue/20 transition-all duration-300"
              >
                {/* Quote icon watermark */}
                <div className="absolute right-6 top-6 text-white/5 group-hover:text-electric-blue/10 transition-colors duration-300 pointer-events-none">
                  <Quote size={40} />
                </div>

                {/* Star rating rendering */}
                <div className="flex items-center space-x-1 mb-4 text-[#F7DF1E] pointer-events-none">
                  {Array.from({ length: test.stars }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                {/* Quote content */}
                <blockquote className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-8 flex-grow">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                  {/* Circular profile photo */}
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
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
