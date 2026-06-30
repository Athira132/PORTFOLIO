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
  title: "aathi.dev | Building Digital Experiences",
  description: "Athira (aathi.dev) is a premium full-stack developer and digital creator building interactive, futuristic, and high-performance digital experiences.",
  keywords: [
    "Athira",
    "aathi.dev",
    "Full-Stack Developer",
    "UI Designer",
    "Digital Agency",
    "Vercel",
    "Next.js Portfolio",
    "Editorial Web Design",
    "Creative Developer Portfolio"
  ],
  authors: [{ name: "Athira", url: "https://aathi.dev" }],
  openGraph: {
    title: "aathi.dev | Building Digital Experiences",
    description: "Athira is a premium full-stack developer and digital creator building high-end, futuristic web applications.",
    url: "https://aathi.dev",
    siteName: "aathi.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aathi.dev | Building Digital Experiences",
    description: "Athira is a premium full-stack developer and digital creator building high-end, futuristic web applications.",
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
