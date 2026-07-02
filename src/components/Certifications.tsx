"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certificationsList = [
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      description: "Advanced certification covering Network Security, Vulnerability Analysis, Penetration Testing, Cryptography, and Secure Programming practices.",
      link: "#",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      description: "Comprehensive training covering Python core syntax, data structures, OOP principles, and basic scripting routines.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Credentials
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-text-muted max-w-xs mt-4 md:mt-0 font-sora font-light text-xs md:text-sm">
            Professional certifications demonstrating technical competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle accent glow in card back */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/[0.01] to-transparent pointer-events-none" />
              
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-mono font-semibold text-white/50 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-space font-bold text-xl text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* View credential link */}
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-space font-bold uppercase tracking-wider text-white/80 hover:text-electric-blue transition-colors duration-300 mt-4 self-start"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
