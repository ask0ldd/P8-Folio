import { useState, useLayoutEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Tag from './components/Tag'
import Resume from './components/Resume'
import Gallery from './components/Gallery'

import arrow from '/icons/arrow.svg'
import ellipse from '/ellipse0.svg'
import statue from '/statue.webp'
import buste from '/buste.webp'

function App() {
  const [count, setCount] = useState(0)
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const dropButton = document.querySelector('.dropResume')
    dropButton.addEventListener('click', ()=>{
      //document.querySelector('.sectionResume').style.height = "fit-content";
      document.querySelector('.sectionResume').classList.add("sectionResumeFull");
      document.querySelectorAll('.jobResume').forEach(el => {
        el.style.animation="0.4s ease-out 0.2s forwards jobresume"
      })
      document.querySelectorAll('.yearResume').forEach((el, i) => {
        el.style.animation="0.4s ease-out "+(0.6)+"s forwards yearresume"
      })
    })  
  });

  return (
    <div className="App">
      <Header items={[['ENG / FR', '/#'], ['Design Work','/P8-Folio/#works'], ['Dev Case Studies','/P8-Folio/#caseStudies']]} />
      <section className='sectionHero'>
        <img className='ellipse' alt="ellipse" src={ellipse}/>
        <img className='statue' alt="statue" src={statue}/>
        <img className='buste' alt="buste" src={buste}/>
        <div className='heroContainer'>
          <p className='fonction'>UI Design & Front End Dev. Paris. France.</p>
          <p className='identite'>Cédric ASkldd</p>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin quam vitae suspendisse. 
          Ullamcorper dictum eget non pretium molestie eu. Tortor odio sit a convallis nam. Amet, quisque quis ridiculus dolor ipsum, donec id.</p>
          <a href="#works"><button className='recentWork'>Recent Work</button></a>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin.” ― Arthur Schopenhauer</blockquote>
        </div>
      </section>
      <section className='sectionResume'>
        <button className='dropResume' title="drop the resume">RESUME</button>
        <Resume/>
      </section>
      <Gallery />
      <section id="caseStudies" className='sectionCaseStudies'>
        <div className='caseStudiesBody'>
          <div className="caseContainer">
          <button className='viewCaseButton' title="go to case 1 backup"><img alt="arrow" src={arrow}/></button>
          <Link aria-label='Look at Sophie Bluel case study' to="/case/1"><button className='viewCaseButtonGlass' title="go to case 1"></button></Link>
            <span className='digit'>I</span>
            <span className='caseTitle'>ARCHITECT PORTFOLIO / FRONTEND</span>
            <ul>
              <li>Coding the responsive front-end of an already designed portfolio.</li>
              <li>Implementing the front-end of the back-office allowing to add new pictures.</li>
              <li>Everything had to be done in pure Javascript, with the use of no library.</li>
            </ul>
            <div className='tagContainer'>
              <Tag text="Javascript ES6" />
              <Tag text="HTML + SASS" />
              <Tag text="Figma" />
            </div>
            <Link aria-label='Look at Casa case study' to="/case/2"><div className='textViewCaseButton'>Check out this project</div></Link>
          </div>
          <div className="caseContainer">
            <button className='viewCaseButton' title="go to case 2 backup"><img alt="arrow" src={arrow}/></button>
            <Link aria-label='Look at Casa case study' to="/case/2"><button className='viewCaseButtonGlass' title="go to case 2"></button></Link>
            <span className='digit'>II</span>
            <span className='caseTitle'>BOOKS RATING WEBSITE / BACKEND</span>
            <ul>
              <li>Coding the responsive front-end of an already designed portfolio.</li>
              <li>Implementing the front-end of the back-office allowing to add new pictures.</li>
              <li>Everything had to be done in pure Javascript, with the use of no library.</li>
            </ul>
            <div className='tagContainer'>
              <Tag text="Node.js" />
              <Tag text="Express" />
              <Tag text="MongoDB" />
            </div>
            <Link aria-label='Look at Casa case study' to="/case/2"><div className='textViewCaseButton'>Check out this project</div></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
