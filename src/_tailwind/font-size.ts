import type { ScaleInput } from '@/utils/tw-scale'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/tw-scale'

export const fontSize: ScaleInput = {
  type: 'fontSize',
  scale: {
    h1: {
      min: 26,
      max: 48,
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
    '-body-2': {
      min: BASE_FONT_PX * 0.75,
      max: BASE_FONT_PX * 0.85,
      unit: 'px',
    },
    '-body-1': {
      min: BASE_FONT_PX * 0.88,
      max: BASE_FONT_PX * 0.95,
      unit: 'px',
    },
    body: {
      min: 18,
      max: 19,
      unit: 'px',
    },
    'body-1': {
      min: BASE_FONT_PX,
      max: BASE_FONT_PX * 1.12,
      unit: 'px',
    },
    lead: {
      min: BASE_FONT_PX * 1.1,
      max: BASE_FONT_PX * 1.25,
      unit: 'px',
    },
  },
}
