import React, {useEffect} from "react";
import Homepage from "./homepage";
import Navigation from "./navigation";
import ProjectPage from "./ProjectPage";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import ErrorPage from "./errorPage";
import {AnimatePresence} from 'framer-motion'

export default function RoutesPages({tl, setNavigationScroll, navigationScroll}) {

    useEffect(() => {
        window.addEventListener('scroll', () => {

            window.scrollY > 0 ? setNavigationScroll(true) : setNavigationScroll(false)
      
        })
    })

    return (

        <div className="container">

            <Navigation navScroll = {navigationScroll} timeLine={tl}></Navigation>

                <AnimatePresence exitBeforeEnter={true}>

                    <Routes>

                        <Route path="/" element={<Homepage/>}/>

                        <Route path="/projects-page" element={<ProjectPage/>}/>
                        
                        <Route path="*" element={<ErrorPage/>}/>

                    </Routes>

                </AnimatePresence>

            <Contact></Contact>

        </div>
    )

}
