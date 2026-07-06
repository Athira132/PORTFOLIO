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
  },
  {
    name: "Sneha Iyer",
    role: "Creative Director",
    company: "BrandHive",
    image: "/images/testimonials/sneha.png",
    quote: "The project exceeded our expectations. The design quality, responsiveness, and attention to user experience were outstanding.",
    stars: 5
  },
  {
    name: "Vivek Sharma",
    role: "Business Owner",
    company: "Sharma Enterprises",
    image: "/images/testimonials/vivek.png",
    quote: "Professional, reliable, and highly skilled. The final website performs beautifully across all devices.",
    stars: 5
  }
];
