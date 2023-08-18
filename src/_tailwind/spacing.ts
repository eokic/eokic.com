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
      mid: '8vw',
      max: '4.2rem',
    },
    'safe-edge-l': {
      min: 'max(1.25rem, env(safe-area-inset-left))',
      mid: 'max(6vw, env(safe-area-inset-left))',
      max: 'max(4rem, env(safe-area-inset-left))',
    },
    'safe-edge-r': {
      min: 'max(1.25rem, env(safe-area-inset-right))',
      mid: 'max(6vw, env(safe-area-inset-right))',
      max: 'max(4rem, env(safe-area-inset-right))',
    },
    section: {
      min: '46px',
      mid: '6.75vh',
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
