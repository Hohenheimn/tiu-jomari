import React, {useContext, useEffect} from 'react'
import Header from "./header";
import Projects from "./projects";
import Aboutt from "./about";
import { ProjectContext } from './ProjectProvider';
import { motion } from 'framer-motion';

export default function Homepage() {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    const {projectsArray} = useContext(ProjectContext)

    const firstFourProjects = projectsArray.slice(0, 4)

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

    return (
        <motion.div variants={ZoomOut} style={ChangeTransformOrigin} initial="from" animate="to" exit="exit">
            <motion.div variants={Moveleft} initial="from" animate="to" exit="exit">
                <Header></Header>
                <Projects className="detect" projectsArray={firstFourProjects}></Projects>
                <Aboutt></Aboutt>
            </motion.div>
        </motion.div>
    )
}
