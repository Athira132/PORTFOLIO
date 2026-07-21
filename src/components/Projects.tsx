"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
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
  const projects = [
    {
      title: "Phoenix Cruise",
      category: "Travel & Tourism Website",
      description: "A premium website for a Kerala backwater cruise and houseboat experience, designed to showcase cruises, experiences, destinations, galleries, and booking options.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Booking System", "Responsive Web Design"],
      image: "/images/phoenixcruise.jpg",
      liveLink: "https://phoenixcruise.in/",
      githubLink: "https://github.com/Athira132",
    },
    {
      title: "iPhonix Mobile Service Centre",
      category: "Business & Service Website",
      description: "A premium responsive website for a mobile repair and service centre, showcasing repair services, device support, business information, and customer contact options.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Service Portal", "Responsive Web Design"],
      image: "/images/iphonix.jpg",
      liveLink: "https://iphonix.in/",
      githubLink: "https://github.com/Athira132",
    },
    {
      title: "Kitab — Bookshop Management System",
      category: "Full Stack MERN Application",
      description: "A complete MERN-stack Bookshop Management System featuring a customer storefront, authenticated admin dashboard, inventory management, bulk CSV catalog import, secure ordering, and staff billing workflow.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "/images/kitab.png",
      liveLink: "https://kitab-bookshop.vercel.app/",
      githubLink: "https://github.com/Athira132/PORTFOLIO",
    },
    {
      title: "Cafe Management System",
      category: "Full Stack Web System",
      description: "A multi-role cafe management system with custom dashboards for Owners, Staff, and Customers. Includes secure JWT token authentication, granular Role-Based Access Control, live order tracking, menu editors, and revenue analytics.",
      technologies: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3"],
      image: "/images/cafe.jpg",
      liveLink: "https://github.com/Athira132",
      githubLink: "https://github.com/Athira132",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Portfolio &amp; Client Work
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              PROJECTS
            </h2>
          </div>
          <p className="text-text-muted max-w-md mt-4 md:mt-0 font-sora font-light text-sm md:text-base">
            Real-world production client applications and full-stack digital products built for scale and performance.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Project Image Frame (Left on Even, Right on Odd) */}
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                  className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative group overflow-hidden rounded-2xl border border-white/10 hover:border-electric-blue/40 bg-card-bg shadow-2xl hover:shadow-xl hover:shadow-electric-blue/10 aspect-[16/10] cursor-pointer transition-all duration-500"
                  >
                    {/* Glowing effect inside */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                    
                    {/* View project overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Project Info Block */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                  className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col text-left`}
                >
                  {/* Category index */}
                  <span className="font-space text-xs font-bold text-electric-blue mb-2 uppercase tracking-wider">
                    0{idx + 1} / {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-space font-extrabold text-3xl md:text-4xl text-white mb-6 hover:text-electric-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center space-x-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-space font-bold tracking-wider text-white hover:text-electric-blue transition-colors duration-300"
                    >
                      <span>View Live Website</span>
                      <ArrowRight size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-space font-bold tracking-wider text-text-muted hover:text-white transition-colors duration-300"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
