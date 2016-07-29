import React from 'react';
import styler from './all';

const handlerKeyRegex = /^on[A-Z0-9]/

// Pick props matching with on- prefix
function pickHandlers(props) {
	return Object.keys(props).reduce((picked, key) => {
		if (handlerKeyRegex.test(key)) {
			picked[key] = props[key]
		}
		return picked
	}, {})
}

export default React.createClass({
	displayName: 'Seed',

	render() {
		const {
			Component = 'div',
			className,
			value, checked, selected,
			...props
		} = this.props

		// `children` gets handled automatically by styler
		return (
			<Component
				{ ...pickHandlers(props) }
				{ ...styler(props) }
				className={ className }
				value={ value }
				checked={ checked }
				selected={ selected }
			/>
		)
	}
})
