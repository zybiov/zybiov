export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://www.zybiov.com/#organization",
    "name": "Zybiov Multi-Activities Limited",
    "legalName": "Zybiov Multi-Activities Limited",
    "alternateName": [
      "Zybiov",
      "zybiov",
      "zybiov.com",
      "زيبوف",
      "Zybiov Sudan",
      "Zybiov India",
      "Zybiov Pharma",
      "Zybiov Multi-Activities"
    ],
    "url": "https://www.zybiov.com",
    "logo": "https://www.zybiov.com/logo.webp",
    "image": "https://www.zybiov.com/og-image.png",
    "sameAs": [
      "https://www.linkedin.com/in/zybiov-co-ltd-976298421",
      "https://www.instagram.com/zybiov.ltd",
      "https://www.facebook.com/share/176TZy5JGM/",
      "https://www.youtube.com/@Zybiov"
    ],
    "description": "Zybiov Multi-Activities Limited (Zybiov) is a premier pharmaceutical and medical supplies importer and distributor, bridging global manufacturing in India (Mumbai) with regional distribution networks in Sudan and East Africa.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+249-111-909-092",
        "contactType": "customer service",
        "areaServed": ["SD", "IN", "Global"],
        "availableLanguage": ["Arabic", "English"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Khartoum",
        "addressCountry": "Sudan",
        "contactType": "Headquarters"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India",
        "contactType": "Liaison & Sourcing Office"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": "https://www.zybiov.com/#localbusiness",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": "Zybiov",
    "logo": "https://www.zybiov.com/logo.webp",
    "image": "https://www.zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
    "url": "https://www.zybiov.com",
    "priceRange": "$$",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.zybiov.com/#website",
    "url": "https://www.zybiov.com",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": "Zybiov",
    "description": "Zybiov — Global Pharmaceutical & Medical Supplies Distribution — Sudan & India",
    "publisher": {
      "@id": "https://www.zybiov.com/#organization"
    },
    "inLanguage": ["en", "ar"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.zybiov.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.zybiov.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Expertise",
        "item": "https://www.zybiov.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Why Us",
        "item": "https://www.zybiov.com/why-us"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://www.zybiov.com/contact"
      }
    ]
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.zybiov.com/#medicalbusiness",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": ["Zybiov Pharma", "Zybiov Medical Supplies"],
    "url": "https://www.zybiov.com",
    "logo": "https://www.zybiov.com/logo.webp",
    "image": "https://www.zybiov.com/og-image.png",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
    </>
  );
}

