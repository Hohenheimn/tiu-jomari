import React from 'react'
import '../styles/contact.css'
import { FaFacebook, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'


export default function Contact() {
  return (

    <div className='contact-container' id="contact">
        <svg xmlns="http://www.w3.org/2000/svg" className='svg-bot' viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,0L15,37.3C30,75,60,149,90,192C120,235,150,245,180,245.3C210,245,240,235,270,224C300,213,330,203,360,176C390,149,420,107,450,106.7C480,107,510,149,540,144C570,139,600,85,630,85.3C660,85,690,139,720,181.3C750,224,780,256,810,229.3C840,203,870,117,900,112C930,107,960,181,990,224C1020,267,1050,277,1080,272C1110,267,1140,245,1170,240C1200,235,1230,245,1260,229.3C1290,213,1320,171,1350,138.7C1380,107,1410,85,1425,74.7L1440,64L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
        <div>

          <section className='max anchor'>

            <h1>Lets work together for your next projects</h1>

            <ul>
              <h3>{'<Contact/>'}</h3>
              <li><a href="https://www.facebook.com/jomari.tiu/" target="_black"><FaFacebook/> Tiu Jmri</a></li>
              <li><a href="jomtiu16@gmail.com" target="_black"><FaEnvelope/> jomtiu16@gmail.com</a></li>
              <li><a target="_black"><FaPhone/> 09515532773</a></li>
              <li><a href="https://linkedin.com/in/jomari-tiu-103b01214" target="_black"><FaLinkedin/> jomari-tiu</a></li>
            </ul>

            <aside>
              <h3>Created Using:</h3>
              <p>React JS</p>
              <p>-Framer Motion</p>
              <p>-Context API</p>
              <p>-AOS animation</p>
              <p>CSS</p>
            </aside>

          </section>

        </div>

    </div>

  )
}
