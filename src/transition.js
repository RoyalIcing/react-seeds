import sow from 'react-sow'

const defaultTransitionAll = 'all 0.3s ease-in-out' 

const addPrefixes = (transition) => ({
	transition: transition,
	WebkitTransition: transition,
	msTransition: transition
})

export default sow(({
	transitionAll = false
}) => Object.assign({}, 
	transitionAll && addPrefixes(transitionAll)
))
