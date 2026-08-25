export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://zybiov.com/#organization",
    "name": "Zybiov Multi-Activities Limited",
    "legalName": "Zybiov Multi-Activities Limited",
    "alternateName": [
      "Zybiov",
      "zybiov",
      "zybiov.com",
      "Zybiov Sudan",
      "Zybiov India",
      "Zybiov Mumbai",
      "Zybiov Khartoum",
      "Zybiov Pharma",
      "Zybiov Multi-Activities",
      "شركة زيبوف للأنشطة المتعددة المحدودة",
      "زيبوف"
    ],
    "disambiguatingDescription": "Zybiov Multi-Activities Limited (distinct from Zybio Inc.) is a premier private limited pharmaceutical and medical supplies importer and distributor, bridging global manufacturing in India (Mumbai) with regional healthcare distribution networks in Sudan and East Africa.",
    "url": "https://zybiov.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zybiov.com/logo.webp",
      "width": "512",
      "height": "512",
      "caption": "Zybiov Multi-Activities Limited Official Logo"
    },
    "image": "https://zybiov.com/og-image.png",
    "email": "zybiovofficial@gmail.com",
    "telephone": "+249-111-909-092",
    "foundingLocation": {
      "@type": "Place",
      "name": "Khartoum, Sudan"
    },
    "brand": {
      "@type": "Brand",
      "name": "Zybiov",
      "slogan": "Quality in Every Step | Global Pharmaceutical Distribution"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zybiov/",
      "https://www.instagram.com/zybiov",
      "https://www.facebook.com/share/176TZy5JGM/",
      "https://www.youtube.com/@Zybiov"
    ],
    "description": "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor bridging global manufacturing in India (Mumbai) with regional healthcare networks in Sudan.",
    "knowsAbout": [
      "Pharmaceutical Sourcing & Importation Sudan",
      "Medical Diagnostic Equipment Wholesale",
      "Nutritional Supplements Distribution",
      "Cold-Chain Pharmaceutical Logistics",
      "WHO-GMP Compliance & Quality Control",
      "India-Sudan Pharmaceutical Trade",
      "Hospital Equipment Supply Chain",
      "East Africa Healthcare Logistics"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+249-111-909-092",
        "email": "zybiovofficial@gmail.com",
        "contactType": "Customer Service & Trade Inquiries",
        "areaServed": ["SD", "IN", "Global"],
        "availableLanguage": ["Arabic", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+249-111-909-092",
        "email": "zybiovofficial@gmail.com",
        "contactType": "Pharmaceutical Sourcing & Liaison",
        "areaServed": ["IN", "SD"],
        "availableLanguage": ["English", "Hindi", "Arabic"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Khartoum Al-Riyadh",
        "addressLocality": "Khartoum",
        "addressCountry": "Sudan",
        "contactType": "Headquarters"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Kalbadevi Dava Bazar, Marine Lines",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400002",
        "addressCountry": "India",
        "contactType": "Liaison & Sourcing Hub"
      }
    ]
  };

  const localBusinessSudan = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": "https://zybiov.com/#sudan-hq",
    "name": "Zybiov Multi-Activities Limited — Sudan Headquarters",
    "alternateName": ["Zybiov Khartoum", "Zybiov Sudan", "Zybiov Pharma Sudan"],
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
    "email": "zybiovofficial@gmail.com",
    "url": "https://zybiov.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD, SDG",
    "paymentAccepted": "Bank Transfer, Commercial Letter of Credit",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khartoum Al-Riyadh",
      "addressLocality": "Khartoum",
      "addressCountry": "SD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.5007",
      "longitude": "32.5599"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  const localBusinessIndia = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": "https://zybiov.com/#mumbai-liaison",
    "name": "Zybiov Multi-Activities Limited — Mumbai Liaison & Sourcing Office",
    "alternateName": ["Zybiov Mumbai", "Zybiov India Sourcing Hub", "Zybiov Dava Bazar Office"],
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
    "email": "zybiovofficial@gmail.com",
    "url": "https://zybiov.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalbadevi Dava Bazar, Marine Lines",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.9482",
      "longitude": "72.8295"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zybiov.com/#website",
    "url": "https://zybiov.com",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": ["Zybiov", "zybiov.com", "زيبوف"],
    "description": "Zybiov — Global Pharmaceutical & Medical Supplies Distribution — Sudan & India",
    "publisher": {
      "@id": "https://zybiov.com/#organization"
    },
    "inLanguage": ["en", "ar"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://zybiov.com/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zybiov.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Zybiov",
        "item": "https://zybiov.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Areas of Expertise",
        "item": "https://zybiov.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Why Zybiov",
        "item": "https://zybiov.com/why-us"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact Zybiov",
        "item": "https://zybiov.com/contact"
      }
    ]
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://zybiov.com/#medicalbusiness",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": ["Zybiov Pharma", "Zybiov Medical Supplies", "Zybiov Healthcare"],
    "url": "https://zybiov.com",
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
    "priceRange": "$$",
    "knowsAbout": [
      "Pharmaceutical Sourcing & Importation",
      "Medical Equipment Distribution",
      "Nutritional Supplements Wholesale",
      "Cold-Chain Pharmaceutical Logistics",
      "WHO-GMP Compliance & Quality Control",
      "Hospital Equipment Supply Chain"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "WHO-GMP Partner Manufacturing Standards"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ISO 9001 Quality Management Certification"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khartoum Al-Riyadh",
      "addressLocality": "Khartoum",
      "addressCountry": "SD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://zybiov.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Zybiov Multi-Activities Limited?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor. Headquartered in Khartoum, Sudan with a liaison and sourcing hub in Mumbai, India, Zybiov delivers certified pharmaceuticals, diagnostic equipment, and nutritional supplements across healthcare networks in Sudan and East Africa."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Zybiov located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zybiov Multi-Activities Limited operates its main corporate headquarters in Khartoum (Al-Riyadh), Sudan, and maintains an international pharmaceutical sourcing and liaison hub in Mumbai (Kalbadevi Dava Bazar), Maharashtra, India."
        }
      },
      {
        "@type": "Question",
        "name": "Is Zybiov Multi-Activities Limited related to Zybio Inc.?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Zybiov Multi-Activities Limited is an independent private limited corporation specializing in pharmaceutical distribution, healthcare procurement, and medical supply chain between India and Sudan. It is distinct from Zybio Inc."
        }
      },
      {
        "@type": "Question",
        "name": "What products and healthcare services does Zybiov distribute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zybiov distributes three primary categories: 1) Essential and specialty pharmaceuticals sourced from WHO-GMP compliant manufacturers; 2) Advanced medical equipment, diagnostic machinery, and hospital consumables; 3) Clinical nutritional supplements and wellness formulations."
        }
      },
      {
        "@type": "Question",
        "name": "How can healthcare providers or manufacturers contact Zybiov?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Zybiov directly via phone at +249-111-909-092, email at zybiovofficial@gmail.com, or through the official website contact form at https://zybiov.com/contact."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSudan) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessIndia) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
