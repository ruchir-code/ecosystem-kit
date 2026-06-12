# @instructionalai/ecosystem-kit

Shared components and the canonical site registry for the
[instructionalai.org](https://www.instructionalai.org) ecosystem.
Single source of truth — sites import these instead of carrying local copies.

```bash
npm install @instructionalai/ecosystem-kit
```

## Exports

| Export | What it is |
|---|---|
| `FAMILY_SITES` | Canonical roster of ecosystem sites (per-site canonical URLs, `status` field) |
| `liveSites()` | `FAMILY_SITES` filtered to deployed sites — use this for anything that renders links |
| `FAMILY_BRAND`, `PORTAL_URL`, `FAMILY_NAME` | Brand constants |
| `<IaiLogo />` | SVG brand mark (`size`, `dotColor`, `className`) |
| `<FamilyBadge />` | Small footer link back to the portal (`size`, `color`) |
| `<EcosystemBanner />` | "Part of the ecosystem" banner — `variant="card" \| "strip" \| "band"`, themed via `accent` + `tokens`, never by forking |
| `<SEOHead />` | React 19 native metadata hoisting; `</script>`-safe JSON-LD via `schema` prop |

## Usage

```jsx
import { EcosystemBanner, SEOHead } from '@instructionalai/ecosystem-kit'

<EcosystemBanner
  variant="card"
  siteName="Design for Access"
  accent="#67E8F9"
  tokens={{ ink: 'var(--color-ink)', muted: 'var(--color-muted)', headingFont: 'var(--font-heading)' }}
/>

<SEOHead
  siteName="Design for Access"
  siteUrl="https://www.designforaccess.org"
  title="Experiments"
  path="/experiments"
  schema={{ '@type': 'WebSite' }}
/>
```

Per-site variation is a **prop, not a fork**. If a site needs something the
props can't express, extend the kit and publish a new version.

`recipes/vercel-headers.json` holds the fleet-standard `vercel.json` security
headers block (HSTS intentionally omitted — Vercel sends it by default).

## Releasing

Bump version, tag `vX.Y.Z`, push the tag. CI publishes via npm trusted
publishing (OIDC, no stored token). Then bump the dependency in consuming
sites.
