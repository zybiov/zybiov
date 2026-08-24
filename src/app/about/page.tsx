import { AboutClientPage } from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zybiov Multi-Activities Limited",
  description:
    "Learn about Zybiov Multi-Activities Limited, bridging Indian pharmaceutical manufacturing with trusted distribution networks in Sudan.",
  keywords: [
    "About Zybiov",
    "Zybiov Multi-Activities Limited",
    "Pharmaceutical importer Sudan",
    "Medical supply chain Sudan",
    "Sudan healthcare distribution",
    "Mumbai liaison office pharma",
    "India Sudan pharma sourcing",
  ],
  alternates: {
    canonical: "https://zybiov.com/about",
    languages: {
      "en": "https://zybiov.com/about",
      "ar": "https://zybiov.com/about",
      "x-default": "https://zybiov.com/about",
    },
  },
  openGraph: {
    title: "About Us | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier pharmaceutical importer and distributor bridging India and Sudan.",
    url: "https://zybiov.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier pharmaceutical importer and distributor bridging India and Sudan.",
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
