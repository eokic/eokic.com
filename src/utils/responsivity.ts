import pxToEm from './pxToEm'

// CONSTANTS
export const BASE_FONT_REM = 1.125
export const BASE_FONT_PX = BASE_FONT_REM * 16
export const BREAKPOINTS = ['sm', 'md', 'lg', 'xl', '2xl']

// TYPES
export type ResponsiveSizing = {
  min: number
  max: number
  unit?: string
}


/* --------------------------------------------------------------------------
  TAILWIND CONFIG

  Sample output: {
    'h1': '30px',
    'h1-sm': '30px',
    'h1-md': '34px',
    'h1-lg': '38px',
    'h1-xl': '42px',
    'h1-2xl': '46px',
  }
-------------------------------------------------------------------------- */
export function generateTailwindConfig (
  key: string,
  sizing: ResponsiveSizing,
  convertToEm = false,
) {
  const output = {}
  const increment = (sizing.max - sizing.min) / BREAKPOINTS.length

  BREAKPOINTS.forEach((breakpoint, index) => {
    output[`${key}-${breakpoint}`] = sizing.min + (increment * (index + 1))
    if (convertToEm && sizing.unit === 'px')
      output[`${key}-${breakpoint}`] = pxToEm(BASE_FONT_PX, output[`${key}-${breakpoint}`], true)
    else if (sizing.unit)
      output[`${key}-${breakpoint}`] += sizing.unit
  })

  return {
    [key]: `${sizing.min}${sizing.unit || ''}`,
    ...output,
  }
}


/* --------------------------------------------------------------------------
  MAIN METHOD FOR PARSING SIZING OBJECTS
-------------------------------------------------------------------------- */
export default function parseSizingObj (
  sizing: Record<string, ResponsiveSizing>,
  convertToEm = false,
) {
  return Object.keys(sizing).reduce((sizes, key) => ({
    ...sizes,
    ...generateTailwindConfig(key, sizing[key], convertToEm),
  }), {})
}
