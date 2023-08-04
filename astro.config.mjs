import { defineConfig, sharpImageService } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import alpinejs from '@astrojs/alpinejs'
import compressor from 'astro-compressor'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://eokic.com',
  vite: {
    // https://vitejs.dev/config
  },
  integrations: [
    astroImageTools,
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    alpinejs(),
    sitemap(),
    compressor(),
  ],
  image: {
    service: sharpImageService(),
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
})
