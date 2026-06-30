"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, TrendingUp, Paintbrush, Video, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom responsive websites and complex react web applications built with Next.js, TypeScript, and modern styling solutions. Optimised for performance and scalability.",
      features: ["React / Next.js Development", "Headless CMS Integrations", "Database & API Design"],
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Editorial-style layouts, clean design systems, and wireframes that create premium digital experiences. Built with Figma to map ideal client/user flows.",
      features: ["Interactive Mockups", "Responsive layouts", "Design System Creation"],
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Marketing",
      description: "Tailored outreach and optimization campaigns to elevate your product's audience. We focus on conversion rates and target segmentation.",
      features: ["Conversion Rate Optimization", "Audience Analysis", "Brand Positioning"],
    },
    {
      icon: <Paintbrush size={24} />,
      title: "Graphic Design",
      description: "Branding materials, typographic assets, logo concepts, and magazine-style visual architectures that communicate high value instantly.",
      features: ["Brand Identity", "Minimalist Logo Design", "Marketing Assets"],
    },
    {
      icon: <Video size={24} />,
      title: "Video Editing",
      description: "High-end content editing and motion graphics to tell your product's story visually. Tailored for promotions, product launches, or tutorials.",
      features: ["Premiere & After Effects", "Color Grading & Audio", "Motion Title Design"],
    },
    {
      icon: <Search size={24} />,
      title: "SEO",
      description: "Rigorous technical search engine optimization to make sure your website ranks on top. Fast load speeds, semantic HTML structure, and schema tags.",
      features: ["Technical Audit", "Speed Optimization", "Core Web Vitals Boost"],
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

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col h-full relative group overflow-hidden"
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
