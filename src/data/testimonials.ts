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
    role: "Fitness Coach & Entrepreneur",
    image: "/images/testimonials/coach-muhsin.png",
    instagram: "https://www.instagram.com/coach_muhsin/?hl=en",
    quote: "Athira developed a professional website with excellent attention to detail. The final result perfectly represents my brand and provides a smooth user experience. I truly appreciate the dedication and quality of work.",
    stars: 5
  },
  {
    name: "Sasidharan",
    role: "Founder",
    company: "Dhanya Enterprises",
    image: "/images/testimonials/sasidharan.png",
    quote: "Working with Athira was a great experience. The website is modern, responsive, and professionally crafted. The communication throughout the project was excellent, and the final product exceeded our expectations.",
    stars: 5
  },
  {
    name: "Rahul Nair",
    role: "Founder",
    company: "PixelCraft Solutions",
    image: "/images/testimonials/rahul.png",
    quote: "Athira delivered a modern, responsive website with excellent attention to detail. The project was completed on time, and the overall experience was smooth and professional.",
    stars: 5
  },
  {
    name: "Priya Menon",
    role: "Marketing Manager",
    company: "Nova Digital",
    image: "/images/testimonials/priya.png",
    quote: "Working with Athira was a great experience. The website is visually appealing, fast, and perfectly aligned with our business requirements.",
    stars: 5
  },
  {
    name: "Arjun Kumar",
    role: "Startup Founder",
    company: "TechNest",
    image: "/images/testimonials/arjun.png",
    quote: "Excellent communication, clean code, and a user-friendly interface. I highly recommend Athira for web development projects.",
    stars: 5
  }
];
