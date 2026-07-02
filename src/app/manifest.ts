import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Athira K | Full Stack Web Developer Portfolio",
    short_name: "aathi.dev",
    description: "Athira K's professional developer and digital creator portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#2F80FF",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
