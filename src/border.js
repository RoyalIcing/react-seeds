import sow from 'react-sow'

module.exports = sow(({
	borderRadius,
	cornerRadius,
	border
}) => Object.assign({},
	borderRadius != null && { borderRadius },
	cornerRadius != null && { borderRadius: cornerRadius },
	border != null && (
		(typeof border === 'string') ? (
			{ border }
		) : (
			Object.assign({},
				border.width != null && { borderWidth: border.width },
				border.style != null && { borderStyle: border.style },
				border.color != null && { borderColor: border.color }
			)
		)
	)
))