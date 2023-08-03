import type { ResponsiveSizing } from '../utils/responsivity'
import {
  BASE_FONT_PX,
  BASE_FONT_REM,
} from '../utils/responsivity'

export const spacing: Record<string, ResponsiveSizing> = {
  edge: {
    min: 25,
    max: 40,
    unit: 'px',
  },
  section: {
    min: 25,
    max: 50,
    unit: 'px',
  },
}
