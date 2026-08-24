import { ExpertiseClientPage } from "./expertise-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Expertise",
  description:
    "Explore Zybiov's core expertise: Sourcing and importation of premium pharmaceuticals directly from global manufacturers in India (Mumbai), alongside advanced medical equipment and nutritional supplements distribution in Sudan.",
  keywords: [
    "Zybiov expertise",
    "Pharmaceutical products Sudan",
    "Medical equipment procurement Sudan",
    "Nutritional supplements supply Sudan",
    "Sudan hospital equipment",
    "Indian medicine sourcing Mumbai",
    "International pharma imports Sudan",
  ],
  alternates: {
    canonical: "https://zybiov.com/expertise",
    languages: {
      "en": "https://zybiov.com/expertise",
      "ar": "https://zybiov.com/expertise",
      "x-default": "https://zybiov.com/expertise",
    },
  },
  openGraph: {
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan & India: Sourcing and importation of pharmaceuticals, medical equipment, and premium supplements.",
    url: "https://zybiov.com/expertise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan & India: Sourcing and importation of pharmaceuticals, medical equipment, and premium supplements.",
  },
};

export default function ExpertisePage() {
  return <ExpertiseClientPage />;
}
