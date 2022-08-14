import React from "react";
import '../styles/projects.css'
import {Link} from 'react-router-dom'
import Card from './card'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

export default function Projects({projectsArray}) {

  const {ref, inView} = useInView({
    threshold: 0.2
  })

  const projects = "Projects";

  const ProjectTextarr = projects.split("");

  const StaggerContainer = {
    to : { 
        transition: {
            staggerChildren: 0.2
        }
    }
  }

  const FadeUp = {
    from: {
      opacity: 0,
      y: 30
    },
    to: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .3, ease: 'easeInOut'
      }
    }
  }

  const slides = {
    from : { x: 50},
    to: { x: 0, transition: { duration: .5 , ease: "easeIn" }}
  }
  
  return (
    <section className='projects' id="projects">
      
        <div className='max anchor' ref={ref}>

            {inView && (
              <motion.h5 variants={slides} initial="from" animate="to">Featured</motion.h5>
            )}

            <h1 ref={ref}>
              {inView ?
                <motion.div variants={StaggerContainer} initial="from" animate="to">
                  {
                    ProjectTextarr.map((char, index) => (
                      <Letter key={index} variant={FadeUp}>{char}</Letter>
                    ))
                  }
                </motion.div>
                : <div style={{opacity: 0}}></div>
              }
            </h1>

            <Card projectsArray ={projectsArray}></Card>

            {inView && (
                 <motion.div variants={slides} initial="from" animate="to">
                    <Link to="/projects-page" className='h3'>Click for More <FaLongArrowAltRight/></Link>
                  </motion.div>
            )}

        </div>

    </section>
  )
  
}

const Letter = ({children, variant}) => {
  return(
    <motion.span variants={variant}>{children}</motion.span>
  )
}
