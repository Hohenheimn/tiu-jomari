import React, {useEffect, useContext} from 'react'
import '../styles/ProjectPage.css'
import Card from './card'
import { ProjectContext } from './ProjectProvider'
import AnimatePage from './AnimatePage'

export default function ProjectPage() {

	const {projectsArray} = useContext(ProjectContext);

    useEffect(() => {

      	window.scrollTo({ top: 0 })

    }, [])


	return (

		<AnimatePage>
			
			<div className='projects-container max'>

				<h5>Featured</h5>

				<h1>Projects</h1>

				<Card projectsArray = {projectsArray}></Card>

			</div>

		</AnimatePage>

	)
}
