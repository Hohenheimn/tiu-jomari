import React from 'react'
import {motion} from 'framer-motion'

const fadeleft = {
    // From
    initial: { opacity: 0, x: 50 },
    // To
    animate: { opacity: 1, x: 0 },
    // Exit 
    exit: { opacity: 0, x: -50 },
}
export function FadeLeft({children}) {
	return (
		<motion.div
			variants={fadeleft}
			initial="initial"
			animate="animate"
			exit ="exit"
			transition={{duration: .5}}
		>
			{children}
		</motion.div>
	)
}

const topLeft = {
	initial: {
		marginTop: 0,
		marginLeft: 0
	},
	animate: {
		marginTop: '50px',
		marginLeft: '50px'
	},
	exit: {
		marginTop: '100px',
		marginLeft: '100px',
		opacity: 0
	}
}
export const MoveTopleft = (children) => {
	return(
		<motion.div variants={topLeft} initial="initial" animate="animate" exit="exit">
			{children}
		</motion.div>
	)
}