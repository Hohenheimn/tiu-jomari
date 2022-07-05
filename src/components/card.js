import React from 'react'
import './card.css'

export default function Card({projectsArray}) {
  return (
    <ul className='card-container'>

        {projectsArray.map((projectList) => (
            <li className='card' key={projectList.id} data-aos="fade-left">

                <img src={`/tiu-jomari/images/${projectList.ImageName}`} alt="" />

                <div className='content'>

                    <p className='title'>{projectList.title}</p>

                    <p>{projectList.Description}</p>

                    <div className='buttons'>

                        <a href={`${projectList.CodeLink}`} target="_new">Code</a>

                        <a href={`${projectList.DemoLink}`} target="_new">Demo</a>

                    </div>

                </div>

            </li>
        ))}

    </ul>
  )
}
