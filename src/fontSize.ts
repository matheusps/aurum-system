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

export type FontSystem = {
  fs?: keyof typeof draftFs.values
}

export default createTokens(draftFs)
