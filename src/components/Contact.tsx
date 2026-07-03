"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

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

const LinkedinIcon = ({ size = 20, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 20, className = "" }) => (
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
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setStatus("sending");

    const phoneNumber = "918606720360";
    const messageText = `Hello Athira,

I saw your portfolio and would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Simulate short delay then redirect
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.location.href = whatsappUrl;
    }, 1500);
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Athira132", icon: <GithubIcon size={20} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/feed/", icon: <LinkedinIcon size={20} /> },
    { name: "Instagram", href: "https://www.instagram.com/aathidevloper/?hl=en", icon: <InstagramIcon size={20} /> },
    { name: "Facebook", href: "https://www.facebook.com/", icon: <FacebookIcon size={20} /> },
    { name: "Twitter/X", href: "https://x.com/Aathi__dev", icon: <TwitterIcon size={20} /> },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-electric-blue font-bold font-space block mb-2">
              Connect
            </span>
            <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tight text-white">
              CONTACT
            </h2>
          </div>
          <p className="text-text-muted max-w-xs mt-4 md:mt-0 font-sora font-light text-xs md:text-sm">
            Let&apos;s collaborate on building the next generation of digital products.
          </p>
        </div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Editorial callouts, location info, socials */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-12">
            <div>
              <h3 className="font-space font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
                Let&apos;s Build <br />
                Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-soft-cyan">
                  Amazing
                </span>
                .
              </h3>
              <p className="text-text-muted font-light text-sm md:text-base leading-relaxed">
                Have an idea, project, or role you want to discuss? Send a message and let&apos;s set up a call. I usually respond within 24 hours.
              </p>
            </div>

            {/* Direct details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider block">Email</span>
                  <a href="mailto:athiraanuss12@gmail.com" className="text-sm font-space text-white hover:text-electric-blue transition-colors">
                    athiraanuss12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider block">Phone</span>
                  <a href="tel:+918606720360" className="text-sm font-space text-white hover:text-electric-blue transition-colors">
                    +91 8606720360
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-space text-white">Palakkad, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="flex items-center space-x-4 flex-wrap gap-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/5 hover:border-electric-blue/30 bg-white/5 flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue flex items-center justify-center text-electric-blue mb-6">
                    <Send size={24} className="animate-bounce" />
                  </div>
                  <h4 className="font-space font-bold text-2xl text-white mb-2">Redirecting...</h4>
                  <p className="text-text-muted font-light text-sm max-w-xs">
                    Opening WhatsApp to send your message. Thank you for reaching out!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs font-mono uppercase tracking-wider text-electric-blue border-b border-electric-blue pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 text-sm font-space focus:outline-none focus:border-electric-blue/50 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 text-sm font-space focus:outline-none focus:border-electric-blue/50 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="e.g. john@example.com"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 text-sm font-space focus:outline-none focus:border-electric-blue/50 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="e.g. Project Inquiry"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 text-sm font-space focus:outline-none focus:border-electric-blue/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded-xl bg-electric-blue hover:bg-electric-blue-dark text-white font-space font-bold tracking-wider text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-electric-blue/20 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{status === "sending" ? "Preparing WhatsApp..." : "Send Message"}</span>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
