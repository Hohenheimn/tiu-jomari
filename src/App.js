import React, {useEffect, useState} from "react";
import {HashRouter} from "react-router-dom";
import RoutesPages from "./components/RoutesPages";

import Aos from 'aos'
import 'aos/dist/aos.css'
import './responsive.css'
import {gsap} from 'gsap';


function App() {

  var tl = gsap.timeline();

  const [navigationScroll, setNavigationScroll] = useState(false);

  useEffect (() => {

    Aos.init({

      duration:500,

      once: true

    })
    
  }, []);


  
  return (

    <HashRouter>

      <div className="App">

        <RoutesPages tl={tl} navigationScroll={navigationScroll} setNavigationScroll={setNavigationScroll}></RoutesPages>

      </div>
      
    </HashRouter>

  );
}

export default App;
