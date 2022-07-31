import React from 'react'
import {motion} from 'framer-motion'

const fadeRight = {
    // From
    initial: { opacity: 0, x: 50 },
    // To
    animate: { opacity: 1, x: 0 },
    // Exit 
    exit: { opacity: 0, x: -50 },
}

function AnimatePage({children, thisKey}) {
  return (
    <motion.div
      key={thisKey}
      variants={fadeRight}
      initial="initial"
      animate="animate"
      exit ="exit"
      transition={{duration: .5}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePage;