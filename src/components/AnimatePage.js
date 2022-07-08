import React from 'react'
import {motion} from 'framer-motion'

const animations = {
    // From
    initial: { opacity: 0, x: 100 },
    // To
    animate: { opacity: 1, x: 0 },
    // Exit 
    exit: { opacity: 0, x: -100 },
}

function AnimatePage({children, thisKey}) {
  return (
    <motion.div
        key={thisKey}
        variants={animations}
        initial="initial"
        animate="animate"
        exit ={{opacity: 0, x: -100}}
        transition={{duration: 5}}
    >
        {children}
    </motion.div>
  )
}

export default AnimatePage