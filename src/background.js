import sow from 'react-sow'

export default sow(({
	background
}) => (
	!!background ? (
		(typeof background === 'string') ? (
			{ background }
		) : (
			Object.assign(
				{},
				background.color != null && { backgroundColor: background.color },
				background.image != null && { backgroundImage: background.image },
				background.position != null && { backgroundPosition: background.position },
				background.size != null && { backgroundSize: background.size },
				background.origin != null && { backgroundOrigin: background.origin },
				background.clip != null && { backgroundClip: background.clip },
				background.repeat != null && {
					backgroundRepeat: (
						(background.repeat === false) ? (
							'no-repeat'
						) : (background.repeat === true) ? (
							'repeat'
						) : (
							background.repeat
						)
					)
				},
				background.attachment != null && { backgroundAttachment: background.attachment }
			)
		)
	) : {}
))
