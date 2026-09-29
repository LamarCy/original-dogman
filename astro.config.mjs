import { defineConfig } from 'astro/config';

// Set PUBLIC_SITE_URL in the host's build env once the domain is chosen; the
// fallback is only so canonical/OG tags resolve during local builds.
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://originaldogman.netlify.app';

export default defineConfig({ site: SITE_URL, output: 'static' });
