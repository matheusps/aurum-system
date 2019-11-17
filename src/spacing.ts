import { DraftToken, createTokens } from 'styled-tokens'
import goldenRatio from './goldenRatio'

const draftSpacing: DraftToken = {
  values: goldenRatio(),
  propName: {
    margin: 'ma',
    marginTop: 'mt',
    marginRight: 'mr',
    marginBottom: 'mb',
    marginLeft: 'ml',
    padding: 'pa',
    paddingTop: 'pt',
    paddingRight: 'pr',
    paddingBottom: 'pb',
    paddingLeft: 'pl'
  }
}

export default createTokens(draftSpacing)
