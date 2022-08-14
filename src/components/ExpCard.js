import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ExpCard({description, img, title}) {

    const [isValidate, setValidate] = useState(false)

    const staggerContainer = {
        to: {
            transition: {
                staggerChildren: .5
            }
        }
    }

    const fadeY = {
        from: {
            y: -100, opacity: 0
        },
        to: {
            y: 0, opacity: 1 ,
            transition: {
                duration: .5, ease: "easeInOut"
            }
        },
        exit: {
            y: 100, opacity: 0,
            transition: {
                duration: .5, ease: "easeInOut"
            }
        }
    }

    return (
        <li onClick={() => (setValidate(!isValidate))}>
            <img src={img} alt="" />
            <AnimatePresence>
                {isValidate && (
                    <motion.div variants={staggerContainer} initial="from" animate="to" exit="exit">
                        <motion.h4 variants={fadeY}>{title}</motion.h4>
                        <motion.p variants={fadeY}>{description}</motion.p> 
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}
