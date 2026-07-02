"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-dark-bg/60 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl border border-white/20 bg-transparent flex items-center justify-center overflow-hidden group-hover:border-electric-blue/60 group-hover:scale-105 transition-all duration-300 relative">
            <Image
              src="/images/logo.png"
              alt="aathi.dev logo"
              width={40}
              height={40}
              className="object-contain scale-[2.2]"
            />
          </div>
          <span className="font-space font-bold text-xl tracking-wider text-white group-hover:text-electric-blue transition-colors duration-300">
            aathi.dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-space text-sm font-medium tracking-wide text-text-muted hover:text-white transition-colors duration-300 relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-electric-blue/40 text-electric-blue hover:text-white hover:bg-electric-blue/20 hover:border-electric-blue font-space font-semibold text-sm tracking-wider transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg shadow-electric-blue/10"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-electric-blue transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-dark-bg/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-space text-2xl font-bold tracking-wide text-white hover:text-electric-blue transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 rounded-full bg-electric-blue text-white hover:bg-electric-blue-dark font-space font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-electric-blue/20"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
