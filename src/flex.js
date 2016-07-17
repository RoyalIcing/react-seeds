import sow from 'react-sow'

export default sow(({
	row = false,
	column = false,
	reverse = false,
	wrap = false,
	alignItems,
	basis,
	grow,
	shrink
}) => Object.assign({},
	(row || column) && {
		display: 'flex',
		flexDirection: column ? (reverse ? 'column-reverse' : 'column') : (reverse ? 'row-reverse' : 'row'),
		flexWrap: wrap ? 'wrap' : 'nowrap'
	},
	alignItems && { alignItems },
	basis != null && { flexBasis: basis },
	grow != null && { flexGrow: grow },
	shrink != null && { flexShrink: shrink }
))
