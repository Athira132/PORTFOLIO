"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      role: "Integrated MSc in Computer Science",
      company: "Pondicherry Central University",
      period: "2021 - 2026",
      description: "Completed a comprehensive 5-year integrated program covering Advanced Data Structures, Database Systems, Web Technologies, Object-Oriented Programming, and Software Engineering methodologies.",
    },
    {
      role: "Higher Secondary Education (Science)",
      company: "Kerala State Board",
      period: "2019 - 2021",
      description: "Specialized in Computer Science, Mathematics, Physics, and Chemistry.",
    },
    {
      role: "Secondary Education",
      company: "Kerala State Board",
      period: "2019",
      description: "Foundational secondary education with a focus on Mathematics, Science, and languages.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Education & Path
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              CAREER JOURNEY
            </h2>
          </div>
          <p className="text-text-muted max-w-xs mt-4 md:mt-0 font-sora font-light text-xs md:text-sm">
            Academic timeline and current technical trajectory.
          </p>
        </div>

        {/* Career Journey Statement */}
        <div className="mb-16 glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/[0.02] to-transparent pointer-events-none" />
          <h3 className="font-space font-bold text-lg text-white mb-3">Objective & Summary</h3>
          <p className="text-text-muted font-light text-sm leading-relaxed">
            Recently graduated Full Stack Web Developer actively seeking opportunities to contribute, learn, and build impactful digital products. Highly experienced through academic coursework and advanced personal projects (such as Kitab Bookshop Management System), with strong practical knowledge of modern web technologies.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {education.map((exp, idx) => (
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
