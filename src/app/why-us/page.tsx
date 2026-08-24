import { WhyUsClientPage } from "./why-us-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Zybiov",
  description:
    "Discover why Zybiov is the preferred pharmaceutical distributor. Driven by global manufacturer partnerships, strict GMP standards compliance, and an optimized logistics network bridging India (Mumbai) and Sudan.",
  keywords: [
    "Why Zybiov",
    "Pharmaceutical distribution standards Sudan",
    "GMP compliance Sudan",
    "Cold chain logistics Sudan",
    "Reliable medical distributor",
    "Indian manufacturer partnerships pharma",
    "Mumbai liaison sourcing standards",
  ],
  alternates: {
    canonical: "https://zybiov.com/why-us",
    languages: {
      "en": "https://zybiov.com/why-us",
      "ar": "https://zybiov.com/why-us",
      "x-default": "https://zybiov.com/why-us",
    },
  },
  openGraph: {
    title: "Why Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
    url: "https://zybiov.com/why-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
  },
};

export default function WhyUsPage() {
  return <WhyUsClientPage />;
}
