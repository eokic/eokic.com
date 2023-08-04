import pxToEm from './pxToEm'

// CONSTANTS
export const BASE_FONT_REM = 1.125
export const BASE_FONT_PX = BASE_FONT_REM * 16
export const BREAKPOINTS = {
  sm: '560px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// TYPES
export type ScaleInput = {
  type: 'spacing' | 'fontSize' | 'lineHeight'
  scale?: Record<string, {
    min: number
    max: number
    direction?: 'x' | 'y' | 'both' // applies to spacing only
    marginMult?: number // used on lineHeight's for negative margins
    unit?: string // e.g. 'px'
  }>
  clamp?: Record<string, {
    min: string
    mid: string
    max: string
  }>
}

/*
  ThemeOutput sample: {
    'h1': '30px',
    'h1-sm': '40px',
    'h1-md': '50px',
    ...
  }
*/
export type ThemeOutput = Record<string, string>

/*
  StyleOutput sample: {
    fontSize: '30px',
    ['@media (min-width: 560px']: { fontSize: '40px' },
    ['@media (min-width: 768px']: { fontSize: '50px' },
    ...
  }
*/
export type StyleOutput = Record<string, string | Record<string, string>>
export type ScaleOutput = {
  theme: ThemeOutput
  style: StyleOutput
}


export function generateTwScale (
  scale: ScaleInput,
): ScaleOutput {
  const theme: ThemeOutput = {}
  const style: StyleOutput = {}


  /* --------------------------------------------------------------------------
    CLAMPS
  -------------------------------------------------------------------------- */
  if (scale.clamp) {
    Object.entries(scale.clamp)?.forEach(([key, value]) => {
      theme[key] = `clamp(${value.min}, ${value.mid}, ${value.max})`
    })
  }

  /* --------------------------------------------------------------------------
    SCALES
  -------------------------------------------------------------------------- */
  if (scale.scale) {
    Object.entries(scale.scale)?.forEach(([key, variant]) => {

    // 1) BASE THEME & STYLE
      const baseVal = variant.min + (variant.unit || '')
      theme[key] = baseVal
      switch (scale.type) {
        case 'spacing':
          if (variant.direction === 'x' || variant.direction === 'both') {
            style[`.mlr-${key}`] = { marginLeft: baseVal }
            style[`.mrr-${key}`] = { marginRight: baseVal }
            style[`.mxr-${key}`] = { marginLeft: baseVal, marginRight: baseVal }
          }
          if (variant.direction === 'y' || variant.direction === 'both') {
            // Paddings for vertical spacings to avoid conflicts with vtrim line-heights and other common margin utilities
            style[`.ptr-${key}`] = { paddingTop: baseVal }
            style[`.pbr-${key}`] = { paddingBottom: baseVal }
            style[`.pyr-${key}`] = { paddingTop: baseVal, paddingBottom: baseVal }
          }
          if (variant.direction === 'both')
            style[`.sr-${key}`] = { marginLeft: baseVal, marginRight: baseVal, paddingTop: baseVal, paddingBottom: baseVal }
          break
        case 'lineHeight':
          style[`.lh-${key}`] = { lineHeight: baseVal }
          style[`.lh-${key}-vtrim`] = { lineHeight: baseVal, marginTop: `-${variant.marginMult}em`, marginBottom: `-${variant.marginMult}em` }
          break
        default:
          style[`.${key}`] = { [scale.type]: baseVal }
          break
      }

    // 2) PER BREAKPOINT THEME & STYLE
    // Calculate the breakpoint increment
      const increment = (variant.max - variant.min) / Object.keys(BREAKPOINTS).length

      Object.entries(BREAKPOINTS).forEach(([bpName, bpWidth], index) => {
        const bpVal = (variant.min + (increment * (index + 1))).toFixed(2) + (variant.unit || '')
        theme[`${key}-${bpName}`] = bpVal

        switch (scale.type) {
          case 'spacing':
            if (variant.direction === 'x' || variant.direction === 'both') {
              style[`.mlr-${key}`][`@media (min-width: ${bpWidth})`] = { marginLeft: bpVal }
              style[`.mrr-${key}`][`@media (min-width: ${bpWidth})`] = { marginRight: bpVal }
              style[`.mxr-${key}`][`@media (min-width: ${bpWidth})`] = { marginLeft: bpVal, marginRight: bpVal }
            }
            if (variant.direction === 'y' || variant.direction === 'both') {
              style[`.ptr-${key}`][`@media (min-width: ${bpWidth})`] = { paddingTop: bpVal }
              style[`.pbr-${key}`][`@media (min-width: ${bpWidth})`] = { paddingBottom: bpVal }
              style[`.pyr-${key}`][`@media (min-width: ${bpWidth})`] = { paddingTop: bpVal, paddingBottom: bpVal }
            }
            if (variant.direction === 'both')
              style[`.sr-${key}`][`@media (min-width: ${bpWidth})`] = { marginLeft: bpVal, marginRight: bpVal, paddingTop: bpVal, paddingBottom: bpVal }
            break
          case 'lineHeight':
            style[`.lh-${key}`][`@media (min-width: ${bpWidth})`] = { lineHeight: bpVal }
            break
          default:
            style[`.${key}`][`@media (min-width: ${bpWidth})`] = { [scale.type]: bpVal }
            break
        }
      })
    })
  }

  return {
    theme,
    style,
  }
}
