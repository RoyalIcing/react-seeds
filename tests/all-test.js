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
			absolute: { top: 10, bottom: 20, left: 30, right: 40 },
			cornerRadius: 20.0,
			text: {
				color: 'red',
				align: 'right',
				indent: '1em',
				overflow: 'ellipsis',
				transform: 'uppercase',
				decoration: 'underline',
				shadow: '1px 1px 2px black',
				rendering: 'optimizeLegibility'
			},
			font: {
				family: 'sans-serif, serif',
				size: 10,
				weight: 600,
				style: 'italic',
				stretch: 'condensed',
				variant: 'small-caps',
				kerning: 'normal'
			},
			background: {
				color: 'yellow',
				image: 'url("hello.png")',
				position: 'left bottom',
				size: '50% auto',
				origin: 'border-box',
				clip: 'text',
				repeat: 'repeat-x',
				attachment: 'fixed'
			},
			border: { width: 4, style: 'solid', color: 'white' }
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
			right: 40,

			color: 'red',
			textAlign: 'right',
			textIndent: '1em',
			textOverflow: 'ellipsis',
			textTransform: 'uppercase',
			textDecoration: 'underline',
			textShadow: '1px 1px 2px black',
			textRendering: 'optimizeLegibility',

			fontFamily: 'sans-serif, serif',
			fontSize: 10,
			fontWeight: 600,
			fontStyle: 'italic',
			fontStretch: 'condensed',
			fontVariant: 'small-caps',
			fontKerning: 'normal',

			backgroundColor: 'yellow',
			backgroundImage: 'url("hello.png")',
			backgroundPosition: 'left bottom',
			backgroundSize: '50% auto',
			backgroundOrigin: 'border-box',
			backgroundClip: 'text',
			backgroundRepeat: 'repeat-x',
			backgroundAttachment: 'fixed',

			borderRadius: 20.0,
			borderWidth: 4,
			borderStyle: 'solid',
			borderColor: 'white'
		})
  })
})
