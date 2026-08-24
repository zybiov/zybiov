import { ContactClientPage } from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Zybiov Multi-Activities Limited",
  description:
    "Contact Zybiov Multi-Activities in Khartoum (Sudan) or Mumbai (India) for pharmaceutical supply and distribution partnerships.",
  keywords: [
    "Contact Zybiov",
    "Zybiov Sudan Phone Number",
    "Zybiov India Office",
    "Zybiov Mumbai Sourcing",
    "Partner with Zybiov",
    "Pharmaceutical sourcing inquiry Sudan",
    "Global pharmaceutical trade",
  ],
  alternates: {
    canonical: "https://zybiov.com/contact",
    languages: {
      "en": "https://zybiov.com/contact",
      "ar": "https://zybiov.com/contact",
      "x-default": "https://zybiov.com/contact",
    },
  },
  openGraph: {
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact our offices in Khartoum, Sudan, and Mumbai, India, for global trade partnership inquiries.",
    url: "https://zybiov.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact our offices in Khartoum, Sudan, and Mumbai, India, for global trade partnership inquiries.",
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
