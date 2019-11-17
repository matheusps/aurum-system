import goldenRatio from './goldenRatio'

export const Size = {
  values: {
    ...goldenRatio({ range: 8, base: 0.5, unit: 'rem' }),
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

export const FontSize = {
  values: goldenRatio(),
  propName: {
    fontSize: 'fs'
  }
}
