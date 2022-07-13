import React, {useEffect} from 'react'
import './ProjectPage.css'
import Card from './card'
import AnimatePage from './AnimatePage'
import Background from './Background'
import {gsap} from 'gsap';

export default function ProjectPage() {

    useEffect(() => {
      window.scrollTo({ top: 0 })
    }, [])

    var tl = gsap.timeline();

    const projectsArray = [
      {
        id: 1,
        title: 'Hong-Kong Looking Ahead',
        Description: 'Project from THE ECONOMIST',
        DemoLink: 'https://hohenheimn.github.io/HKISD/',
        CodeLink: 'https://github.com/Hohenheimn/HKISD',
        ImageName: 'hkisd.png'
      },
      {
        id: 2,
        title: 'Bounce',
        Description: 'Project from THE ECONOMIST',
        DemoLink: 'https://hohenheimn.github.io/Bounce/',
        CodeLink: 'https://github.com/Hohenheimn/Bounce',
        ImageName: 'bounce.png'
      },
      {
        id: 3,
        title: '5 Templates',
        Description: 'Project from THE ECONOMIST',
        DemoLink: ' https://hohenheimn.github.io/Four-Templates/',
        CodeLink: 'https://github.com/Hohenheimn/Four-Templates',
        ImageName: 'google4.png'
      },
      {
        id: 4,
        title: 'Initiative Website',
        Description: 'Project from Magis Solution',
        DemoLink: 'https://hohenheimn.github.io/Project-1-Initiative-Website/public/',
        CodeLink: 'https://github.com/Hohenheimn/Project-1-Initiative-Website',
        ImageName: 'initiativeWebiste.png'
      },
      {
        id: 5,
        title: 'Kyndryl Project',
        Description: 'Project from The Economist',
        DemoLink: 'https://hohenheimn.github.io/Kyndryl-Project/',
        CodeLink: 'https://github.com/Hohenheimn/kyndryl',
        ImageName: 'kyndryl.png'
      },
      {
        id: 6,
        title: 'STRIDE',
        Description: 'Project from OPTIMIND',
        DemoLink: 'https://hohenheimn.github.io/STRIDE/',
        CodeLink: 'https://github.com/Hohenheimn/STRIDE',
        ImageName: 'stride.png'
      },
      {
        id: 7,
        title: 'Girl Scout of the Philippines',
        Description: 'Project from Magis Solution',
        DemoLink: 'https://hohenheimn.github.io/GirlScout/public/',
        CodeLink: 'https://github.com/Hohenheimn/GirlScout',
        ImageName: 'girl-Scout.png'
      },
      {
        id: 8,
        title: 'Nolan & Co',
        Description: 'Project from Magis Solution',
        DemoLink: 'https://hohenheimn.github.io/SquareSpace/public/',
        CodeLink: 'https://github.com/Hohenheimn/SquareSpace',
        ImageName: 'nolan-&-co.png'
      },
      {
        id: 9,
        title: 'Practice Blog Website',
        Description: 'Practice Blog Website',
        DemoLink: 'https://hohenheimn.github.io/jomari-collection/',
        CodeLink: 'https://github.com/Hohenheimn/jomari-collection',
        ImageName: "jomari'sCollection.png"
      },
      {
        id: 10,
        title: 'Mars Wrigley',
        Description: 'Project from The Economist',
        DemoLink: 'https://hohenheimn.github.io/mars-wrigley/',
        CodeLink: 'https://github.com/Hohenheimn/mars-wrigley',
        ImageName: 'Mars.png'
      },
      {
        id: 11,
        title: 'Crypto',
        Description: 'Project from The Economist',
        DemoLink: 'https://hohenheimn.github.io/Crypto/',
        CodeLink: 'https://github.com/Hohenheimn/Crypto',
        ImageName: 'Crypto.png'
      },
      {
        id: 12,
        title: 'IPC',
        Description: 'Project from Optimind',
        DemoLink: 'https://hohenheimn.github.io/IPC/',
        CodeLink: 'https://github.com/Hohenheimn/IPC',
        ImageName: 'ipc.png'
      },
      {
        id: 13,
        title: 'Empowering Future',
        Description: 'Project from Economist',
        DemoLink: 'https://hohenheimn.github.io/empowering-future/',
        CodeLink: 'https://github.com/Hohenheimn/empowering-future',
        ImageName: 'empower.png'
      },
  ]
  return (
    <div className='projects-container max'>
      <Background timeLine = {tl} title="PROJECTS"></Background>
      <h5>Featured</h5>
      <h1>Projects</h1>
      <Card projectsArray ={projectsArray}></Card>
    </div>
  )
}
