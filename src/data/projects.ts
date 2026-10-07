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
    description: "Developed a responsive full-stack e-commerce platform for ethnic clothing and jewellery featuring dynamic product categories, size selection, shopping cart, wishlist, Razorpay payments, and a Supabase admin dashboard for inventory and order management.",
    technologies: ["Angular 21", "TypeScript", "HTML", "CSS", "Supabase", "Razorpay", "GitHub", "Vercel"],
    image: "/images/petalsethnic.png",
    liveLink: "https://www.petalsethnic.com/",
    githubLink: "https://github.com/Athira132",
    featured: true,
  },
  {
    title: "Kitab — Bookshop Management System",
    category: "Full Stack MERN Application",
    description: "A complete MERN-stack Bookshop Management System featuring a customer storefront, authenticated admin dashboard, inventory management, bulk CSV catalog import, secure ordering, and staff billing workflow.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/kitab.png",
    liveLink: "https://kitab-bookshop.vercel.app/",
    githubLink: "https://github.com/Athira132/PORTFOLIO",
    featured: true,
  },
  {
    title: "Cafe Management System",
    category: "Full Stack Web System",
    description: "A multi-role cafe management system with custom dashboards for Owners, Staff, and Customers. Includes secure JWT token authentication, granular Role-Based Access Control, live order tracking, menu editors, and revenue analytics.",
    technologies: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3"],
    image: "/images/cafe.jpg",
    liveLink: "https://github.com/Athira132",
    githubLink: "https://github.com/Athira132",
    featured: true,
  },
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
];
