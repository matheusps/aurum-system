export type DraftToken = {
  values: { [key: string]: any }
  propName: { [key: string]: string }
}

export const Spacing: DraftToken = {
  values: {
    0: '0rem',
    1: '0.125rem',
    2: '0.250rem',
    3: '0.375rem',
    4: '0.625rem',
    5: '1.25rem',
    6: '2.50rem',
    7: '3.75rem',
    8: '6.25rem'
  },
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

export const Size: DraftToken = {
  values: {
    0: '0rem',
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2.5rem',
    5: '4rem',
    6: '6.5rem',
    7: '10.5rem',
    8: '16.5rem',
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

export const FontSize: DraftToken = {
  values: {
    1: '0.125rem',
    2: '0.250rem',
    3: '0.375rem',
    4: '0.625rem',
    5: '1.25rem',
    6: '2.50rem',
    7: '3.75rem',
    8: '6.25rem'
  },
  propName: {
    fontSize: 'fs'
  }
}
