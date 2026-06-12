// ─────────────────────────────────────────────
// FAMILY REGISTRY — single source of truth for the
// instructionalai.org ecosystem. Add a new site = add one
// object here, publish a new kit version, bump consumers.
//
// URLs are each site's REAL canonical host (verified live):
// most sites are www-canonical, but learningsciencelabs.org
// and designtheprompt.com are apex-canonical with no www
// attached. Do not "normalize" these.
// ─────────────────────────────────────────────

export const FAMILY_SITES = [
  {
    id: 'addie-guide',
    name: 'ADDIE Guide',
    tagline: 'The Instructional Design Reference',
    description:
      'A free, practitioner-first reference covering the full ADDIE process — from analysis to evaluation — plus Bloom\'s Taxonomy, learning theories, templates, and interactive tools.',
    url: 'https://www.addieguide.com',
    status: 'live',
  },
  {
    id: 'design-the-prompt',
    name: 'Design the Prompt',
    tagline: 'Prompt Engineering for IDs',
    description:
      'A free resource teaching instructional designers how to use AI effectively — covering AI literacy, prompt craft, ADDIE-specific prompt templates, and the Prompt Architect tool.',
    url: 'https://designtheprompt.com',
    status: 'live',
  },
  {
    id: 'learning-science',
    name: 'Learning Science Lab',
    tagline: 'Evidence-Based Learning Design',
    description:
      'A free reference translating cognitive science research into practical guidance for L&D professionals — 10 interactive principle explorations, myth busting, and research literacy tools.',
    url: 'https://learningsciencelabs.org',
    status: 'live',
  },
  {
    id: 'design-for-access',
    name: 'Design for Access',
    tagline: 'Accessibility & Universal Design for Learning',
    description:
      'A free reference teaching accessibility and Universal Design for Learning through direct experience — interactive experiments, barrier simulations, code pattern comparisons, and audit tools.',
    url: 'https://www.designforaccess.org',
    status: 'live',
  },
  {
    id: 'rethink-assessment',
    name: 'Rethink Assessment',
    tagline: 'Assessment Design for the AI Era',
    description:
      'A free reference reframing assessment design around AI resilience, the ARMS framework, and the assessment-to-performance loop.',
    url: 'https://www.rethinkassessment.org',
    status: 'live',
  },
  {
    id: 'design-microlearning',
    name: 'Design Micro-Learning',
    tagline: 'Microlearning & Performance Support Design',
    description:
      'A free, practice-what-you-preach reference teaching instructional designers how to build effective microlearning — grounded in the 5 Moments of Need, spaced practice research, and job aid design. 26 principles, 3 interactive tools.',
    url: 'https://www.designmicrolearning.com',
    status: 'live',
  },
  {
    id: 'aafl-research',
    name: 'AAFL Research',
    tagline: 'Agent-Augmented Framework for Learning',
    description:
      'Independent research site for AAFL — a governance framework for instructional design in the agent era. ADDIE spine plus three cross-cutting layers, eight HITL gates, the Translator\'s Loop (DDVR), and performance-anchored evaluation. Citable figure library and Zenodo-hosted whitepaper.',
    url: 'https://www.aaflresearch.org',
    status: 'live',
  },
  {
    id: 'storyboard-media',
    name: 'Storyboard & Media Design',
    tagline: 'The Visual Craft of Instructional Design',
    description:
      'A curated gallery of multimedia principles, storyboard walkthroughs, and working templates for instructional designers — covering Mayer\'s 12, cognitive load, visual hierarchy, and scene-by-scene case studies.',
    url: 'https://www.designthestory.org',
    status: 'coming-soon',
  },
]

/** Sites safe to link to — filters out entries with no live deployment. */
export const liveSites = () => FAMILY_SITES.filter((s) => s.status === 'live')

export const FAMILY_BRAND = {
  name: 'instructionalai.org',
  tagline: 'Free tools and references for instructional designers',
  purpose:
    'A growing collection of free, focused resources at the intersection of instructional design and AI — built by a practitioner, for practitioners.',
  author: 'Ruchir Bakshi',
}

export const PORTAL_URL = 'https://www.instructionalai.org'
export const FAMILY_NAME = 'instructionalai.org'
