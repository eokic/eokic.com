import { defineConfig } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import cloudflare from '@astrojs/cloudflare'
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
  output: 'server',
  adapter: cloudflare(),
  experimental: {
    viewTransitions: true,
  },
})
