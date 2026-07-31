export async function GET() {
  const baseUrl = "https://www.zybiov.com";
  const dateStr = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/about" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/about" />
  </url>
  <url>
    <loc>${baseUrl}/expertise</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/expertise" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/expertise" />
  </url>
  <url>
    <loc>${baseUrl}/why-us</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/why-us" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/why-us" />
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/contact" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/contact" />
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/privacy-policy" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/privacy-policy" />
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
