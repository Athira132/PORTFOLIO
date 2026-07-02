"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Sparkles, Search, Megaphone, Palette, Video, Monitor } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom responsive website development and complex full-stack MERN applications built with React, Node.js, Express, and MongoDB. Optimized for performance and scalability.",
      features: ["MERN Stack Applications", "React & Next.js Frontend", "Scalable Database Layers"],
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Clean design systems, interactive prototypes, and modern interface designs. Focused on crafting intuitive user paths and responsive grids using Figma.",
      features: ["User Experience Mapping", "Responsive UI Wireframing", "Figma Interactive Design"],
    },
    {
      icon: <Sparkles size={24} />,
      title: "Landing Pages",
      description: "High-impact portfolio websites, conversion-focused landing pages, and minimal business websites designed to build your unique digital presence.",
      features: ["Personal Portfolio Sites", "High-Converting Landers", "Modern Business Interfaces"],
    },
    {
      icon: <Search size={24} />,
      title: "SEO & Branding",
      description: "Rigorous technical search engine optimization and digital identity design to improve ranking, speed scores, and organic brand visibility.",
      features: ["Technical SEO Optimization", "Core Web Vitals Audit", "Consistent Brand Guidelines"],
    },
    {
      icon: <Megaphone size={24} />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies, paid campaigns, conversion rate audits, and analytics dashboards to track user engagement.",
      features: ["Paid Campaign Strategy", "Conversion Rate Audits", "Detailed Analytics Tracking"],
    },
    {
      icon: <Palette size={24} />,
      title: "Graphic Design",
      description: "Premium visual assets, custom logo designs, pitch decks, and digital illustrations crafted to represent your unique brand value.",
      features: ["Custom Brand Identity", "Vector Logo Designs", "Premium Pitch Decks"],
    },
    {
      icon: <Video size={24} />,
      title: "Video Editing",
      description: "Dynamic video editing, motion graphics, promo videos, and social media media reels to engage your target audience.",
      features: ["Social Reels & Promos", "Dynamic Motion Graphics", "Audio Engineering & Sync"],
    },
    {
      icon: <Monitor size={24} />,
      title: "Responsive Websites",
      description: "Pixel-perfect mobile-first designs optimized for all screens, standard cross-browser support, and high performance.",
      features: ["Mobile-First Development", "Cross-Browser Testing", "Core Web Vitals Checked"],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Capabilities
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              SERVICES
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Providing high-end end-to-end design, development, and digital marketing strategies.
          </p>
        </div>

        {/* Grid of service cards - 4 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col h-full relative group overflow-hidden border border-white/5 hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-500"
            >
              {/* Subtle background glow on card hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-electric-blue/5 blur-3xl group-hover:bg-electric-blue/15 transition-colors duration-500" />
              
              {/* Service Icon */}
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-space font-bold text-xl text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features checklist */}
              <ul className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-white/80">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-electric-blue" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
