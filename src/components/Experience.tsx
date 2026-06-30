"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Full-Stack Developer",
      company: "Digital Horizon Studio",
      period: "2024 - Present",
      description: "Directing the engineering team to deploy fast, scalable web software using Next.js, Node.js, and GCP. Standardized design-system component workflows that slashed UI revisions by 40%.",
    },
    {
      role: "Freelance Developer & Brand Designer",
      company: "aathi.dev Studio",
      period: "2022 - 2024",
      description: "Delivered responsive web interfaces, branding guidelines, and conversion-optimized landing pages for over 15 startups globally. Maintained direct client communications and project scoping.",
    },
    {
      role: "UI Designer & Frontend Intern",
      company: "Vivid Interactive",
      period: "2021 - 2022",
      description: "Scaffolded mockups and wireframes in Figma. Coordinated with backend engineers to build interactive React components, improving layout load speeds and accessibility scores.",
    },
    {
      role: "Digital Creator & Video Editor",
      company: "Self-Employed",
      period: "2020 - 2021",
      description: "Designed marketing banners, produced product promo videos with Premiere and After Effects, and managed SEO optimization tasks for local businesses.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Career Path
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-text-muted max-w-xs mt-4 md:mt-0 font-sora font-light text-xs md:text-sm">
            Professional trajectory in full-stack development, design systems, and digital marketing.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-start group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border border-white/20 bg-dark-bg flex items-center justify-center group-hover:border-electric-blue group-hover:bg-electric-blue transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 group-hover:opacity-100" />
              </div>

              {/* Top Details Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-3">
                <div>
                  <h3 className="font-space font-bold text-lg md:text-xl text-white group-hover:text-electric-blue transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-text-muted mt-1 inline-block">
                    {exp.company}
                  </span>
                </div>
                
                {/* Period Badge */}
                <span className="text-xs font-mono font-semibold text-electric-blue bg-electric-blue/10 border border-electric-blue/20 px-3 py-1 rounded-full mt-2 md:mt-0 self-start md:self-auto">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
