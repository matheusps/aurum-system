import { createTokens, DraftToken } from 'styled-tokens'
import goldenRatio from './goldenRatio'

const draftFs: DraftToken = {
  values: goldenRatio({
    range: 8,
    base: 0.125,
    unit: 'rem'
  }),
  propName: {
    fontSize: 'fs'
  }
}

export default createTokens(draftFs)
