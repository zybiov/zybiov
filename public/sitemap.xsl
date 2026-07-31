<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Zybiov Multi-Activities Limited</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1E244B;
            background-color: #F8FAFC;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            padding: 32px;
            border: 1px solid #E2E8F0;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 20px;
            margin-bottom: 20px;
          }
          h1 {
            font-size: 22px;
            font-weight: 700;
            color: #1E244B;
            margin: 0;
          }
          p.sub {
            color: #64748B;
            font-size: 14px;
            margin: 8px 0 0 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
          }
          th {
            background-color: #F1F5F9;
            color: #475569;
            text-align: left;
            padding: 12px 16px;
            font-size: 13px;
            font-weight: 600;
            border-bottom: 2px solid #E2E8F0;
          }
          td {
            padding: 14px 16px;
            font-size: 14px;
            border-bottom: 1px solid #F1F5F9;
          }
          tr:hover td {
            background-color: #F8FAFC;
          }
          a {
            color: #5B43D6;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            background: #EEF2FF;
            color: #4F46E5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <h1>Zybiov XML Sitemap</h1>
              <p class="sub">Generated for Googlebot, Bingbot, and search engine crawlers. Formatted for human reading.</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
