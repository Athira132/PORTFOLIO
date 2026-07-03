import Image from "next/image";
import { ArrowUp } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Side: Brand and copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden relative p-1.5 hover:border-electric-blue/40 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="aathi.dev logo"
                width={32}
                height={32}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="font-space font-bold tracking-widest text-sm text-white">
              aathi.dev
            </span>
          </div>
          <p className="text-xs text-text-muted">
            © 2026 aathi.dev. All rights reserved.
          </p>
        </div>

        {/* Center: Credits */}
        <div className="text-center md:text-left">
          <p className="text-xs text-text-muted font-space">
            Designed & Developed by <span className="text-white hover:text-electric-blue transition-colors duration-300">Athira K</span>
          </p>
        </div>

        {/* Right Side: Social icons and Top arrow */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Athira132"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="#home"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-electric-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
