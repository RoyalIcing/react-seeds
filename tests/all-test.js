import expect from 'expect'
import { expectClean } from './clean'

import styler from 'src/all'

describe('All styler', () => {
  it('all styler', () => {
    expectClean(styler({}).style).toEqual({
			boxSizing: 'border-box'
		})

		expectClean(styler({
			boxSizing: 'content-box',
			width: 500,
			height: 200,
			minWidth: 1000,
			minHeight: 800,
			visibility: 'hidden',
			opacity: 0.5,
			margin: { top: 10, bottom: 20, left: 30, right: 40 },
			padding: { top: 10, bottom: 20, left: 30, right: 40 },
			row: true,
			reverse: true,
			wrap: true,
			alignItems: 'center',
			basis: '50%',
			grow: 2,
			shrink: 3,
			absolute: { top: 10, bottom: 20, left: 30, right: 40 }
		}).style).toEqual({
			boxSizing: 'content-box',
			width: 500,
			height: 200,
			minWidth: 1000,
			minHeight: 800,
			visibility: 'hidden',
			opacity: 0.5,
			marginTop: 10,
			marginBottom: 20,
			marginLeft: 30,
			marginRight: 40,
			paddingTop: 10,
			paddingBottom: 20,
			paddingLeft: 30,
			paddingRight: 40,
			display: 'flex',
			flexDirection: 'row-reverse',
			flexWrap: 'wrap',
			alignItems: 'center',
			flexBasis: '50%',
			flexGrow: 2,
			flexShrink: 3,
			position: 'absolute',
			top: 10,
			bottom: 20,
			left: 30,
			right: 40
		})
  })
})
