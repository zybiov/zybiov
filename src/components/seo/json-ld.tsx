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
      "زيبوف",
      "Zybiov Sudan",
      "Zybiov India",
      "Zybiov Pharma",
      "Zybiov Multi-Activities"
    ],
    "url": "https://zybiov.com",
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "email": "zybiovofficial@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/company/zybiov/",
      "https://www.instagram.com/zybiov",
      "https://www.facebook.com/share/176TZy5JGM/",
      "https://www.youtube.com/@Zybiov"
    ],
    "description": "Zybiov Multi-Activities Limited (Zybiov) is a premier pharmaceutical and medical supplies importer and distributor, bridging global manufacturing in India (Mumbai) with regional distribution networks in Sudan and East Africa.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+249-111-909-092",
        "email": "zybiovofficial@gmail.com",
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
    "@id": "https://zybiov.com/#localbusiness",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": "Zybiov",
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
    "url": "https://zybiov.com",
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
    "@id": "https://zybiov.com/#website",
    "url": "https://zybiov.com",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": "Zybiov",
    "description": "Zybiov — Global Pharmaceutical & Medical Supplies Distribution — Sudan & India",
    "publisher": {
      "@id": "https://zybiov.com/#organization"
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
        "item": "https://zybiov.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://zybiov.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Expertise",
        "item": "https://zybiov.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Why Us",
        "item": "https://zybiov.com/why-us"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://zybiov.com/contact"
      }
    ]
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://zybiov.com/#medicalbusiness",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": ["Zybiov Pharma", "Zybiov Medical Supplies"],
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

  const indiaOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": "https://zybiov.com/#mumbaioffice",
    "name": "Zybiov Multi-Activities Limited — Mumbai Liaison & Sourcing Office",
    "alternateName": ["Zybiov Mumbai", "Zybiov India Sourcing Hub", "Zybiov Dava Bazar"],
    "logo": "https://zybiov.com/logo.webp",
    "image": "https://zybiov.com/og-image.png",
    "telephone": "+249-111-909-092",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indiaOfficeSchema) }}
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

