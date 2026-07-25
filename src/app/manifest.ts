import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    short_name: "Zybiov",
    description:
      "Premier pharmaceutical and medical supplies importer and distributor bridging India (Mumbai) and Sudan.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#5B43D6",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
