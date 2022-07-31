import React from 'react'
import '../styles/header.css'


export default function Header() {
    return (
		<header id="home">

            <div className="text-container">
                <div>
                    <p className='text1'>Welcome to my Portfolio <br/> I'm Jomari Tiu a</p>

                    <h1 className='animateType desktop'>{'<Front End Web-Developer/>'}</h1>
                    <a className='dl-cv' href="/tiu-jomari/cv/Tiu-Jomari.docx">Download CV</a>
                </div>

                <aside className='imge'>
                    <div className='bg'></div>
                    <img src="/tiu-jomari/images/me-2.png" alt="" />
                </aside>

            </div>

        </header>
    )
}
