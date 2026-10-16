"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const BackgroundEffects = dynamic(() => import("@/components/BackgroundEffects"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const GithubIcon = ({ size = 16, className = "" }) => (
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

export default function ProjectsPage() {
  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-5 sm:px-8 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Navigation Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 text-xs md:text-sm font-space font-medium text-text-muted hover:text-electric-blue transition-colors duration-300 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Heading - Compact */}
          <div className="mb-10 md:mb-12 border-b border-white/5 pb-6 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-electric-blue font-bold font-space mb-2">
                <Sparkles size={14} className="animate-pulse" />
                <span>Portfolio Archive</span>
              </div>
              <h1 className="font-space font-extrabold text-3xl md:text-5xl tracking-tight text-white">
                ALL PROJECTS
              </h1>
            </div>
            <p className="text-text-muted max-w-md mt-3 md:mt-0 font-sora font-light text-xs md:text-sm leading-relaxed">
              Complete collection of client applications, e-commerce platforms, MERN systems, and responsive web solutions.
            </p>
          </div>

          {/* Compact Projects Grid: Exactly 2 rows on desktop (3 columns x 2 rows = 6 projects) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="glass-panel rounded-2xl border border-white/10 hover:border-electric-blue/40 bg-card-bg/60 p-5 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10 hover:-translate-y-1"
              >
                {/* Top: Compact Image & Info */}
                <div>
                  {/* Compact Project Image Frame */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-xl border border-white/10 group-hover:border-electric-blue/40 aspect-[16/10] cursor-pointer mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.9] group-hover:brightness-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* View project overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </a>

                  {/* Category index */}
                  <span className="font-space text-[10px] md:text-[11px] font-bold text-electric-blue mb-1.5 block uppercase tracking-wider">
                    0{idx + 1} / {project.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-space font-extrabold text-lg md:text-xl text-white mb-2 group-hover:text-electric-blue transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h2>

                  {/* Short description */}
                  <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tech tags & Action buttons */}
                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-white/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-3.5">
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

          {/* Bottom CTA to Contact - Compact */}
          <div className="p-8 md:p-10 rounded-2xl glass-panel border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-purple-glow/10 pointer-events-none" />
            <h3 className="font-space font-extrabold text-2xl md:text-3xl text-white mb-3 relative z-10">
              Have a Project in Mind?
            </h3>
            <p className="text-text-muted font-sora font-light text-xs md:text-sm max-w-lg mx-auto mb-6 relative z-10">
              Let&apos;s build something exceptional together. From e-commerce platforms to bespoke web applications, I&apos;m ready to bring your ideas to life.
            </p>
            <Link
              href="/#contact"
              className="relative z-10 px-7 py-3 rounded-full bg-electric-blue hover:bg-electric-blue-dark text-white font-space font-bold text-xs md:text-sm tracking-wider inline-flex items-center space-x-2 shadow-lg shadow-electric-blue/25 hover:scale-105 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
