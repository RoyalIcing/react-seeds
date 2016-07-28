import sow from 'react-sow'

export default sow(({
	font
}) => (
	!!font ? (
		Object.assign(
			{},
			font.family != null && { fontFamily: font.family },
			font.size != null && { fontSize: font.size },
			font.weight != null && { fontWeight: font.weight },
			font.style != null && { fontStyle: font.style },
			font.stretch != null && { fontStretch: font.stretch },
			font.variant != null && { fontVariant: font.variant },
			font.kerning != null && { fontKerning: font.kerning }
		)
	) : {}
))
