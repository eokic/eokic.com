/** @type {import('tailwindcss').Config} */

// METHODS
const plugin = require('tailwindcss/plugin')
import { generateTwScale } from './src/utils/tw-scale'

// CONSTANTS
import {
  BREAKPOINTS,
  BASE_FONT_PX,
  BASE_FONT_REM,
} from './src/utils/tw-scale'

// CONFIGURATION MODULES
import aspectRatio from './src/_tailwind/aspect-ratio'
import brand from './src/_tailwind/brand'
import { fontSize } from './src/_tailwind/font-size'
import { lineHeight } from './src/_tailwind/line-height'
import { spacing } from './src/_tailwind/spacing'

// Parse sizing objects
const fontSizes = generateTwScale(fontSize)
const lineHeights = generateTwScale(lineHeight)
const spacings = generateTwScale(spacing)

// EXPORT
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],


  /* --------------------------------------------------------------------------
    PLUGINS

    Note: had to add custom styles here because @apply did not work.
    https://docs.astro.build/en/guides/integrations-guide/tailwind/#class-does-not-exist-with-apply-directives
    https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
  -------------------------------------------------------------------------- */
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ...fontSizes.style,
        ...lineHeights.style,
        ...spacings.style,
      })
    }),
  ],


  /* --------------------------------------------------------------------------
    THEME CONFIG
  -------------------------------------------------------------------------- */
  theme: {
    screens: BREAKPOINTS,

    container: {
      center: true,
      padding: spacing?.clamp?.edge
        ? `clamp(${spacing.clamp.edge.min}, ${spacing.clamp.edge.mid}, ${spacing.clamp.edge.max})`
        : '2rem',
      screens: {
        sm: 'auto',
        md: 'auto',
        lg: 'auto',
        xl: '1240px',
        '2xl': '1380px',
      },
    },

    extend: {
      colors: brand.colors,
      lineHeight: lineHeights.theme,
      aspectRatio,

      typography: {
        DEFAULT: {
          css: {
            fontSize: null, // makes `prose` inherit the font-size + allows customization
            lineHeight: null, // makes `prose` inherit the line-height + allows customization
          },
        },
      },

      dropShadow: {
        xl: [
          '0 20px 13px rgb(0 0 0 / 0.1)',
          '0 8px 5px rgb(0 0 0 / 0.08)',
        ],
        '2xl': '0 20px 25px rgb(0 0 0 / 0.25)',
      },

      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },

    fontFamily: brand.font.family,
    fontSize: {
      base: `${BASE_FONT_REM}rem`,
      ...fontSizes.theme,
    },

    spacing: {
      ...spacings.theme,
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '156px',
      12: '192px',
    },

    borderRadius: {
      none: '0',
      sm: '.2rem',
      DEFAULT: '.42rem',
      md: '.5rem',
      lg: '.75rem',
      xl: '1.1rem',
      full: '9999px',
    },
  },


  /* --------------------------------------------------------------------------
    THESE CLASSES ARE ALWAYS OUTPUTTED
  -------------------------------------------------------------------------- */
  safelist: [
    'aspect-1/1',
    'aspect-1/2',
    'aspect-1/3',
    'aspect-1/4',
    'aspect-1/5',
    'aspect-2/1',
    'aspect-2/3',
    'aspect-2/5',
    'aspect-3/1',
    'aspect-3/2',
    'aspect-3/4',
    'aspect-3/5',
    'aspect-4/1',
    'aspect-4/3',
    'aspect-4/5',
    'aspect-5/1',
    'aspect-5/2',
    'aspect-5/3',
    'aspect-5/4',
    'aspect-5/7',
    'aspect-5/8',
    'aspect-7/5',
    'aspect-8/5',
    'aspect-9/16',
    'aspect-9/21',
    'aspect-16/9',
    'aspect-21/9',
  ],
}
