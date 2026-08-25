import { PrivacyPolicyClientPage } from "./privacy-policy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zybiov Multi-Activities Limited",
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
  },
  openGraph: {
    title: "Privacy Policy | Zybiov Multi-Activities Limited",
    description:
      "Read the Privacy Policy and Terms of Service for Zybiov Multi-Activities Limited.",
    url: "https://zybiov.com/privacy-policy",
    type: "website",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "https://zybiov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zybiov Multi-Activities Limited Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Zybiov Multi-Activities Limited",
    description:
      "Read the Privacy Policy and Terms of Service for Zybiov Multi-Activities Limited.",
    images: ["https://zybiov.com/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />;
}
