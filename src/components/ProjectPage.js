import React, {useEffect, useContext} from 'react'
import '../styles/ProjectPage.css'
import Card from './card'
import { ProjectContext } from './ProjectProvider'
import { motion } from 'framer-motion'

export default function ProjectPage() {

	const {projectsArray} = useContext(ProjectContext);

    useEffect(() => {

      	window.scrollTo({ top: 0 })

    }, [])

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

				<div className='projects-container max'>

					<h5>Featured</h5>

					<h1>Projects</h1>

					<Card projectsArray = {projectsArray}></Card>

				</div>
			</motion.div>

        </motion.div>

	)
}
