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

type spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13

export type SpacingSystem = {
  ma?: spacing
  mt?: spacing
  mr?: spacing
  mb?: spacing
  ml?: spacing
  pa?: spacing
  pt?: spacing
  pr?: spacing
  pb?: spacing
  pl?: spacing
}

export default createTokens(draftSpacing)
