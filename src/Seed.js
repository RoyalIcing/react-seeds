import React from 'react';
import seeds from './all';

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

const defaultStyler = () => ({})

export default React.createClass({
	displayName: 'Seed',

	render() {
		const {
			Component = 'div',
			className,
			styler = defaultStyler,
			value, checked, selected,
			...props
		} = this.props

		// `children` gets handled automatically by styler
		return (
			<Component
				{ ...pickHandlers(props) }
				{ ...seeds(props) }
				{ ...styler(props) }
				className={ className }
				value={ value }
				checked={ checked }
				selected={ selected }
			/>
		)
	}
})
