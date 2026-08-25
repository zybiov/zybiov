import { HomeClientPage } from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution Sudan & India",
  description:
    "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor bridging global manufacturing in India (Mumbai) with distribution networks in Sudan.",
  keywords: [
    "Zybiov",
    "zybiov",
    "zybiov.com",
    "Zybiov Multi-Activities Limited",
    "Zybiov Multi-Activities",
    "Zybiov Sudan",
    "Zybiov Mumbai",
    "Zybiov Khartoum",
    "Zybiov India",
    "Sudan pharmaceutical distributor",
    "Mumbai pharmaceutical exporter",
    "Medical equipment Sudan",
    "Nutritional supplements Sudan",
    "Sudan medicine import",
    "Indian pharmaceutical sourcing Sudan",
    "Sudan medical supply chain",
  ],
  alternates: {
    canonical: "https://zybiov.com",
  },
  openGraph: {
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
    url: "https://zybiov.com",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zybiov Multi-Activities Limited — Global Pharmaceutical Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeClientPage />;
}
