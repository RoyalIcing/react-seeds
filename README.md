# react-seeds

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

```
npm i react-seeds --save
```

## Usage

You can use *react-seeds* in two ways:
- `import styler from 'react-seeds'` · You can call this props helper, which you `...` splat into your HTML-based component when rendering. 
- `import { Seed } from 'react-seeds'` · Or you can use the `<Seed>` component and pass each style attribute as a prop.
By default it renders a `<div>`, but you can change this using the `Component` prop.  

There are examples of both below:

### Reusable stylers

```javascript
import React from 'react'
import styler from 'react-seeds'

const baseStyler = ({ dark }) => styler({
  row: true,
  padding: '1em',
  relative: {
    top: '1em',
    left: '1em'
  },
  text: {
    color: dark ? '#eee' : '#111'
  },
  background: {
    color: dark ? '#222' : '#eee'
  }
})

export function Card({ children, dark = false }) {
  return (
    <div { ...baseStyler({ dark }) }>
      { children }
    </div>
  )
}
```

### React component styling with props

```javascript
import React from 'react'
import { Seed } from 'react-seeds'

export function TwoColumn({ content1, content2 }) {
  return (
    <Seed row Component='section'>
      <Seed minWidth={ 200 } grow={ 1 }>
        { content1 }
      </Seed>
      <Seed minWidth={ 400 } grow={ 1 }>
        { content2 }
      </Seed>
    </Seed>
  )
}
```

## Styler attributes

Styler attributes mostly match CSS’s attribute names, but have some opinionated changes for a nicer experience. 
This includes nicer flexbox support by removing flex- prefixes,
`border-box` box sizing by default,
and use of objects for attributes such as margin, padding, absolute & relative positioning, text, background, and border.

### boxSizing

- **boxSizing** : *string* = 'border-box'
- **overflow** : *string*
- **width** : *number*
- **height** : *number*
- **minWidth** : *number*
- **minHeight** : *number*
- **maxWidth** : *number*
- **maxHeight** : *number*

### visibility

- **visibility** : *string*
- **opacity** : *number*

### flex

- **row** : *boolean* = false
- **column** : *boolean* = false
- **wrap** : *boolean* = false
- **reverse** : *boolean* = false
- **alignItems** : *string*
- **alignContent** : *string*
- **justifyContent** : *string*
- **basis** : *string*
- **grow** : *number*
- **shrink** : *number*
- **alignSelf** : *string*

### position

- **absolute** : *object*
  - **top** : *number?*
  - **bottom** : *number?*
  - **left** : *number?*
  - **right** : *number?*
- **relative** : *object*
  - **top** : *number?*
  - **bottom** : *number?*
  - **left** : *number?*
  - **right** : *number?*
- **zIndex** : *number*

### margin

- **margin** : *number | string | object:*
  - **top** : *number?*
  - **bottom** : *number?*
  - **left** : *number?*
  - **right** : *number?*

### padding

- **padding** : *number | string | object:*
  - **top** : *number?*
  - **bottom** : *number?*
  - **left** : *number?*
  - **right** : *number?*

### text

- **text** : *object:*
  - **color** : *string?*
  - **align** : *string?*
  - **indent** : *string?*
  - **overflow** : *string?*
  - **transform** : *string?*
  - **decoration** : *string?*
  - **shadow** : *string?*
  - **rendering** : *string?*

### font

- **font** : *object:*
  - **family** : *string?*
  - **size** : *number? | string?*
  - **weight** : *number? | string?*
  - **style** : *string?*
  - **stretch** : *string?*
  - **variant** : *string?*
  - **kerning** : *string?*

### background

- **background** : *string | object:*
  - **color** : *string?*
  - **image** : *string?*
  - **position** : *string?*
  - **size** : *string?*
  - **origin** : *string?*
  - **clip** : *string?*
  - **repeat** : *boolean? | string?*
  - **attachment** : *string?*

### border

- **borderRadius / cornerRadius** : *number*
- **border** : *string | object:*
  - **width** : *number?*
  - **style** : *string?*
  - **color** : *color?*


[build-badge]: https://img.shields.io/travis/BurntCaramel/react-seeds/master.svg?style=flat-square
[build]: https://travis-ci.org/BurntCaramel/react-seeds

[npm-badge]: https://img.shields.io/npm/v/react-seeds.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-seeds

[coveralls-badge]: https://img.shields.io/coveralls/BurntCaramel/react-seeds/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/BurntCaramel/react-seeds
