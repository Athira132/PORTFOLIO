"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certificationsList = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Ethical Hacking",
      issuer: "NPTEL",
      description: "Completed a professional certification covering ethical hacking concepts, cybersecurity fundamentals, network security, and penetration testing techniques.",
      status: "Completed",
      badge: "Verified",
    },
    {
      icon: <Award size={24} />,
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      description: "Completed Python Essentials covering programming fundamentals, data structures, functions, object-oriented programming, and problem-solving.",
      status: "Completed",
      badge: "Verified",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
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
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Professional certifications and continuous learning that strengthen my technical expertise and development skills.
          </p>
        </div>

        {/* Certifications Grid - 2 cards per row on desktop & tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.title}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-electric-blue/30 hover:shadow-2xl hover:shadow-electric-blue/5 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Soft blue glow on hover */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-electric-blue/5 blur-3xl group-hover:bg-electric-blue/15 transition-colors duration-500" />
              
              <div>
                {/* Header Information */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue group-hover:rotate-[8deg] transition-transform duration-300">
                    {cert.icon}
                  </div>
                  
                  {/* Verified Badge */}
                  <span className="text-[10px] font-mono font-semibold text-electric-blue uppercase tracking-widest bg-electric-blue/5 border border-electric-blue/20 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_10px_rgba(47,128,255,0.05)] group-hover:shadow-[0_0_15px_rgba(47,128,255,0.2)] group-hover:bg-electric-blue/10 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                    {cert.badge}
                  </span>
                </div>

                {/* Issuing Organization */}
                <span className="text-xs font-mono font-medium text-text-muted uppercase tracking-widest block mb-2">
                  {cert.issuer}
                </span>

                {/* Title */}
                <h3 className="font-space font-bold text-xl md:text-2xl text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-2 border-t border-white/5 pt-6 text-xs text-white/70 font-mono mt-auto">
                <CheckCircle2 size={14} className="text-electric-blue" />
                <span>Status: <span className="text-white font-medium">{cert.status}</span></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
