import { DraftToken, createTokens } from 'styled-tokens'
import goldenRatio from './goldenRatio'

const draftSizes: DraftToken = {
  values: {
    ...goldenRatio({ range: 13, base: 0.5, unit: 'rem' }),
    25: '25%',
    50: '50%',
    75: '75%',
    full: '100%',
    fullView: '100vh'
  },
  propName: {
    width: 'w',
    height: 'h',
    maxWidth: 'maw',
    minWidth: 'miw',
    maxHeight: 'mah',
    minHeight: 'mih'
  }
}

type size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 25 | 50 | 75 | 'full' | 'fullView'

export type SizeSystem = {
  w?: size
  h?: size
  maw?: size
  miw?: size
  mah?: size
  mih?: size
}

export default createTokens(draftSizes)
