import { defineConfig, sharpImageService } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  site: 'https://eokic.com',
  integrations: [
    astroImageTools,
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    alpinejs(),
    sitemap(),
  ],
  image: {
    service: sharpImageService(),
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
})
