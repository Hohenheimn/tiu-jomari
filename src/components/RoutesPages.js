import React, {useEffect} from "react";
import Homepage from "./homepage";
import Navigation from "./navigation";
import ProjectPage from "./ProjectPage";
import { Route, Routes, useLocation} from "react-router-dom";
import Contact from "./contact";
import ErrorPage from "./errorPage";
import {AnimatePresence} from 'framer-motion'
import Aboutmore from "./aboutmore";

export default function RoutesPages({tl, setNavigationScroll, navigationScroll}) {

    useEffect(() => {
        
        window.addEventListener('scroll', () => {

            window.scrollY > 0 ? setNavigationScroll(true) : setNavigationScroll(false)
      
        })
    })

    const location = useLocation();

    return (

        <div className="container">

            <Navigation navScroll = {navigationScroll} timeLine={tl}></Navigation>

            <AnimatePresence exitBeforeEnter={true}>

                <Routes location={location} key={location.pathname}>

                    <Route path="/" element={<Homepage/>}/>

                    <Route path="/projects-page" element={<ProjectPage/>}/>

                    <Route path="/about" element={<Aboutmore/>} />
                        
                    <Route path="*" element={<ErrorPage/>}/>

                </Routes>

            </AnimatePresence>

            <Contact></Contact>

        </div>
    )

}
