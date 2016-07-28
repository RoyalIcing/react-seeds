import sow from 'react-sow'

export default sow(({
	// Flex container
	row = false,
	column = false,
	reverse = false,
	wrap = false,
	alignItems,
	alignContent,
	justifyContent,
	// Flex items
	basis,
	grow,
	shrink,
	alignSelf
}) => Object.assign({},
	(row || column) && {
		display: 'flex',
		flexDirection: column ? (reverse ? 'column-reverse' : 'column') : (reverse ? 'row-reverse' : 'row'),
		flexWrap: (typeof wrap === 'string') ? wrap : (wrap ? 'wrap' : 'nowrap')
	},
	alignItems != null && { alignItems },
	alignContent != null && { alignContent },
	justifyContent != null && { justifyContent },
	basis != null && { flexBasis: basis },
	grow != null && { flexGrow: grow },
	shrink != null && { flexShrink: shrink },
	alignSelf != null && { alignSelf }
))
