import { HomeClientPage } from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution — Sudan & India",
  description:
    "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor, bridging manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
  keywords: [
    "Zybiov Multi-Activities Limited",
    "Zybiov Sudan",
    "Zybiov Mumbai",
    "Sudan pharmaceutical distributor",
    "Mumbai pharmaceutical exporter",
    "Medical equipment Sudan",
    "Nutritional supplements Sudan",
    "Sudan medicine import",
    "Indian pharmaceutical sourcing Sudan",
    "Sudan medical supply chain",
  ],
  alternates: {
    canonical: "https://www.zybiov.com",
    languages: {
      "en": "https://www.zybiov.com",
      "ar": "https://www.zybiov.com",
      "x-default": "https://www.zybiov.com",
    },
  },
  openGraph: {
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
    url: "https://www.zybiov.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
  },
};

export default function HomePage() {
  return <HomeClientPage />;
}
