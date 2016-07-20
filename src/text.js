import sow from 'react-sow'

export default sow(({
	text
}) => (
	!!text ? (
		Object.assign(
			{},
			text.color != null && { color: text.color },
			text.align != null && { textAlign: text.align },
			text.indent != null && { textIndent: text.indent },
			text.overflow != null && { textOverflow: text.overflow },
			text.transform != null && { textTransform: text.transform },
			text.decoration != null && { textDecoration: text.decoration },
			text.shadow != null && { textShadow: text.shadow },
			text.rendering != null && { textRendering: text.rendering }
		)
	) : {}
))
