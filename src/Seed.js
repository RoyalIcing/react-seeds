import React from 'react';
import styler from './all';

const handlerKeyRegex = /^on[A-Z0-9]/

// Pick props matching with on- prefix
function pickHandlers(props) {
	return Object.keys(props).reduce(((picked, key) => {
		if (handlerKeyRegex.test(key)) {
			picked[key] = props[key]
		}
		return picked
	}, {}))
}

export default function Seed({ Component = 'div', ...props }) {
	// `children` gets handled automatically by styler
	return (
		<Component { ...pickHandlers(props) } { ...styler(props) } />
	)
}
