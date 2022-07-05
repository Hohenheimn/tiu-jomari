import React from 'react'
import './about.css'

export default function Aboutt() {
  return (
    <div className='about-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L15,160C30,160,60,160,90,165.3C120,171,150,181,180,181.3C210,181,240,171,270,144C300,117,330,75,360,80C390,85,420,139,450,149.3C480,160,510,128,540,112C570,96,600,96,630,96C660,96,690,96,720,90.7C750,85,780,75,810,101.3C840,128,870,192,900,186.7C930,181,960,107,990,80C1020,53,1050,75,1080,101.3C1110,128,1140,160,1170,176C1200,192,1230,192,1260,181.3C1290,171,1320,149,1350,165.3C1380,181,1410,235,1425,261.3L1440,288L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>
        <div id="about"></div>
        <div className='max max-about anchor'>
            <section className='about'>
                <article>
                    <div data-aos="zoom-in">
                        <h5>Discover</h5>
                        <h2>About Me</h2>
                        <p data-aos="fade-up">
                            Hi I am Jomari G. Tiu a Front-End Web Developer and Graduating Information in Technology from Cavite State University - Carmona, I live in GMA Cavite,
                            Im 24 yrs old.  My Hobbies are Playing basket ball, spending time with love one, playing mobile games and study more about front end.
                        </p>
                        <h3>Skills</h3>
                        <ul>
                            <li data-aos="fade-left" data-aos-delay="200">Cascading Style Sheets</li>
                            <li data-aos="fade-left" data-aos-delay="200">Javascript</li>
                            <li data-aos="fade-left" data-aos-delay="200">HTML</li>
                            <li data-aos="fade-left" data-aos-delay="200">Tailwind CSS</li>
                            <li data-aos="fade-left" data-aos-delay="200">Ceros</li>
                            <li data-aos="fade-left" data-aos-delay="200">Basic Knowledge Figma</li>
                            <li data-aos="fade-left" data-aos-delay="200">Basic Knowledge React JS</li>
                            <li data-aos="fade-left" data-aos-delay="200">PHP</li>
                            <li data-aos="fade-left" data-aos-delay="200">My SQL</li>
                        </ul>
                        <a href="">Download CV <i class="fas fa-download"></i></a>
                    </div>
                </article>
                <aside>
                    <div>
                        <img src="/tiu-jomari/images/Me.png" alt="" data-aos="zoom-in" />
                    </div>
                </aside>
            </section>
        </div>
    </div>
  )
}
