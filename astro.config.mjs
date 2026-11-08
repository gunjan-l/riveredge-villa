import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://gunjan-l.github.io';
const base = process.env.BASE_PATH ?? '/riveredge-villa';

export default defineConfig({
  site,
  base,
  integrations: [tailwind(), sitemap()],
});

