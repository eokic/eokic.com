/** @type {import('tailwindcss').Config} */

// Breakpoints
const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl']

// Generate variations
const multiplication = (key, sizing) => {
  const output = {}

  const increment = (sizing.max - sizing.min) / breakpoints.length

  breakpoints.forEach((breakpoint, index) => {
    output[`${key}-${breakpoint}`] = `${sizing.min + increment * (index + 1)}${
      sizing.unit || ''
    }`
  })

  return {
    [key]: `${sizing.min}${sizing.unit || ''}`,
    ...output,
  }
}


/* --------------------------------------------------------------------------
  FONT SIZES
-------------------------------------------------------------------------- */
const fontSize = {
  h1: {
    min: 24,
    max: 28,
    unit: 'px',
  },
}

const fontSizes = () => {
  let sizes = {}

  Object.keys(fontSize).forEach(key => {
    sizes = { ...sizes, ...multiplication(key, fontSize[key]) }
  })

  return sizes
}


/* --------------------------------------------------------------------------
  LINE HEIGHT
-------------------------------------------------------------------------- */
const lineHeight = {
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

const lineHeights = () => {
  let sizes = {}

  Object.keys(lineHeight).forEach(key => {
    sizes = { ...sizes, ...multiplication(key, lineHeight[key]) }
  })

  return sizes
}


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
      padding: '1rem',
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

      lineHeight: {
        ...lineHeights(),
      },
    },

    fontSize: {
      ...fontSizes(),
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
        'Montserrat',
        'system-ui',
        'sans-serif',
      ],
    },
  },
}
