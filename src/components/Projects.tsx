"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  // Display the top 3 projects in the home section in the same row
  const homeProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Portfolio &amp; Client Work
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              PROJECTS
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Featured full-stack digital products and client solutions built for scale and performance.
          </p>
        </div>

        {/* 3 Projects Displayed in the Same Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {homeProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 35 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as any }}
              className="glass-panel rounded-2xl border border-white/10 hover:border-electric-blue/40 bg-card-bg/60 p-5 md:p-6 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-electric-blue/10 hover:-translate-y-1.5"
            >
              {/* Top part: Image and content */}
              <div>
                {/* Project Image Frame */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl border border-white/10 group-hover:border-electric-blue/40 aspect-[16/10] cursor-pointer mb-6"
                >
                  {/* Glowing effect inside */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* View project overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </a>

                {/* Category index */}
                <span className="font-space text-[11px] font-bold text-electric-blue mb-2 block uppercase tracking-wider">
                  0{idx + 1} / {project.category}
                </span>

                {/* Title */}
                <h3 className="font-space font-extrabold text-xl md:text-2xl text-white mb-3 group-hover:text-electric-blue transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom part: Tech badges and Action Links */}
              <div>
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-white/50">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-space font-bold tracking-wider text-white hover:text-electric-blue transition-colors duration-300"
                  >
                    <span>Visit Website</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-space font-bold tracking-wider text-text-muted hover:text-white transition-colors duration-300"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group px-8 py-4 rounded-full border border-electric-blue/40 bg-electric-blue/10 hover:bg-electric-blue text-white font-space font-bold text-sm tracking-wider transition-all duration-300 flex items-center space-x-3 shadow-lg shadow-electric-blue/15 hover:shadow-electric-blue/30 hover:scale-105"
          >
            <span>View More Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
