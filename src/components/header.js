import React from 'react'
import '../styles/header.css'
import { motion } from 'framer-motion'

export default function Header() {

    const StaggerContainer = {
        to : { 
            transition: {
                staggerChildren: 0.3,
                when: "afterChildren"
            }
        }
    }
    const moveleftTop = {
        from: { top: 0, left: 0},
        to: { top: '-50px', left: '-50px'},
        exit: { top: 0, left: 0, 
            transition:{ delay: 0, duration: .5, ease: 'easeInOut'}
        },
    }
    const Flip = {
        from: {rotateX: 90},
        to: {
            rotateX: 0,
            transition: {duration: .5, ease: 'easeInOut'}
        },
        exit: {
            rotateX: 90,
            transition: {delay: .5, duration: .5, ease: 'easeInOut'}
        }
    }
    const FadeTop = {
        from: { x: "-100px", opacity: 0},
        to: { 
            x: 0,
            opacity: 1,
            transition: {duration: .5, ease: 'easeInOut'}
        },
        exit: { x: "100px", opacity: 0},
    }
    const FadeIn = {
        from: { opacity: 0},
        to: { 
            opacity: 1,
            transition: {duration: 1, ease: 'easeInOut'}
        },
        exit: { opacity: 0}
    }


    return (
		<header id="home">

            <div className="text-container">
                <motion.div variants={StaggerContainer} initial="from" animate="to" exit="exit">
                    <AnimateThis variants={Flip}><p>Welcome to my Portfolio</p></AnimateThis>
                    <AnimateThis variants={Flip}><p>I'm Jomari Tiu a</p></AnimateThis>
                    <AnimateThis variants={FadeIn}><h1 className='animateType desktop'>{'<Front End Web-Developer/>'}</h1></AnimateThis>
                    <AnimateThis variants={FadeTop}><a className='dl-cv' href="/tiu-jomari/cv/Tiu-Jomari.docx">Download CV</a></AnimateThis>
                </motion.div>

                <motion.aside variants={Flip} initial="from" animate="to" exit="exit" transition={{duration: .5, ease: 'easeInOut'}} className='imge'>
                    <motion.div 
                    variants={moveleftTop}
                    initial="from" animate="to" exit="exit"  transition={{duration: .5, delay: .5, ease: 'easeInOut'}}
                    className='bg'></motion.div>
                    <img src="/tiu-jomari/images/me.png" alt="" />
                </motion.aside>

            </div>

        </header>
    )
}

const AnimateThis = ({variants, children}) =>{
    return (
        <motion.div style={{width: '100%'}} variants={variants}>{children}</motion.div>
    )
}