import React from 'react'
import './projects.css'
import {Link} from 'react-router-dom'
import Card from './card'

export default function Projects({projectsArray}) {

  return (
    <section className='projects' id="projects">
      
        <div className='max anchor'>
            <h5>Featured</h5>
            <h1 data-aos="fade-right">Projects</h1>
            <Card projectsArray ={projectsArray}></Card>
            <Link to="/projects-page" className='h3'>Know More <i class="fas fa-long-arrow-alt-right"></i></Link>
        </div>

    </section>
  )
}
