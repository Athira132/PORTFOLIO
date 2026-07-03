export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  instagram?: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Coach Muhsin",
    role: "High-Performance Coach & Content Creator",
    image: "/images/testimonials/coach-muhsin.png",
    instagram: "https://www.instagram.com/coach_muhsin/?hl=en",
    quote: "Athira is dedicated, creative, and always focused on delivering high-quality work. Her attention to detail and commitment to building user-friendly digital experiences make her a reliable developer."
  },
  {
    name: "Sasidharan",
    role: "Founder",
    company: "Dhanya Enterprises",
    image: "/images/testimonials/sasidharan.png",
    quote: "Working with Athira has been a great experience. She combines technical expertise with creativity, ensuring every project is both functional and visually impressive."
  }
];
