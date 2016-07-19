import React from 'react';
import styler from './all';

export default function Seed({ Component = 'div', ...otherProps }) {
	// `children` gets handled automatically by styler
	return (
		<Component { ...styler(otherProps) } />
	)
}
