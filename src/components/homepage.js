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

    return (

        <div>
            <Header></Header>
            <Projects className="detect" projectsArray={firstFourProjects}></Projects>
            <Aboutt></Aboutt>
        </div>
        
    )
}
