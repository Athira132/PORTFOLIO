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
  title: "Athira K | Full Stack Web Developer | aathi.dev",
  description: "Portfolio of Athira K, a Full Stack Web Developer specializing in React, Node.js, MERN Stack, UI Design, and modern web applications. Building fast, scalable, and visually engaging digital experiences.",
  alternates: {
    canonical: "https://aathi.dev",
  },
  verification: {
    // Replace "YOUR_GOOGLE_VERIFICATION_CODE" with your actual Google Search Console code.
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "Athira K",
    "aathi.dev",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js",
    "JavaScript",
    "Portfolio",
    "UI Designer",
    "Digital Creator",
    "Kerala Web Developer",
    "India Web Developer",
  ],
  authors: [{ name: "Athira K", url: "https://aathi.dev" }],
  openGraph: {
    title: "Athira K | Full Stack Web Developer | aathi.dev",
    description: "Portfolio of Athira K, a Full Stack Web Developer specializing in React, Node.js, MERN Stack, UI Design, and modern web applications. Building fast, scalable, and visually engaging digital experiences.",
    url: "https://aathi.dev",
    siteName: "aathi.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile-new.png",
        width: 800,
        height: 1000,
        alt: "Athira K Portrait - Full Stack Web Developer",
      },
      {
        url: "/images/logo.png",
        width: 192,
        height: 192,
        alt: "aathi.dev Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athira K | Full Stack Web Developer | aathi.dev",
    description: "Portfolio of Athira K, a Full Stack Web Developer specializing in React, Node.js, MERN Stack, UI Design, and modern web applications.",
    images: ["/images/profile-new.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data setup
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Athira K",
    "jobTitle": "Full Stack Web Developer",
    "url": "https://aathi.dev",
    "image": "https://aathi.dev/images/profile-new.png",
    "email": "athiraanuss12@gmail.com",
    "location": {
      "@type": "Place",
      "name": "Palakkad, Kerala, India"
    },
    "sameAs": [
      "https://github.com/Athira132",
      "https://www.linkedin.com/feed/",
      "https://www.instagram.com/aathidevloper/?hl=en",
      "https://www.facebook.com/",
      "https://x.com/Aathi__dev"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "aathi.dev",
    "url": "https://aathi.dev"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "aathi.dev",
    "url": "https://aathi.dev",
    "logo": "https://aathi.dev/images/logo.png"
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} h-full antialiased dark`}
    >
      <head>
        {/* Inject JSON-LD schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
