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
      min: '30px',
      mid: 'calc(1vw + 3vh)',
      max: '60px',
    },
    inner: {
      min: '18px',
      mid: 'calc(.5vw + 1vh)',
      max: '30px',
    },
  },
}
