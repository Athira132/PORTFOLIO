export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Petals Ethnics and Jewellers",
    category: "Full-Stack E-Commerce Website",
    description: "Responsive full-stack e-commerce platform for ethnic clothing with dynamic catalogs, shopping cart, Razorpay payments, and Supabase admin dashboard.",
    technologies: ["Angular 21", "TypeScript", "HTML", "CSS", "Supabase", "Razorpay", "GitHub", "Vercel"],
    image: "/images/petalsethnic.png",
    liveLink: "https://www.petalsethnic.com/",
    githubLink: "https://github.com/Athira132",
    featured: true,
  },
  {
    title: "Kitab — Bookshop Management System",
    category: "Full Stack MERN Application",
    description: "Complete MERN-stack bookshop system featuring a customer storefront, inventory management, bulk CSV import, and staff billing workflow.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/kitab.png",
    liveLink: "https://kitab-bookshop.vercel.app/",
    githubLink: "https://github.com/Athira132/PORTFOLIO",
    featured: true,
  },
  {
    title: "Velvet Haven Resort",
    category: "Resort & Hospitality Website",
    description: "Luxury resort website in Vagamon featuring misty mountain views, luxury suites, activity booking, interactive gallery, and customer inquiry system.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/images/resort.jpg",
    liveLink: "https://velvet-haven-resort.vercel.app",
    githubLink: "https://github.com/Athira132/velvet-haven-resort",
    featured: true,
  },
  {
    title: "Cafe Management System",
    category: "Full Stack Web System",
    description: "Multi-role cafe management system with customer and owner dashboards, JWT authentication, order tracking, and revenue analytics.",
    technologies: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3"],
    image: "/images/cafe.jpg",
    liveLink: "https://github.com/Athira132",
    githubLink: "https://github.com/Athira132",
  },
  {
    title: "Phoenix Cruise",
    category: "Travel & Tourism Website",
    description: "Premium website for a Kerala backwater cruise experience, showcasing houseboats, packages, destinations, and direct booking options.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Booking System", "Responsive Web Design"],
    image: "/images/phoenixcruise.jpg",
    liveLink: "https://phoenixcruise.in/",
    githubLink: "https://github.com/Athira132",
  },
  {
    title: "iPhonix Mobile Service Centre",
    category: "Business & Service Website",
    description: "Responsive website for a mobile repair and service centre showcasing repair services, device support, and online inquiry options.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Service Portal", "Responsive Web Design"],
    image: "/images/iphonix.jpg",
    liveLink: "https://iphonix.in/",
    githubLink: "https://github.com/Athira132",
  },
];
