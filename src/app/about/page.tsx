import { AboutClientPage } from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zybiov | Zybiov Multi-Activities Limited — Sudan & Mumbai",
  description:
    "Learn about Zybiov Multi-Activities Limited, a leading pharmaceutical importer and distributor bridging Indian manufacturing with trusted healthcare distribution networks in Sudan.",
  keywords: [
    "About Zybiov",
    "Zybiov Multi-Activities Limited",
    "Zybiov Sudan",
    "Zybiov India",
    "Pharmaceutical importer Sudan",
    "Medical supply chain Sudan",
    "Sudan healthcare distribution",
    "Mumbai liaison office pharma",
    "India Sudan pharma sourcing",
  ],
  alternates: {
    canonical: "https://zybiov.com/about",
  },
  openGraph: {
    title: "About Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier pharmaceutical importer and distributor bridging India (Mumbai) and Sudan.",
    url: "https://zybiov.com/about",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Zybiov Multi-Activities Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier pharmaceutical importer and distributor bridging India and Sudan.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
