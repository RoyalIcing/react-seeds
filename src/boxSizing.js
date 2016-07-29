import sow from 'react-sow'

export default sow(({
	boxSizing = 'border-box',
	overflow,
	width,
	height,
	minWidth,
	minHeight,
	maxWidth,
	maxHeight
}) => ({
	boxSizing,
	overflow,
	width,
	height,
	minWidth,
	minHeight,
	maxWidth,
	maxHeight
}))
