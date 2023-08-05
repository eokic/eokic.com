import type { ScaleInput } from '../utils/tw-scale'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/tw-scale'

export const spacing: ScaleInput = {
  type: 'spacing',
  clamp: {
    edge: {
      min: '1rem',
      mid: '6vw',
      max: '4rem',
    },
    section: {
      min: '40px',
      mid: '6.25vh',
      max: '80px',
    },
    outer: {
      min: '32px',
      mid: 'calc(1vw + 2.8vh)',
      max: '54px',
    },
    inner: {
      min: '25px',
      mid: 'calc(.75vw + 1.35vh)',
      max: '46px',
    },
  },
}
