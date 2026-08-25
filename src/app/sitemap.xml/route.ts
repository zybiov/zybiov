export async function GET() {
  const baseUrl = "https://zybiov.com";
  const dateStr = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.webp</image:loc>
      <image:title>Zybiov Multi-Activities Limited Logo</image:title>
      <image:caption>Zybiov Multi-Activities Limited — Global Pharmaceutical Distribution</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/og-image.png</image:loc>
      <image:title>Zybiov Global Pharmaceutical Operations</image:title>
      <image:caption>Bridging Indian pharmaceutical manufacturing with Sudanese healthcare distribution</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/pharmaceutical-products.webp</image:loc>
      <image:title>Zybiov Essential Pharmaceuticals</image:title>
      <image:caption>WHO-GMP certified medicine importation for Sudan</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/medical-equipment.webp</image:loc>
      <image:title>Zybiov Medical and Diagnostic Equipment</image:title>
      <image:caption>Hospital and laboratory diagnostic supplies</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/nutritional-supplements.webp</image:loc>
      <image:title>Zybiov Nutritional Supplements</image:title>
      <image:caption>Premium wellness and clinical nutrition supplies</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/about-pharmacist.webp</image:loc>
      <image:title>Zybiov Pharmacist and Quality Assurance</image:title>
      <image:caption>Commitment to international quality standards and healthcare excellence</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/patient-care.webp</image:loc>
      <image:title>Zybiov Healthcare Delivery Sudan</image:title>
      <image:caption>Serving healthcare providers and communities across Sudan</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/expertise</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/pharmaceutical-products.webp</image:loc>
      <image:title>Pharmaceutical Sourcing and Distribution</image:title>
      <image:caption>Specialized medicine procurement and cold-chain distribution</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/medical-equipment.webp</image:loc>
      <image:title>Medical Equipment and Devices</image:title>
      <image:caption>Diagnostic equipment and hospital supplies</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/nutritional-supplements.webp</image:loc>
      <image:title>Nutritional and Wellness Supplements</image:title>
      <image:caption>Dietary supplements and preventive health products</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/why-us</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/gmp-facilities.webp</image:loc>
      <image:title>WHO-GMP Manufacturing Standards</image:title>
      <image:caption>Strict regulatory compliance and rigorous quality control</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/vision-future.webp</image:loc>
      <image:title>Zybiov Strategic Healthcare Vision</image:title>
      <image:caption>Resilient pharmaceutical supply chain connecting India with East Africa</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
