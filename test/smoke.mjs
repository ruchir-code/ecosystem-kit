// Smoke test: every export renders, and SEOHead neutralizes a </script> injection.
import assert from 'node:assert/strict'
import { createElement as h } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  FAMILY_SITES,
  FAMILY_BRAND,
  PORTAL_URL,
  FAMILY_NAME,
  liveSites,
  IaiLogo,
  FamilyBadge,
  EcosystemBanner,
  SEOHead,
} from '../dist/index.js'

// Registry shape
assert.equal(FAMILY_SITES.length, 8)
assert.ok(FAMILY_SITES.every((s) => s.id && s.name && s.url.startsWith('https://') && s.status))
assert.equal(liveSites().length, 7, 'storyboard-media must not be in liveSites')
assert.ok(!liveSites().some((s) => s.id === 'storyboard-media'))
// Apex-canonical sites must NOT carry www
assert.equal(FAMILY_SITES.find((s) => s.id === 'design-the-prompt').url, 'https://designtheprompt.com')
assert.equal(FAMILY_SITES.find((s) => s.id === 'learning-science').url, 'https://learningsciencelabs.org')
assert.equal(PORTAL_URL, 'https://www.instructionalai.org')
assert.equal(FAMILY_NAME, 'instructionalai.org')
assert.ok(FAMILY_BRAND.name)

// Components render
const logo = renderToStaticMarkup(h(IaiLogo, { size: 40 }))
assert.ok(logo.includes('<svg') && logo.includes('#EA580C'))

const badge = renderToStaticMarkup(h(FamilyBadge, {}))
assert.ok(badge.includes(PORTAL_URL))

for (const variant of ['card', 'strip', 'band']) {
  const html = renderToStaticMarkup(h(EcosystemBanner, { variant, siteName: 'Test Site', accent: '#2D8282' }))
  assert.ok(html.includes(PORTAL_URL), `${variant} links to portal`)
  assert.ok(html.includes('instructionalai.org'), `${variant} names the family`)
}

// SEOHead basics
const seo = renderToStaticMarkup(
  h(SEOHead, { siteName: 'Test', siteUrl: 'https://example.org', title: 'Page', path: '/p' })
)
assert.ok(seo.includes('<title>Page — Test</title>'))
assert.ok(seo.includes('https://example.org/p'))

// SEOHead XSS: a </script> inside JSON-LD must come out escaped
const evil = renderToStaticMarkup(
  h(SEOHead, {
    siteName: 'Test',
    siteUrl: 'https://example.org',
    schema: { '@type': 'WebSite', name: '</script><script>alert(1)</script>' },
  })
)
assert.ok(!evil.includes('</script><script>'), 'JSON-LD must not contain a live script break')
assert.ok(evil.includes('\\u003c/script'), 'JSON-LD must contain the escaped form')

console.log('smoke: all assertions passed')
