import { createTokens, DraftToken } from 'styled-tokens'
import goldenRatio from './goldenRatio'

const draftFs: DraftToken = {
  values: goldenRatio(),
  propName: {
    fontSize: 'fs'
  }
}

export default createTokens(draftFs)
