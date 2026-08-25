import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Google-InspectionTool",
          "Storebot-Google",
          "Bingbot",
          "msnbot",
          "BingPreview",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Applebot",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "TelegramBot",
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Meta-ExternalAgent",
          "Bytespider",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://zybiov.com/sitemap.xml",
    host: "https://zybiov.com",
  };
}
