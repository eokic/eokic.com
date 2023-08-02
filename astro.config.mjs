import { defineConfig } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://eokic.com',
  integrations: [
    astroImageTools,
    tailwind(),
    sitemap(),
  ],
  experimental: {
    viewTransitions: true,
  },
})
