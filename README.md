## Aurum System

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Tokens that use the Golden ratio to grant consistent ui

### Installing from npm

`yarn add aurum-system` or `npm install aurum-system`

### Usage

The aurum-system needs some css-in-js library to work. The recomended ones are `styled-components` and `emotion`.

```jsx
import styled from 'styled-components'
import { spacingSystem, fontSystem, sizeSystem } from 'aurum-system'

const Box = styled.div`
  ${spacingSystem}
  ${sizeSystem}
`

const Text = styled.p`
  ${fontSystem}
`

function useCase({ content }) {
  return (
    <Box pa={8}>
      <p fs={5}>{content}</p>
    </Box>
  )
}
```

#### With typescript

In order to have type intelisense you need to import the typings.

```tsx
import styled from 'styled-components'
import { spacingSystem, SpacingSystem } from 'aurum-system'
import { fontSystem, FontSystem } from 'aurum-system'
import { sizeSystem, SizeSystem } from 'aurum-system'

type BoxProps = SpacingSystem & SizeSystem

const Box = styled.div<BoxProps>`
  ${spacingSystem}
  ${sizeSystem}
`

const Text = styled.p<FontSystem>`
  ${fontSystem}
`

function useCase({ content }) {
  return (
    <Box pa={8}>
      <p fs={5}>{content}</p>
    </Box>
  )
}
```

### Available Systems

#### Font

| propName | represents | valueList | base    |
| -------- | ---------- | --------- | ------- |
| `fs`     | `fontSize` | `1 ... 8` | `0.125` |

#### Spacing

| propName | represents      | valueList  | base    |
| -------- | --------------- | ---------- | ------- |
| `pa`     | `padding`       | `0 ... 13` | `0.125` |
| `pt`     | `paddingTop`    | `0 ... 13` | `0.125` |
| `pr`     | `paddingRight`  | `0 ... 13` | `0.125` |
| `pb`     | `paddingBottom` | `0 ... 13` | `0.125` |
| `pl`     | `paddingLeft`   | `0 ... 13` | `0.125` |
| `ma`     | `margin`        | `0 ... 13` | `0.125` |
| `mr`     | `marginRight`   | `0 ... 13` | `0.125` |
| `mb`     | `marginBottom`  | `0 ... 13` | `0.125` |
| `ml`     | `marginLeft`    | `0 ... 13` | `0.125` |

#### Size

| propName | represents  | valueList                                   |
| -------- | ----------- | ------------------------------------------- |
| `w`      | `width`     | `0 ... 13, 25, 50, 75, 100, full, fullView` |
| `h`      | `height`    | `0 ... 13, 25, 50, 75, 100, full, fullView` |
| `maw`    | `maxWidth`  | `0 ... 13, 25, 50, 75, 100, full, fullView` |
| `mah`    | `maxHeight` | `0 ... 13, 25, 50, 75, 100, full, fullView` |
| `miw`    | `maxWidth`  | `0 ... 13, 25, 50, 75, 100, full, fullView` |
| `mih`    | `minWidth`  | `0 ... 13, 25, 50, 75, 100, full, fullView` |

### Scripts cheatset

- `yarn start`: Run `yarn build` in watch mode
- `yarn test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `yarn test:prod`: Run linting
- `yarn build`: Generate bundles and typings, create docs
- `yarn lint`: Lints code
- `yarn release`: Publishes the package
