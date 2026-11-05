import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gunjan-l.github.io',
  base: '/riveredge-villa',
  integrations: [tailwind()],
});
