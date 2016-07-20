import sow from 'react-sow'

import boxSizing from './boxSizing'
import visibility from './visibility'
import flex from './flex'
import position from './position'
import margin from './margin'
import padding from './padding'
import text from './text'
import background from './background'
import border from './border'
import transition from './transition'

export default sow.combine([
	boxSizing,
	visibility,
	flex,
	position,
	margin,
	padding,
	text,
	background,
	border,
	transition
])
