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
  title: "Athira K | Full Stack Web Developer Portfolio",
  description: "Athira K (aathi.dev) is an aspiring Full Stack Web Developer and UI Designer based in Palakkad, Kerala, India. Integrated MSc Computer Science graduate from Pondicherry Central University.",
  keywords: [
    "Athira K",
    "aathi.dev",
    "Full-Stack Web Developer",
    "UI Designer",
    "Integrated MSc Computer Science",
    "Pondicherry Central University",
    "Kitab Bookshop",
    "Cafe Management System",
    "Palakkad",
    "Kerala",
    "India"
  ],
  authors: [{ name: "Athira K", url: "https://aathi.dev" }],
  openGraph: {
    title: "Athira K | Full Stack Web Developer Portfolio",
    description: "Athira K is an Integrated MSc Computer Science graduate and Full Stack Developer building responsive websites and digital experiences.",
    url: "https://aathi.dev",
    siteName: "aathi.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athira K | Full Stack Web Developer Portfolio",
    description: "Athira K is an Integrated MSc Computer Science graduate and Full Stack Developer building responsive websites and digital experiences.",
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
