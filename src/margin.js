import sow from 'react-sow'

export default sow(({
	margin
}) => (
	(margin == null) ? (
		{}
	) :
	(typeof margin === 'number' || typeof margin === 'string') ? (
		{ marginTop: margin, marginLeft: margin, marginRight: margin, marginBottom: margin }
	) : (
		Object.assign({}, 
			margin.top != null && { marginTop: margin.top },
			margin.left != null && { marginLeft: margin.left },
			margin.right != null && { marginRight: margin.right },
			margin.bottom != null && { marginBottom: margin.bottom }
		)
	)
))
