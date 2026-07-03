"use client";

import React from "react";
import { motion } from "framer-motion";

// Official Tech SVG Icons
const HTML5Icon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#E34F26]" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.7 5.7H5.3l.8 8.8 5.9 1.6 5.9-1.6z" />
    <path d="M12 8.4H8.7l.2 2.7h3.1v2.7L12 14.5l-2.4-.7-.1-1.7H6.7l.2 4.1L12 17.6l5.1-1.4.7-7.8z" fill="#FFF" />
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#1572B6]" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.7 5.7H5.3l.8 8.8 5.9 1.6 5.9-1.6z" />
    <path d="M12 8.4h3.3l-.3 3.6-3 1-3-1-.1-1.7H6.2l.2 4.1 5.6 1.5 5.6-1.5.6-6.8z" fill="#FFF" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#F7DF1E]" fill="currentColor">
    <path d="M0 0h24v24H0z" />
    <path d="M12.9 16.6c.4.8.9 1.3 1.8 1.3.8 0 1.2-.4 1.2-1 0-.6-.4-.9-1.3-1.3l-.9-.4c-1.3-.6-2.2-1.3-2.2-2.8 0-1.6 1.3-2.8 3.2-2.8 1.6 0 2.6.8 3.2 2.1l-1.6 1c-.3-.6-.7-.9-1.4-.9-.7 0-1 .4-1 .8 0 .5.3.7 1.1 1l.9.4c1.6.7 2.4 1.4 2.4 3 0 1.8-1.4 3-3.6 3-2.3 0-3.6-1.2-4.2-2.8zm-4.7-3.9v5.9H6.1v-5.9z" fill="#000" />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3178C6]" fill="currentColor">
    <path d="M0 0h24v24H0z" />
    <path d="M10.2 16.6c.4.8.9 1.3 1.8 1.3.8 0 1.2-.4 1.2-1 0-.6-.4-.9-1.3-1.3l-.9-.4c-1.3-.6-2.2-1.3-2.2-2.8 0-1.6 1.3-2.8 3.2-2.8 1.6 0 2.6.8 3.2 2.1l-1.6 1c-.3-.6-.7-.9-1.4-.9-.7 0-1 .4-1 .8 0 .5.3.7 1.1 1l.9.4c1.6.7 2.4 1.4 2.4 3 0 1.8-1.4 3-3.6 3-2.3 0-3.6-1.2-4.2-2.8zm-4.7-3.9v5.9H3.4v-5.9z" fill="#FFF" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#61DAFB]" fill="currentColor">
    <path d="M22 11.8c-.3-1-1.3-1.8-2.6-2.2 1.4-1 2.2-2.1 2.2-3.2 0-2.3-3.2-4.1-7.2-4.1-1.1 0-2.2.1-3.2.4C10.5 1 9.3.2 8.2.2c-2.3 0-4.1 3.2-4.1 7.2 0 1.1.1 2.2.4 3.2C1 11.5.2 12.7.2 13.8c0 2.3 3.2 4.1 7.2 4.1 1.1 0 2.2-.1 3.2-.4 1 1.2 2.2 2 3.2 2 2.3 0 4.1-3.2 4.1-7.2 0-1.1-.1-2.2-.4-3.2 1.5-1 2.2-2.2 2.2-3.3zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#339933]" fill="currentColor">
    <path d="M12 1.2L1.8 7.1v11.8L12 22.8l10.2-5.9V7.1zM12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
    <path d="M12 0L0 12l12 12 12-12zm-3.6 15.6H6.1v-7.2h2.3zm5.4 0h-2.3v-7.2h2.3zm5.4 0h-2.3v-7.2h2.3z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3776AB]" fill="currentColor">
    <path d="M11.9 0C5.3 0 5.6 2.9 5.6 2.9v2.7h6.4v.9H5.6s-5.6-.3-5.6 5.6c0 5.9 4.9 5.7 4.9 5.7h2.9v-4.1c0-2.5 2-4.5 4.5-4.5h4.1V2.9S22.4 0 15.8 0zm3.9 17.6v4.1c0 2.5-2 4.5-4.5 4.5H7.2s-5.6.3-5.6-5.6c0-5.9 4.9-5.7 4.9-5.7h6.4v-.9H6.5s5.6.3 5.6-5.6c0-5.9-4.9-5.7-4.9-5.7z" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#00599C]" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm10.5 5.5v13h6v-2h-4v-2.5h4v-2h-4v-2.5h4v-2z" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#4479A1]" fill="currentColor">
    <path d="M12 0c6.6 0 12 5.4 12 12S18.6 24 12 24 0 18.6 0 12 5.4 0 12 0zm-2 15.6h4v-7.2h-4z" />
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#47A248]" fill="currentColor">
    <path d="M12 0C6.5 0 2 4.5 2 10c0 4.2 2.6 7.8 6.3 9.3l-1.3 4.1L12 24l5-3.6-1.3-4.1c3.7-1.5 6.3-5.1 6.3-9.3C22 4.5 17.5 0 12 0zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#F05032]" fill="currentColor">
    <path d="M23.2 10.8L13.2.8c-.5-.5-1.3-.5-1.8 0L9.1 3.1l3.5 3.5c.4-.1.8 0 1.1.3.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.3-.3-.4-.7-.3-1.1L8.5 3.7.8 11.4c-.5.5-.5 1.3 0 1.8l10 10c.5.5 1.3.5 1.8 0l10.6-10.6c.5-.5.5-1.3 0-1.8z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#007ACC]" fill="currentColor">
    <path d="M23.9 6.5l-3.3-3.1c-.2-.2-.5-.2-.7 0L12 11.2 4.1 3.4c-.2-.2-.5-.2-.7 0L.1 6.5c-.2.2-.2.5 0 .7l4.4 4.3L.1 15.8c-.2.2-.2.5 0 .7l3.3 3.1c.2.2.5.2.7 0l7.9-7.8 7.9 7.8c.2.2.5.2.7 0l3.3-3.1c.2-.2.2-.5 0-.7l-4.4-4.3 4.4-4.3c.2-.2.2-.5 0-.7z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#06B6D4]" fill="currentColor">
    <path d="M12 3C7 3 3.7 6.3 3.7 11.3S7 19.7 12 19.7s8.3-3.3 8.3-8.3S17 3 12 3zm0 13.5c-2.5 0-4.2-1.7-4.2-4.2s1.7-4.2 4.2-4.2 4.2 1.7 4.2 4.2-1.7 4.2-4.2 4.2z" />
  </svg>
);

export default function Skills() {
  const skillsList = [
    { name: "HTML5", icon: <HTML5Icon />, color: "rgba(227, 79, 38, 0.05)", hoverColor: "rgba(227, 79, 38, 0.15)" },
    { name: "CSS3", icon: <CSS3Icon />, color: "rgba(21, 114, 182, 0.05)", hoverColor: "rgba(21, 114, 182, 0.15)" },
    { name: "JavaScript", icon: <JSIcon />, color: "rgba(247, 223, 30, 0.05)", hoverColor: "rgba(247, 223, 30, 0.15)" },
    { name: "TypeScript", icon: <TSIcon />, color: "rgba(49, 120, 198, 0.05)", hoverColor: "rgba(49, 120, 198, 0.15)" },
    { name: "React", icon: <ReactIcon />, color: "rgba(97, 218, 251, 0.05)", hoverColor: "rgba(97, 218, 251, 0.15)" },
    { name: "Node.js", icon: <NodeIcon />, color: "rgba(51, 153, 51, 0.05)", hoverColor: "rgba(51, 153, 51, 0.15)" },
    { name: "Express.js", icon: <ExpressIcon />, color: "rgba(255, 255, 255, 0.03)", hoverColor: "rgba(255, 255, 255, 0.1)" },
    { name: "Python", icon: <PythonIcon />, color: "rgba(55, 118, 171, 0.05)", hoverColor: "rgba(55, 118, 171, 0.15)" },
    { name: "C++", icon: <CppIcon />, color: "rgba(0, 89, 156, 0.05)", hoverColor: "rgba(0, 89, 156, 0.15)" },
    { name: "MySQL", icon: <MySQLIcon />, color: "rgba(68, 121, 161, 0.05)", hoverColor: "rgba(68, 121, 161, 0.15)" },
    { name: "MongoDB", icon: <MongoIcon />, color: "rgba(71, 162, 72, 0.05)", hoverColor: "rgba(71, 162, 72, 0.15)" },
    { name: "Git", icon: <GitIcon />, color: "rgba(240, 80, 50, 0.05)", hoverColor: "rgba(240, 80, 50, 0.15)" },
    { name: "GitHub", icon: <GithubIcon />, color: "rgba(255, 255, 255, 0.03)", hoverColor: "rgba(255, 255, 255, 0.1)" },
    { name: "VS Code", icon: <VSCodeIcon />, color: "rgba(0, 122, 204, 0.05)", hoverColor: "rgba(0, 122, 204, 0.15)" },
    { name: "Tailwind CSS", icon: <TailwindIcon />, color: "rgba(6, 182, 212, 0.05)", hoverColor: "rgba(6, 182, 212, 0.15)" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } as any,
    },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading with gradient effect */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Stack
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-electric-blue/70">
              MY TECH STACK
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Expertise built across full-stack engineering, databases, responsive architectures, and developer operations.
          </p>
        </div>

        {/* Clean Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {skillsList.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 } 
              }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-white/5 hover:border-electric-blue/30 shadow-lg hover:shadow-electric-blue/5 transition-all duration-300 relative group overflow-hidden cursor-pointer aspect-square"
            >
              {/* Soft glow hover card back */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 bg-gradient-to-br from-electric-blue/[0.02] to-transparent" 
              />
              
              {/* Tech Icon Container with micro floating animation on hover */}
              <div className="mb-4 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Tech Name */}
              <span className="font-space text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
