import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Tag from './components/Tag'
import { useLayoutEffect } from 'react'

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
      <Header items={[['ENG / FR', '/#'], ['Design Work','/#works'], ['Dev Case Studies','/#caseStudies']]} />
      <section className='sectionHero'>
        <img className='ellipse' alt="ellipse" src='/ellipse0.svg'/>
        <img className='statue' alt="statue" src='/statue.png'/>
        <img className='buste' alt="buste" src='/buste.png'/>
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
        <div className='resumeContainer'>
          <ul>
            <li>
              <div className='yearResume'>2022</div>
              <div className='jobResume'>
                Web Developer RNCP 5 title (bac+2 eq.)<br/>
                <span>OC / Paris</span>
              </div>
            </li>
            <li>
              <div className='yearResume'>2007</div>
              <div className='jobResume'>
                Basic Media Certification<br/>
                <span>MiddleSex University / UK</span>
              </div>
            </li>
            <li>
              <div className='yearResume'>2000</div>
              <div className='jobResume'>
                Classe préparatoire aux Grande Ecoles<br/>
                <span>Lycée Saint Louis / Paris</span>
              </div>
            </li>
          </ul>
          <div className='separatorResume'></div>
          <ul>
            <li>
              <div className='yearResume'>2015</div>
              <div className='jobResume'>
                UI Designer - Freelancing<br/>
                <span>Fitness Boutique, Hybrid Factor & Big Block</span>
              </div>
            </li>
            <li>
            <div className='yearResume'>2007</div>
              <div className='jobResume'>
                Composer / Musician<br/>
                <span>Sony DE, Universal LATAM & BMG Warner</span>
              </div>
            </li>
            <li>
              <div className='yearResume'>2004</div>
                <div className='jobResume'>
                Adjoint au Secrétaire Général<br/>
                <span>Mairie de Paris</span>
              </div>
            </li>
            <li>
              <div className='yearResume'>2002</div>
                <div className='jobResume'>
                Technicien en Ingénierie des données<br/>
                <span>UUNET, EDF & Adecco</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='sectionWorks' id="works">
        <img src='/works/work1.webp' alt="travel app design" defer/><img src='/works/work2.webp' alt="travel landing page design" defer/><img src='/works/work3.webp' alt="fintech app design" defer/>
        <img src='/works/work4.webp' alt="eilish landing page design" defer/><img src='/works/work5.webp' alt="lol app design" defer/><img src='/works/work6.webp' alt="chiesa landing page design" defer/>
        <img className="optionalWork" src='/works/work7.webp' alt="library app design" defer/><img className="optionalWork" src='/works/work8.webp' alt="nike landing page design" defer/><img className="optionalWork" src='/works/work9.webp' alt="classical music app design" defer/>
        <img className="optionalWork" src='/works/work10.webp' alt="fintech app design" defer/><img className="optionalWork" src='/works/work11.webp' alt="accessories landing page design" defer/><img className="optionalWork" src='/works/work12.webp' alt="remote app design" defer/>
        <img className="optionalWork" src='/works/work13.webp' alt="movie booking app design" defer/><img className="optionalWork" src='/works/work14.webp' alt="real estate app design" defer/><img className="optionalWork" src='/works/work15.webp' alt="banking app design" defer/>
      </section>
      <section id="caseStudies" className='sectionCaseStudies'>
        <div className='caseStudiesBody'>
          <div className="caseContainer">
          <button className='viewCaseButton' title="go to case 1 backup"><img alt="arrow" src="/icons/arrow.svg"/></button>
          <NavLink aria-label='Look at Sophie Bluel case study' to="/case/1"><button className='viewCaseButtonGlass' title="go to case 1"></button></NavLink>
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
          </div>
          <div className="caseContainer">
            <button className='viewCaseButton' title="go to case 2 backup"><img alt="arrow" src="/icons/arrow.svg"/></button>
            <NavLink aria-label='Look at Casa case study' to="/case/2"><button className='viewCaseButtonGlass' title="go to case 2"></button></NavLink>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
