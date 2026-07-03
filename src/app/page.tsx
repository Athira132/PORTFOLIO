"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components to reduce initial bundle size and speed up load times
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// Client-only canvas elements loaded dynamically with SSR disabled to prevent hydration mismatch
const BackgroundEffects = dynamic(() => import("@/components/BackgroundEffects"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Background Interactive Visualizations */}
      <BackgroundEffects />
      
      {/* Interactive Custom Cursor dot follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Editorial Sections */}
      <main className="flex-1 w-full relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
}
