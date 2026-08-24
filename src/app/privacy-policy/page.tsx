import { PrivacyPolicyClientPage } from "./privacy-policy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zybiov Multi-Activities",
  description:
    "Read the official Privacy Policy and Terms of Service for Zybiov Multi-Activities Limited. Secure and confidential data handling.",
  keywords: [
    "Zybiov Privacy Policy",
    "Zybiov Terms and Conditions",
    "Zybiov Cookie Policy",
    "Zybiov Multi-Activities Limited privacy",
  ],
  alternates: {
    canonical: "https://zybiov.com/privacy-policy",
    languages: {
      "en": "https://zybiov.com/privacy-policy",
      "ar": "https://zybiov.com/privacy-policy",
      "x-default": "https://zybiov.com/privacy-policy",
    },
  },
  openGraph: {
    title: "Privacy Policy | Zybiov Multi-Activities Limited",
    description:
      "Read the Privacy Policy and Terms of Service for Zybiov Multi-Activities Limited.",
    url: "https://zybiov.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Zybiov Multi-Activities Limited",
    description:
      "Read the Privacy Policy and Terms of Service for Zybiov Multi-Activities Limited.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />;
}
