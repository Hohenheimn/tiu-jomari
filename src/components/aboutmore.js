import React, {useContext, useEffect, useState} from 'react'
import AnimatePage from './AnimatePage'
import { SkillContext } from './SkillProvider'
import '../styles/aboutmore.scss';
import ExpCard from './ExpCard';

export default function Aboutmore() {

    const {SkillSet} = useContext(SkillContext)

    const [isSkill, setSkill] = useState(SkillSet)

    useEffect(() => {

        window.scrollTo({ top: 0 })

    }, [])

    return (
    <AnimatePage>
        <div className='max'>
            <article className='about-containers'>

                <article>
                    <h4 className='discover'>Discover</h4>
                    <h1 className='aboutme'>About Me</h1>
                </article>

                <article>
                    <p>
                        Hi I am Jomari G. Tiu a Front-End Web Developer and Graduating Information in Technology from Cavite State University - Carmona, I live in GMA Cavite,
                        Im 24 yrs old.  My Hobbies are Playing basket ball, spending time with love one, playing mobile games and study more about front end.
                    </p>
                </article>

                <article>
                    <div className='layout-container'>
                        <div className='text-container'>
                            <h5>Educational Attainment</h5>
                            <ul>
                                <li>Graduated San Jose Elementary School G.M.A, Cavite, 2006 – 2011.</li>
                                <li>Graduated San Jose Community High School G.M.A, Cavite, 2011 – 2015.</li>
                                <li>Undergraduate Cavite State University Carmona Campus, Cavite Bachelor of Science in Information Technology (Graduation this September).</li>
                            </ul>
                        </div>
                        <div className='img-container'>
                            <img src="/tiu-jomari/images/cvsu.png" alt="" />
                            <div className="after"></div>
                        </div>
                    </div>
                </article>

                <article>
                    <h5>Work Expirience</h5>
                    <ul className='exp'>
                        <ExpCard key={1} description="I am a Front End Tailwind developer as a Part timer for 4 Month, I convert PSD web design or existing website to HTML using TAILWIND CSS as styls" title="Magis Solutions" img="/tiu-jomari/images/magis.png"></ExpCard>
                        <ExpCard key={2} title="Optimind Technology Solutions" img="/tiu-jomari/images/optimind.png" description="I am a Front End and Wordpress Developer, I convert PSD to HTML with SASS and Adding animation, then put the HTML to Wordpress to add fields using Advance custom fields pro to easily change the content by the client"></ExpCard>
                    </ul>
                </article>
                
                <div className='card-box-container'>
                    <h5>Technical Skills</h5>
                    {isSkill.map((item, index) => (
                        <div key={index}>
                            <aside>
                                <img src={`/tiu-jomari/images/${item.image}`} alt="" />
                                <h5>{item.name}</h5>
                            </aside>
                        </div>
                    ))}
                </div>

            </article>
        </div>
    </AnimatePage>
    )
}
