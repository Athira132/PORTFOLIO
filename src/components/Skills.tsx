"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillsList = [
    // Frontend
    { name: "React", category: "Frontend", color: "rgba(97, 218, 251, 0.15)", iconColor: "#61DAFB" },
    { name: "JavaScript", category: "Frontend", color: "rgba(247, 223, 30, 0.15)", iconColor: "#F7DF1E" },
    { name: "HTML5", category: "Frontend", color: "rgba(227, 79, 38, 0.15)", iconColor: "#E34F26" },
    { name: "CSS3", category: "Frontend", color: "rgba(21, 114, 182, 0.15)", iconColor: "#1572B6" },
    { name: "Responsive Design", category: "Frontend", color: "rgba(0, 242, 254, 0.15)", iconColor: "#00F2FE" },
    
    // Backend
    { name: "Node.js", category: "Backend", color: "rgba(51, 153, 51, 0.15)", iconColor: "#339933" },
    { name: "Express.js", category: "Backend", color: "rgba(128, 128, 128, 0.15)", iconColor: "#808080" },
    { name: "Python", category: "Backend", color: "rgba(55, 118, 171, 0.15)", iconColor: "#3776AB" },
    { name: "C++", category: "Backend", color: "rgba(0, 89, 156, 0.15)", iconColor: "#00599C" },
    
    // Database
    { name: "MongoDB", category: "Database", color: "rgba(71, 162, 72, 0.15)", iconColor: "#47A248" },
    { name: "MySQL", category: "Database", color: "rgba(68, 121, 161, 0.15)", iconColor: "#4479A1" },
    { name: "SQL", category: "Database", color: "rgba(0, 115, 190, 0.15)", iconColor: "#0073BE" },
    
    // Tools
    { name: "Git", category: "Tools", color: "rgba(240, 80, 50, 0.15)", iconColor: "#F05032" },
    { name: "GitHub", category: "Tools", color: "rgba(255, 255, 255, 0.15)", iconColor: "#FFFFFF" },
    { name: "VS Code", category: "Tools", color: "rgba(0, 122, 204, 0.15)", iconColor: "#007ACC" },
  ];

  // Group by category to build an organized layout
  const categories = ["Frontend", "Backend", "Database", "Tools"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" } as any,
    },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Stack
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              SKILLS
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Expertise built across development, database design, marketing, and graphic visual systems.
          </p>
        </div>

        {/* Categories split grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => {
            const skillsInCat = skillsList.filter((s) => s.category === cat || (cat === "Core" && (s.category === "Core" || s.category === "Frontend" || s.category === "Backend" || s.category === "Design" || s.category === "Tools") === false));
            
            // Wait, we don't need to filter if we just show them directly. But categorizing looks extremely premium!
            // Let's get items in this category
            const filteredSkills = skillsList.filter((s) => s.category === cat);
            if (filteredSkills.length === 0) return null;

            return (
              <div key={cat} className="glass-panel p-8 rounded-2xl flex flex-col space-y-6 border border-white/5">
                <span className="font-space text-xs font-bold uppercase tracking-wider text-electric-blue border-b border-white/5 pb-2">
                  {cat === "Core" ? "Development Foundations" : cat}
                </span>

                <div className="grid grid-cols-2 gap-4">
                  {filteredSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden cursor-pointer"
                      style={{ "--hover-glow": skill.color } as React.CSSProperties}
                    >
                      {/* Subtle hover color block in back */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                        style={{ backgroundColor: skill.color }}
                      />

                      {/* Customized Small Color dot representation */}
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: skill.iconColor }}
                      />

                      <span className="font-space text-sm font-semibold text-white tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
