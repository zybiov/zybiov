import { ContactClientPage } from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Zybiov Multi-Activities | Khartoum HQ & Mumbai Office",
  description:
    "Contact Zybiov Multi-Activities Limited in Khartoum (Sudan) or Mumbai (India) for pharmaceutical supply, tenders, and distribution partnerships.",
  keywords: [
    "Contact Zybiov",
    "Zybiov Multi-Activities Limited",
    "Zybiov Sudan Phone Number",
    "Zybiov India Office",
    "Zybiov Mumbai Sourcing",
    "Partner with Zybiov",
    "Pharmaceutical sourcing inquiry Sudan",
    "Global pharmaceutical trade",
  ],
  alternates: {
    canonical: "https://zybiov.com/contact",
  },
  openGraph: {
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact our offices in Khartoum, Sudan, and Mumbai, India, for global trade partnership inquiries.",
    url: "https://zybiov.com/contact",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Zybiov Multi-Activities Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact our offices in Khartoum, Sudan, and Mumbai, India, for global trade partnership inquiries.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
