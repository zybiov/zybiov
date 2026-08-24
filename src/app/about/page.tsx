import { AboutClientPage } from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Zybiov Multi-Activities Limited, a premier pharmaceutical importer and distributor. Learn about our headquarters in Sudan, our liaison & sourcing operations in Mumbai (India), and our vision for global healthcare networks.",
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
