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

export default createTokens(draftSizes)
