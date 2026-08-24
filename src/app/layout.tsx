import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/components/layout/language-context";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollProgressBar, BackToTopButton } from "@/components/ui/scroll-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { FloatingChatbot } from "@/components/ui/floating-chatbot";
import { Plus_Jakarta_Sans, Manrope, Cairo, Tajawal } from "next/font/google";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-28GVLEF2K7";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B43D6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zybiov.com"),
  title: {
    default: "Zybiov Multi-Activities | Global Pharma Distribution",
    template: "%s | Zybiov Multi-Activities Limited",
  },
  description:
    "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor bridging manufacturing in India with Sudan.",
  keywords: [
    "zybiov",
    "Zybiov",
    "zybiov.com",
    "Zybiov Multi-Activities Limited",
    "Zybiov Sudan",
    "Zybiov India",
    "Zybiov Mumbai",
    "Zybiov Khartoum",
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
  category: "Pharmaceutical & Healthcare Distribution",
  alternates: {
    canonical: "https://zybiov.com",
    languages: {
      "en": "https://zybiov.com",
      "ar": "https://zybiov.com",
      "x-default": "https://zybiov.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://zybiov.com",
    title: "Zybiov Multi-Activities Limited | Global Pharmaceutical Distribution",
    description:
      "Zybiov Multi-Activities Limited bridges global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan and East Africa. Quality in Every Step.",
    siteName: "Zybiov Multi-Activities Limited",
    locale: "en_US",
    alternateLocale: ["ar_SD"],
    images: [
      {
        url: "https://zybiov.com/og-image.png",
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
      "Zybiov Multi-Activities Limited bridges global pharmaceutical manufacturing in India (Mumbai) with distribution networks in Sudan. Quality in Every Step.",
    images: ["https://zybiov.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["400", "500", "700", "800"],
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: [
                    "https://www.zybiov.com/",
                    "https://www.zybiov.com/about",
                    "https://www.zybiov.com/expertise",
                    "https://www.zybiov.com/why-us",
                    "https://www.zybiov.com/contact"
                  ],
                  eagerness: "moderate"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager / GA4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ScrollProgressBar />
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

