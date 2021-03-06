import React from "react";
import '../styles/projects.css'
import {Link} from 'react-router-dom'
import Card from './card'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Projects({projectsArray}) {
  
  return (
    <section className='projects' id="projects">
      
        <div className='max anchor'>
            <h5>Featured</h5>
            <h1>Projects</h1>
            <Card projectsArray ={projectsArray}></Card>
            <Link to="/projects-page" className='h3'>Click for More <FaLongArrowAltRight/></Link>
        </div>

    </section>
  )
  
}
