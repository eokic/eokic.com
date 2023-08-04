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
      min: '1.75rem',
      mid: '4vh',
      max: '5rem',
    },
  },
}
