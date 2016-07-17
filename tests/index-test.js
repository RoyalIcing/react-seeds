import expect from 'expect'
import { expectClean } from './clean'

import {
	boxSizing,
	visibility,
	flex,
	position,
	margin,
	padding,
	border,
	transition
} from 'src/index'

describe('Stylers', () => {
  it('boxSizing', () => {
    expectClean(boxSizing({}).style).toEqual({
			boxSizing: 'border-box'
		})
  })

	it('visibility', () => {
    expectClean(visibility({}).style).toEqual({})

		expectClean(visibility({
			visibility: 'hidden',
			opacity: 0.5
		}).style).toEqual({
			visibility: 'hidden',
			opacity: 0.5
		})
  })

	it('margin', () => {
    expectClean(margin({}).style).toEqual({})

		expectClean(margin({
			margin: 20
		}).style).toEqual({
			margin: 20
		})

		expectClean(margin({
			margin: { top: 10, bottom: 20, left: 30, right: 40 }
		}).style).toEqual({
			marginTop: 10,
			marginBottom: 20,
			marginLeft: 30,
			marginRight: 40
		})
  })

	it('padding', () => {
    expectClean(padding({}).style).toEqual({})

		expectClean(padding({
			padding: 20
		}).style).toEqual({
			padding: 20
		})

		expectClean(padding({
			padding: { top: 10, bottom: 20, left: 30, right: 40 }
		}).style).toEqual({
			paddingTop: 10,
			paddingBottom: 20,
			paddingLeft: 30,
			paddingRight: 40
		})
  })

	it('flex', () => {
    expectClean(flex({}).style).toEqual({})

		expectClean(flex({
			row: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap'
		})

		expectClean(flex({
			row: true,
			reverse: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'row-reverse',
			flexWrap: 'nowrap'
		})

		expectClean(flex({
			column: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'nowrap'
		})

		expectClean(flex({
			column: true,
			reverse: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'column-reverse',
			flexWrap: 'nowrap'
		})

		expectClean(flex({
			column: true,
			reverse: true,
			wrap: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'column-reverse',
			flexWrap: 'wrap'
		})
  })
})
