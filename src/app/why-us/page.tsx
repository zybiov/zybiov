import { WhyUsClientPage } from "./why-us-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Zybiov | WHO-GMP Standards & Global Cold Chain | Zybiov",
  description:
    "Discover why healthcare providers trust Zybiov Multi-Activities Limited: WHO-GMP partner standards, strict cold-chain logistics, and proven reliability between India and Sudan.",
  keywords: [
    "Why Zybiov",
    "Zybiov Multi-Activities Limited",
    "Pharmaceutical distribution standards Sudan",
    "GMP compliance Sudan",
    "Cold chain logistics Sudan",
    "Reliable medical distributor",
    "Indian manufacturer partnerships pharma",
    "Mumbai liaison sourcing standards",
  ],
  alternates: {
    canonical: "https://zybiov.com/why-us",
  },
  openGraph: {
    title: "Why Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
    url: "https://zybiov.com/why-us",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Zybiov Multi-Activities Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function WhyUsPage() {
  return <WhyUsClientPage />;
}
