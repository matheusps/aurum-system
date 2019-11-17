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

type fs = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type FontSystem = {
  fs?: fs
}

export default createTokens(draftFs)
