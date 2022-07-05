import React, {useState, useEffect} from "react";
import Homepage from "./components/homepage";
import Navigation from "./components/navigation";
import ProjectPage from "./components/ProjectPage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import ErrorPage from "./components/errorPage";

import Aos from 'aos'
import 'aos/dist/aos.css'
import './responsive.css'
import {gsap} from 'gsap';

function App() {

  var tl = gsap.timeline();

  const [navigationScroll, setNavigationScroll] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setNavigationScroll(true) : setNavigationScroll(false)
    })
    Aos.init({
      duration:500,
      once: true
    })
  }, []);
  
  return (

    <HashRouter>

      <div className="App">

        <div className="container">

          <Navigation navScroll = {navigationScroll} timeLine={tl}></Navigation>

          <Routes>

            <Route path="/" element={<Homepage/>}/>
            <Route path="/projects-page" element={<ProjectPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>

          </Routes>

          <Contact></Contact>

        </div>

      </div>
      
    </HashRouter>

  );
}

export default App;
