import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aathi.dev"),
  title: "Athira K | Full Stack Web Developer",
  description: "Portfolio of Athira K, Full Stack Web Developer specializing in React, Node.js, MERN Stack, UI Design, and Digital Experiences.",
  keywords: [
    "Athira",
    "Athira K",
    "aathi.dev",
    "Full Stack Developer",
    "React Developer",
    "MERN Developer",
    "Web Developer",
    "Portfolio",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Digital Creator"
  ],
  authors: [{ name: "Athira K", url: "https://aathi.dev" }],
  openGraph: {
    title: "Athira K",
    description: "Building Digital Experiences.",
    url: "https://aathi.dev",
    siteName: "aathi.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 1000,
        alt: "Athira K Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athira K",
    description: "Building Digital Experiences.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-dark-bg text-white font-sora flex flex-col relative select-none">
        {/* Ambient Effects */}
        <div className="fixed inset-0 noise-overlay z-50 pointer-events-none" />
        <div className="fixed inset-0 mesh-bg z-0 pointer-events-none" />
        
        {/* Core content wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
