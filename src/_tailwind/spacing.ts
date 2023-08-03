import type { ScaleInput } from '../utils/tw-scale'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/tw-scale'

export const spacingX: ScaleInput = {
  type: 'spacingX',
  scale: {
    edge: {
      min: 25,
      max: 40,
      unit: 'px',
    },
  },
}

export const spacingY: ScaleInput = {
  type: 'spacingY',
  scale: {
    section: {
      min: 25,
      max: 50,
      unit: 'px',
    },
  },
}
