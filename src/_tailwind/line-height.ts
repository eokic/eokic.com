import type { ScaleInput } from '../utils/tw-scale'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/tw-scale'

export const lineHeight: ScaleInput = {
  type: 'lineHeight',
  scale: {
    body: {
      min: 1.12,
      max: 1.15,
      marginMult: 0.2,
    },
    prose: {
      min: 1.5,
      max: 1.6,
      marginMult: 0.2,
    },
    h1: {
      min: 1.15,
      max: 1.1,
      marginMult: 0.2,
    },
    h2: {
      min: 1.2,
      max: 1.15,
      marginMult: 0.2,
    },
    h3: {
      min: 1.25,
      max: 1.2,
      marginMult: 0.2,
    },
    h4: {
      min: 1.3,
      max: 1.25,
      marginMult: 0.2,
    },
  },

}
