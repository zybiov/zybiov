import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/layout/language-context";
import { PageLoader } from "@/components/ui/loader";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollProgressBar, BackToTopButton } from "@/components/ui/scroll-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { FloatingChatbot } from "@/components/ui/floating-chatbot";
import { Plus_Jakarta_Sans, Manrope, Cairo, Tajawal } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B43D6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zybiov.com"),
  title: {
    default: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution — Sudan & India",
    template: "%s | Zybiov Multi-Activities Limited",
  },
  description:
    "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor, bridging manufacturing in India (Mumbai) with distribution networks in Sudan and East Africa.",
  keywords: [
    "Zybiov",
    "Zybiov Multi-Activities Limited",
    "pharmaceutical distribution Sudan",
    "medical supplies Sudan",
    "Mumbai pharmaceutical sourcing",
    "India pharmaceutical export",
    "global medical supply chain",
    "pharmaceutical company Sudan",
    "Sudan medicine import",
    "healthcare solutions East Africa",
    "Sudan India pharma trade",
    "Khartoum medical importer",
  ],
  authors: [{ name: "Zybiov Multi-Activities Limited" }],
  creator: "Zybiov Multi-Activities Limited",
  publisher: "Zybiov Multi-Activities Limited",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.zybiov.com",
    languages: {
      "en": "https://www.zybiov.com",
      "ar": "https://www.zybiov.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.zybiov.com",
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan and East Africa. Quality in Every Step.",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zybiov Multi-Activities Limited — Global Pharmaceutical Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Sourcing",
    description:
      "Bridging global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "F-PgEP5h5cpSq5nNP_pX-NoOr3pFrmhWmJqQc8dp4wQ",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${manrope.variable} ${cairo.variable} ${tajawal.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        <ScrollProgressBar />
        <PageLoader />
        <LanguageProvider>
          <ScrollToTop />
          {children}
          <BackToTopButton />
          <CookieBanner />
          <FloatingChatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
