// React 19 hoists <title>, <meta>, and <link> from anywhere in the tree
// to <head> automatically — no provider/library needed.

// </script>-safe JSON-LD serialization: a "<" in any string value could
// otherwise close the script tag and inject markup.
function safeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

/**
 * SEOHead — per-page metadata for ecosystem sites.
 *
 * Site-level props (same on every page; wrap once per site):
 *   siteName, siteUrl (canonical origin incl. www where applicable),
 *   defaultTitle (used when no page title), defaultDescription, ogImage.
 * Page-level props: title, description, path (e.g. "/experiments"), schema (JSON-LD object).
 */
export default function SEOHead({
  siteName,
  siteUrl,
  defaultTitle,
  defaultDescription = '',
  ogImage,
  title,
  description,
  path = '',
  schema = null,
}) {
  const fullTitle = title ? `${title} — ${siteName}` : (defaultTitle || siteName)
  const metaDescription = description || defaultDescription
  const canonical = `${siteUrl}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {schema && (
        <script
          type="application/ld+json"
          // React 19 won't hoist inline scripts via children reliably; use innerHTML.
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
      )}
    </>
  )
}
