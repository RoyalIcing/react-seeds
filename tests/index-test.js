import expect from 'expect'
import { expectClean } from './clean'

import {
	boxSizing,
	visibility,
	flex,
	position,
	margin,
	padding,
	text,
	font,
	background,
	border,
	transition
} from 'src/index'

describe('Stylers', () => {
  it('boxSizing', () => {
    expectClean(boxSizing({}).style).toEqual({
			boxSizing: 'border-box'
		})

		expectClean(boxSizing({
			boxSizing: 'content-box'
		}).style).toEqual({
			boxSizing: 'content-box'
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
			marginTop: 20,
			marginLeft: 20,
			marginRight: 20,
			marginBottom: 20
		})

		expectClean(margin({
			margin: '5em'
		}).style).toEqual({
			marginTop: '5em',
			marginLeft: '5em',
			marginRight: '5em',
			marginBottom: '5em'
		})

		expectClean(margin({
			margin: { top: 10, bottom: '20%', left: '30em', right: '40rem' }
		}).style).toEqual({
			marginTop: 10,
			marginBottom: '20%',
			marginLeft: '30em',
			marginRight: '40rem'
		})
  })

	it('padding', () => {
    expectClean(padding({}).style).toEqual({})

		expectClean(padding({
			padding: 20
		}).style).toEqual({
			paddingTop: 20,
			paddingLeft: 20,
			paddingRight: 20,
			paddingBottom: 20
		})

		expectClean(padding({
			padding: '5em'
		}).style).toEqual({
			paddingTop: '5em',
			paddingLeft: '5em',
			paddingRight: '5em',
			paddingBottom: '5em'
		})

		expectClean(padding({
			padding: { top: 10, bottom: '20%', left: '30em', right: '40rem' }
		}).style).toEqual({
			paddingTop: 10,
			paddingBottom: '20%',
			paddingLeft: '30em',
			paddingRight: '40rem'
		})
  })

	it('flex container', () => {
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

		expectClean(flex({
			row: true,
			wrap: true
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap'
		})

		expectClean(flex({
			row: true,
			wrap: false
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap'
		})

		expectClean(flex({
			row: true,
			wrap: 'wrap-reverse'
		}).style).toEqual({
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap-reverse'
		})
  })

	it('flex item', () => {
    expectClean(flex({}).style).toEqual({})

		expectClean(flex({
			alignItems: 'center',
			basis: '50%',
			grow: 2,
			shrink: 3
		}).style).toEqual({
			alignItems: 'center',
			flexBasis: '50%',
			flexGrow: 2,
			flexShrink: 3
		})
  })

	it('position', () => {
    expectClean(position({}).style).toEqual({})

		expectClean(position({
			absolute: true
		}).style).toEqual({
			position: 'absolute'
		})

		expectClean(position({
			absolute: { top: 10, bottom: 20, left: 30, right: 40 }
		}).style).toEqual({
			position: 'absolute',
			top: 10,
			bottom: 20,
			left: 30,
			right: 40
		})

		expectClean(position({
			relative: true
		}).style).toEqual({
			position: 'relative'
		})

		expectClean(position({
			relative: { top: 10, bottom: 20, left: 30, right: 40 }
		}).style).toEqual({
			position: 'relative',
			top: 10,
			bottom: 20,
			left: 30,
			right: 40
		})
  })

	it('text', () => {
    expectClean(text({}).style).toEqual({})

		expectClean(text({
			text: {
				color: 'red',
				align: 'right',
				indent: '1em',
				overflow: 'ellipsis',
				transform: 'uppercase',
				decoration: 'underline',
				shadow: '1px 1px 2px black',
				rendering: 'optimizeLegibility'
			}
		}).style).toEqual({
			color: 'red',
			textAlign: 'right',
			textIndent: '1em',
			textOverflow: 'ellipsis',
			textTransform: 'uppercase',
			textDecoration: 'underline',
			textShadow: '1px 1px 2px black',
			textRendering: 'optimizeLegibility'
		})
  })

	it('font', () => {
    expectClean(font({}).style).toEqual({})

		expectClean(font({
			font: {
				family: 'sans-serif, serif',
				size: 10,
				weight: 600,
				style: 'italic',
				stretch: 'condensed',
				variant: 'small-caps',
				kerning: 'normal'
			}
		}).style).toEqual({
			fontFamily: 'sans-serif, serif',
			fontSize: 10,
			fontWeight: 600,
			fontStyle: 'italic',
			fontStretch: 'condensed',
			fontVariant: 'small-caps',
			fontKerning: 'normal'
		})
  })

	it('background', () => {
    expectClean(background({}).style).toEqual({})

		expectClean(background({
			background: {
				color: 'yellow',
				image: 'url("hello.png")',
				position: 'left bottom',
				size: '50% auto',
				origin: 'border-box',
				clip: 'text',
				repeat: 'repeat-x',
				attachment: 'fixed'
			}
		}).style).toEqual({
			backgroundColor: 'yellow',
			backgroundImage: 'url("hello.png")',
			backgroundPosition: 'left bottom',
			backgroundSize: '50% auto',
			backgroundOrigin: 'border-box',
			backgroundClip: 'text',
			backgroundRepeat: 'repeat-x',
			backgroundAttachment: 'fixed'
		})

		expectClean(background({
			background: {
				repeat: true
			}
		}).style).toEqual({
			backgroundRepeat: 'repeat'
		})

		expectClean(background({
			background: {
				repeat: false
			}
		}).style).toEqual({
			backgroundRepeat: 'no-repeat'
		})
  })

	it('border', () => {
    expectClean(border({}).style).toEqual({})

		expectClean(border({
			borderRadius: 5.0
		}).style).toEqual({
			borderRadius: 5.0
		})

		expectClean(border({
			cornerRadius: 20.0
		}).style).toEqual({
			borderRadius: 20.0
		})

		expectClean(border({
			border: { width: 4, style: 'solid', color: 'white' }
		}).style).toEqual({
			borderWidth: 4,
			borderStyle: 'solid',
			borderColor: 'white'
		})
  })
})
