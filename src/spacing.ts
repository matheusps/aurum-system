import { DraftToken, createTokens } from 'styled-tokens'
import goldenRatio from './goldenRatio'

const draftSpacing: DraftToken = {
  values: goldenRatio({
    range: 13,
    base: 0.125,
    unit: 'rem'
  }),
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
