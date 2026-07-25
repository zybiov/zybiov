import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zybiov.com";
  const now = new Date();

  const routes: Array<{ route: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/about", priority: 0.9, changeFrequency: "weekly" },
    { route: "/expertise", priority: 0.9, changeFrequency: "weekly" },
    { route: "/why-us", priority: 0.9, changeFrequency: "weekly" },
    { route: "/contact", priority: 0.9, changeFrequency: "weekly" },
    { route: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ar: `${baseUrl}${route}`,
      },
    },
  }));
}

