import React, {useState, useEffect} from "react";
import {HashRouter} from "react-router-dom";
import RoutesPages from "./components/RoutesPages";
import { ProjectProvider } from "./components/ProjectProvider";
import { SkillProvider } from "./components/SkillProvider";
import styles from './styles/loadingScreen.module.scss';
import {AnimatePresence, motion} from 'framer-motion'
import './responsive.css'


function App() {

  const [navigationScroll, setNavigationScroll] = useState(false);

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidate(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, validate)
  
  return (

    <div>
      {validate ?
        <ProjectProvider>
        
          <SkillProvider>

            <HashRouter>

              <div className="App">

                <RoutesPages navigationScroll={navigationScroll} setNavigationScroll={setNavigationScroll}></RoutesPages>

              </div>

            </HashRouter>

          </SkillProvider>

        </ProjectProvider>
        :
        <LoadingScreen></LoadingScreen>
      }
    </div>

  );
}

const LoadingScreen = () => {

  const addName = "omari";

  const arrayName = addName.split("");

  const StaggerContainer = {
    from: {
      width: 0,
      overflow: "hidden"
    },
    to: {
      overflow: "visible",
      width: "200px",
      transition: {
        duration: 1,
        staggerChildren: .2,
        when: "beforeChildren"
      }
    }
  }

  const Appear = {
    from: {
      width: 0,
      opacity: 0,
    },
    to: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    },
    exit: {
      width: 0,
      transition: {
        duration: .5
      }
    }
  }
  const color = {
    from: {
      color: "white",
    },
    to: {
      color: "black",
      transition: {
        delay: .8,
        duration: .5,
        ease: "easeInOut"
      }
    },
    exit: {
      color: "white",
      transition: {
        duration: .5
      }
    }
  }
  return (
    <AnimatePresence>
      <div className={styles.loadingScreen}>
        <div className={styles.logo}>
          <motion.h1 variants={StaggerContainer} initial="from" animate="to" exit="exit"><motion.div variants={color}>J</motion.div>
            {arrayName.map((item, i) => (
              <LetterAnimate key={i} variantName={Appear}>{item}</LetterAnimate>
            ))}
          </motion.h1>
        </div>
      </div>
    </AnimatePresence>
  )
}

const LetterAnimate = ({children, variantName}) => {
    return (
      <motion.span variants={variantName}>{children}</motion.span>
    )
}

export default App;
