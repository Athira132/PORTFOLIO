export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  instagram?: string;
  quote: string;
  stars: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Coach Muhsin",
    role: "High-Performance Coach & Content Creator",
    image: "/images/testimonials/coach-muhsin.png",
    instagram: "https://www.instagram.com/coach_muhsin/?hl=en",
    quote: "Athira is dedicated, creative, and always focused on delivering high-quality work. Her attention to detail and commitment to building user-friendly digital experiences make her a reliable developer.",
    stars: 5
  },
  {
    name: "Sasidharan",
    role: "Founder",
    company: "Dhanya Enterprises",
    image: "/images/testimonials/sasidharan.png",
    quote: "Working with Athira has been a great experience. She combines technical expertise with creativity, ensuring every project is both functional and visually impressive.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Creative Studio",
    image: "/images/testimonials/sarah.png",
    quote: "Working with Athira was an outstanding experience. The website exceeded our expectations in both design and performance.",
    stars: 5
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    image: "/images/testimonials/david.png",
    quote: "Professional communication, clean code, and on-time delivery. Highly recommended.",
    stars: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Manager",
    image: "/images/testimonials/emma.png",
    quote: "Our business website became significantly faster and more engaging. Fantastic work!",
    stars: 5
  }
];
