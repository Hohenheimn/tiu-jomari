import React, {useState} from "react";
import {HashRouter} from "react-router-dom";
import RoutesPages from "./components/RoutesPages";
import { ProjectProvider } from "./components/ProjectProvider";
import { SkillProvider } from "./components/SkillProvider";

import 'aos/dist/aos.css'
import './responsive.css'


function App() {

  const [navigationScroll, setNavigationScroll] = useState(false);
  
  return (

    <ProjectProvider>
      
      <SkillProvider>

        <HashRouter>

          <div className="App">

            <RoutesPages navigationScroll={navigationScroll} setNavigationScroll={setNavigationScroll}></RoutesPages>

          </div>

        </HashRouter>

      </SkillProvider>

    </ProjectProvider>

  );
}

export default App;
