import goldenRatio from '../src/goldenRatio'

describe('Golden Ratio Fn', () => {
  it('should have the correct range', () => {
    const result = goldenRatio({
      range: 8,
      base: 0.125,
      unit: 'rem'
    })
    const keys = Object.keys(result)
    expect(keys.length).toEqual(9)
  })

  it('should work with different bases', () => {
    const result = goldenRatio({ range: 3, base: 0.5, unit: 'rem' })
    expect(result).toEqual({
      0: '0rem',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem'
    })
  })
})
