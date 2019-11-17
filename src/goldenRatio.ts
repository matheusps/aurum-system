function* goldenGenerator(base: number, limit: number) {
  let [prev, curr] = [0, base]
  do {
    ;[prev, curr] = [curr, prev + curr]
    limit = limit - 1
    yield curr
  } while (limit > 0)
}

export default function goldenRatio(config = defaultConfig): GoldenValue {
  const { range, base, unit } = config

  let goldenArr = [0]

  for (let n of goldenGenerator(base, range)) {
    goldenArr.push(n)
  }

  const reducer = (acc: GoldenValue, value: number, index: number) => ({
    ...acc,
    [index]: `${value}${unit}`
  })

  const goldenValue = goldenArr.reduce(reducer, {})

  return goldenValue
}

export const defaultConfig: RatioConfig = {
  range: 8,
  base: 0.125,
  unit: 'rem'
}

type RatioConfig = {
  /** number of pairs */
  range: number
  /** starting point after zero */
  base: number
  /** desiredUnit */
  unit: 'rem' | 'em' | 'px'
}

type GoldenValue = {
  [key: string]: string
}
