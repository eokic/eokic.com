import type { ResponsiveSizing } from '../utils/responsivity'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/responsivity'

export const fontSize: Record<string, ResponsiveSizing> = {
  h1: {
    min: 30,
    max: 46,
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
  'body-1': {
    min: BASE_FONT_PX * 0.88,
    max: BASE_FONT_PX * 0.95,
    unit: 'px',
  },
  body: {
    min: 18,
    max: 19,
    unit: 'px',
  },
  'body+1': {
    min: BASE_FONT_PX * 1.05,
    max: BASE_FONT_PX * 1.12,
    unit: 'px',
  },
  lead: {
    min: BASE_FONT_PX * 1.15,
    max: BASE_FONT_PX * 1.25,
    unit: 'px',
  },
}
