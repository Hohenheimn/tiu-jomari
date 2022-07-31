import React from 'react'
import { motion } from 'framer-motion'

const ZoomOut = {
	from : {scale: .5},
	to: {
		scale: 1, 
		transition: {
			duration: 1,
			ease: 'easeInOut',
			delay: 1
		}
	},
	exit: {
		scale: .5,
		transition: {
			duration: 2,
			ease: 'easeInOut'
		}
	}
}
const Moveleft = {
	from: {
		x: "100vw"
	},
	to: {
		x: "0", 
		transition: {
			duration: 1,
			ease: "easeInOut"
		}
	},
	exit: {
		x: "-100vw",
		transition: {
			duration: 1,
			ease: "easeInOut",
			delay: 2
		}
	}
}
const ChangeTransformOrigin = {
	transformOrigin: "top"
}

export default function AnimatePage({children}) {
  return (
	<motion.div variants={ZoomOut} style={ChangeTransformOrigin} initial="from" animate="to" exit="exit">
		<motion.div variants={Moveleft} initial="from" animate="to" exit="exit">
			{children}
		</motion.div>
    </motion.div>
  )
}
