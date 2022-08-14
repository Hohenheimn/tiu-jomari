import React, {useContext, useEffect, useState} from 'react'
import AnimatePage from './AnimatePage'
import { SkillContext } from './SkillProvider'
import styles from '../styles/aboutmore.module.scss'
import ExpCard from './ExpCard';

export default function Aboutmore() {

    const {SkillSet} = useContext(SkillContext)

    const [isSkill, setSkill] = useState(SkillSet)

    useEffect(() => {

        window.scrollTo({ top: 0 })

    }, [])

    return (
    <AnimatePage>
        <div className={styles.max}>
            <article className={styles.aboutContainers}>

                <div className={`${styles.black}`}>
                    <article style={{marginBottom: 0}} className={styles.bannerHead}>
                        <div className={styles.layoutContainer}>
                            <div className={styles.textContainer}>
                                <h4 className={styles.discover}>Discover</h4>
                                <h1 className={styles.aboutme}>About Me</h1>
                                <p>
                                    Hi I am Jomari G. Tiu a Front-End Web Developer and Graduating Information in Technology from Cavite State University - Carmona, I live in GMA Cavite,
                                    Im 24 yrs old.  My Hobbies are Playing basket ball, spending time with love one, playing mobile games and study more about front end.
                                </p>
                            </div>
                            <div className={styles.imgContainer}>
                                <img src="/tiu-jomari/images/me-2.png" alt="" />
                            </div>
                        </div>
                    </article>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,160L15,160C30,160,60,160,90,165.3C120,171,150,181,180,181.3C210,181,240,171,270,144C300,117,330,75,360,80C390,85,420,139,450,149.3C480,160,510,128,540,112C570,96,600,96,630,96C660,96,690,96,720,90.7C750,85,780,75,810,101.3C840,128,870,192,900,186.7C930,181,960,107,990,80C1020,53,1050,75,1080,101.3C1110,128,1140,160,1170,176C1200,192,1230,192,1260,181.3C1290,171,1320,149,1350,165.3C1380,181,1410,235,1425,261.3L1440,288L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>

                <article style={{marginBottom: 0}}>
                    <div className={`${styles.layoutContainer} ${styles.left}`}>
                        <div className={styles.textContainer}>
                            <h5>Educational Attainment</h5>
                            <ul>
                                <li>Graduated San Jose Elementary School G.M.A, Cavite, 2006 – 2011.</li>
                                <li>Graduated San Jose Community High School G.M.A, Cavite, 2011 – 2015.</li>
                                <li>Undergraduate Cavite State University Carmona Campus, Cavite Bachelor of Science in Information Technology (Graduation this September).</li>
                            </ul>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src="/tiu-jomari/images/cvsu.png" alt="" />
                            <div className={styles.after}></div>
                        </div>
                    </div>
                </article>

                <svg xmlns="http://www.w3.org/2000/svg" className='svg-bot' viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,0L15,37.3C30,75,60,149,90,192C120,235,150,245,180,245.3C210,245,240,235,270,224C300,213,330,203,360,176C390,149,420,107,450,106.7C480,107,510,149,540,144C570,139,600,85,630,85.3C660,85,690,139,720,181.3C750,224,780,256,810,229.3C840,203,870,117,900,112C930,107,960,181,990,224C1020,267,1050,277,1080,272C1110,267,1140,245,1170,240C1200,235,1230,245,1260,229.3C1290,213,1320,171,1350,138.7C1380,107,1410,85,1425,74.7L1440,64L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>

                <div className={styles.black}>
                    <article className={styles.black}>
                        
                        <h5>Work Expirience</h5>
                        <ul className={styles.exp}>
                            <ExpCard key={1} description="I am a Front End Tailwind developer as a Part timer for 4 Month, I convert PSD web design or existing website to HTML using TAILWIND CSS as styls" title="Magis Solutions" img="/tiu-jomari/images/magis.png"></ExpCard>
                            <ExpCard key={2} title="Optimind Technology Solutions" img="/tiu-jomari/images/optimind.png" description="I am a Front End and Wordpress Developer, I convert PSD to HTML with SASS and Adding animation, then put the HTML to Wordpress to add fields using Advance custom fields pro to easily change the content by the client"></ExpCard>
                        </ul>
                        
                    </article>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#000" fillOpacity="1" d="M0,64L26.7,85.3C53.3,107,107,149,160,176C213.3,203,267,213,320,186.7C373.3,160,427,96,480,90.7C533.3,85,587,139,640,149.3C693.3,160,747,128,800,149.3C853.3,171,907,245,960,229.3C1013.3,213,1067,107,1120,53.3C1173.3,0,1227,0,1280,10.7C1333.3,21,1387,43,1413,53.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
                
                <div className={styles.cardBoxContainer}>
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
