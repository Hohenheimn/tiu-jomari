import React, {useEffect} from 'react'
import './header.css'

export default function Header({timeLine}) {
    
    useEffect(() => {
        timeLine.fromTo('.text1', 1, {transform: 'translateY(50px)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, ease: 'Power4.easeIn'})
        timeLine.fromTo('.dl-cv', 1, {transform: 'translateY(50px)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, ease: 'Power4.easeIn'}, '-=.5')
    },[]);

    return (
		<header id="home">

            <div className="text-container">

                <p className='text1'>Welcome to my Portfolio <br/> I'm Jomari Tiu a</p>

                <h1 className='animateType desktop'>
                    {
                        '<Front-End Web Developer/>'
                    }
                </h1>
                <h1 className='animateType mobile first'>
                    {
                        '<Front-End/>'
                    }
                </h1>
                <h1 className='animateType mobile second'>
                    {
                        '<Web Developer/>'
                    }
                </h1>
                <a className='dl-cv' href="/cv/Tiu-Jomari.docx">Download CV <i class="fas fa-download"></i></a>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,224L34.3,234.7C68.6,245,137,267,206,256C274.3,245,343,203,411,186.7C480,171,549,181,617,202.7C685.7,224,754,256,823,240C891.4,224,960,160,1029,154.7C1097.1,149,1166,203,1234,202.7C1302.9,203,1371,149,1406,122.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

        </header>
    )
}
