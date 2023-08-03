import type { ResponsiveSizing } from '../utils/responsivity'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/responsivity'

export const lineHeight: Record<string, ResponsiveSizing> = {
  body: {
    min: 1.12,
    max: 1.15,
  },
  prose: {
    min: 1.5,
    max: 1.6,
  },
  h1: {
    min: 1.25,
    max: 1.18,
  },
}
