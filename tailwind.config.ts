/** @type {import('tailwindcss').Config} */

// TYPES
import type { ResponsiveSizing } from './src/utils/responsivity'

// METHODS
import parseSizingObj from './src/utils/responsivity'

// CONSTANTS
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from './src/utils/responsivity'


/* --------------------------------------------------------------------------
  FONT SIZES
-------------------------------------------------------------------------- */
const fontSize: Record<string, ResponsiveSizing> = {
  h1: {
    min: 30,
    max: 46,
    unit: 'px',
  },
  h2: {
    min: 30,
    max: 38,
    unit: 'px',
  },
  h3: {
    min: 22,
    max: 28,
    unit: 'px',
  },
  h4: {
    min: 22,
    max: 24,
    unit: 'px',
  },
  'body-1': {
    min: BASE_FONT_PX * 0.88,
    max: BASE_FONT_PX * 0.95,
    unit: 'px',
  },
  body: {
    min: 18,
    max: 19,
    unit: 'px',
  },
  'body+1': {
    min: BASE_FONT_PX * 1.05,
    max: BASE_FONT_PX * 1.12,
    unit: 'px',
  },
  lead: {
    min: BASE_FONT_PX * 1.15,
    max: BASE_FONT_PX * 1.25,
    unit: 'px',
  },
}


/* --------------------------------------------------------------------------
  LINE HEIGHTS
-------------------------------------------------------------------------- */
const lineHeight: Record<string, ResponsiveSizing> = {
  body: {
    min: 1.12,
    max: 1.15,
  },
  prose: {
    min: 1.5,
    max: 1.6,
  },
  h1: {
    min: 1.25,
    max: 1.18,
  },
}


/* --------------------------------------------------------------------------
  SPACINGS
-------------------------------------------------------------------------- */
const spacing: Record<string, ResponsiveSizing> = {
  edge: {
    min: 25,
    max: 40,
    unit: 'px',
  },
  section: {
    min: 25,
    max: 50,
    unit: 'px',
  },
}

const edge = {}


/* --------------------------------------------------------------------------
  BRAND COLORS
-------------------------------------------------------------------------- */
// const brandColors = {
//   primary: '#FE3B1F',
//   secondary: '#0C1D3B',
// }


// EXPORT
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    // colors: {
    //   primary: 'hsl(var(--color-primary) / 1)',
    //   secondary: 'hsl(var(--color-secondary) / 1)',
    //   tertiary: 'hsl(var(--color-tertiary) / 1)',
    // },

    extend: {
      screens: {
        sm: '560px',
      },

      aspectRatio: {
        '1/1': '1 / 1',
        '1/2': '1 / 2',
        '1/3': '1 / 3',
        '1/4': '1 / 4',
        '1/5': '1 / 5',
        '2/1': '2 / 1',
        '2/3': '2 / 3',
        '2/5': '2 / 5',
        '3/1': '3 / 1',
        '3/2': '3 / 2',
        '3/4': '3 / 4',
        '3/5': '3 / 5',
        '4/1': '4 / 1',
        '4/3': '4 / 3',
        '4/5': '4 / 5',
        '5/1': '5 / 1',
        '5/2': '5 / 2',
        '5/3': '5 / 3',
        '5/4': '5 / 4',
        '5/7': '5 / 7',
        '5/8': '5 / 8',
        '7/5': '7 / 5',
        '8/5': '8 / 5',
        '9/16': '9 / 16',
        '9/21': '9 / 21',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },

      lineHeight: {
        ...parseSizingObj(lineHeight),
      },

      typography: {
        DEFAULT: {
          css: {
            fontSize: null,
            lineHeight: null,
          },
        },
      },
    },

    fontSize: {
      base: `${BASE_FONT_REM}rem`,
      ...parseSizingObj(fontSize, true),
    },

    fontFamily: {
      sans: [
        'SF Pro', 'system-ui', '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Noto Sans', 'Liberation Sans',
        'sans-serif',
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji',
      ],
      display: [
        'Kalam',
        'Caveat',
        'Merienda',
        'Fuzzy Bubbles',
        'Comic Neue',
        'Palatino',
        'SF Pro',
        'system-ui',
        '-apple-system',
        'sans-serif',
      ],
    },

    spacing: {
      ...parseSizingObj(spacing, true),
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '96px',
      9: '128px',
      10: '192px',
    },
  },

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
