import { ExpertiseClientPage } from "./expertise-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Expertise | Pharmaceuticals & Medical Supply | Zybiov Multi-Activities",
  description:
    "Explore Zybiov's core expertise: Importing quality pharmaceuticals, hospital diagnostic devices, and nutritional supplements across Sudan.",
  keywords: [
    "Zybiov expertise",
    "Zybiov Multi-Activities Limited",
    "Pharmaceutical products Sudan",
    "Medical equipment procurement Sudan",
    "Nutritional supplements supply Sudan",
    "Sudan hospital equipment",
    "Indian medicine sourcing Mumbai",
    "International pharma imports Sudan",
  ],
  alternates: {
    canonical: "https://zybiov.com/expertise",
  },
  openGraph: {
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan & India: Sourcing and importation of pharmaceuticals, medical equipment, and premium supplements.",
    url: "https://zybiov.com/expertise",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zybiov Pharmaceutical & Medical Equipment Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan & India: Sourcing and importation of pharmaceuticals, medical equipment, and premium supplements.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function ExpertisePage() {
  return <ExpertiseClientPage />;
}
