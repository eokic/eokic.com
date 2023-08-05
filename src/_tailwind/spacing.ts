import type { ScaleInput } from '../utils/tw-scale'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/tw-scale'

export const spacing: ScaleInput = {
  type: 'spacing',
  clamp: {
    edge: {
      min: '1.25rem',
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
      mid: 'calc(1.5vw + 3.8vh)',
      max: '65px',
    },
    inner: {
      min: '26px',
      mid: 'calc(1vw + 1.5vh)',
      max: '46px',
    },
  },
}
