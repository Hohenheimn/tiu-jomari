import React from 'react'
import Header from "./header";
import Navigation from "./navigation";
import Projects from "./projects";
import Background from "./Background";
import Aboutt from "./about";
import Contact from "./contact";
import {gsap} from 'gsap';

export default function Homepage() {

    var tl = gsap.timeline();

    const projectsArray = [
        {
          id: 1,
          title: 'Hong-Kong Looking Ahead',
          Description: 'Project from THE ECONOMIST',
          DemoLink: 'https://hohenheimn.github.io/HKISD/',
          CodeLink: 'https://github.com/Hohenheimn/HKISD',
          ImageName: 'hkisd.jpg'
        },
        {
          id: 2,
          title: 'Bounce',
          Description: 'Project from THE ECONOMIST',
          DemoLink: 'https://hohenheimn.github.io/Bounce/',
          CodeLink: 'https://github.com/Hohenheimn/Bounce',
          ImageName: 'bounce.jpg'
        },
        {
          id: 3,
          title: 'Google 4 Templates',
          Description: 'Project from THE ECONOMIST',
          DemoLink: ' https://hohenheimn.github.io/Four-Templates/',
          CodeLink: 'https://github.com/Hohenheimn/Four-Templates',
          ImageName: 'google4.jpg'
        },
        {
          id: 4,
          title: 'Initiative Website',
          Description: 'Project from Magis Solution',
          DemoLink: 'https://hohenheimn.github.io/Project-1-Initiative-Website/public/',
          CodeLink: 'https://github.com/Hohenheimn/Project-1-Initiative-Website',
          ImageName: 'initiativeWebiste.png'
        },
    ]

    return (
        <div>
            <Background timeLine = {tl}></Background>
            <Header timeLine={tl}></Header>
            <Projects className="detect" projectsArray={projectsArray}></Projects>
            <Aboutt></Aboutt>
        </div>
    )
}
