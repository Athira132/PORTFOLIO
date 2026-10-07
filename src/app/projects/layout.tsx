import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Athira K — Full Stack Web Developer",
  description:
    "Explore the complete portfolio of full-stack web applications, real-world client platforms, and digital products built by Athira K, including Petals Ethnics and Jewellers, Kitab Bookshop, Cafe Management System, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
