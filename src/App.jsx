import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Tag from './components/Tag'
import { useLayoutEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="App">
      <section className='hero'>
        <img className='ellipse' src='/ellipse0.svg'/>
        <img className='statue' src='/statue.png'/>
        <img className='buste' src='/buste.png'/>
        <div className='heroContainer'>
          <NavBar items={[['ENG / FR', '/#'], ['Design Work','/#works'], ['Dev Case Studies','/#caseStudies'], ['Contact Me','/#works']]} />
          <p className='fonction'>UI Design & Front End Dev. Paris. France.</p>
          <p className='identite'>Cédric ASkldd</p>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin quam vitae suspendisse. 
          Ullamcorper dictum eget non pretium molestie eu. Tortor odio sit a convallis nam. Amet, quisque quis ridiculus dolor ipsum, donec id.</p>
          <a href="#works"><button className='recentWork'>Recent Work</button></a>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin.” ― Arthur Schopenhauer</blockquote>
        </div>
      </section>
      <section className='works' id="works">
        <img src='/works/work1.jpg' defer/><img src='/works/work2.jpg' defer/><img src='/works/work3.jpg' defer/>
        <img src='/works/work4.jpg' defer/><img src='/works/work5.jpg' defer/><img src='/works/work6.jpg' defer/>
        <img src='/works/work7.jpg' defer/><img src='/works/work8.jpg' defer/><img src='/works/work9.jpg' defer/>
        <img src='/works/work10.jpg' defer/><img src='/works/work11.jpg' defer/><img src='/works/work12.jpg' defer/>
        <img src='/works/work13.jpg' defer/><img src='/works/work14.jpg' defer/><img src='/works/work15.jpg' defer/>
      </section>
      <section id="caseStudies" className='caseStudies'>
        <div className='caseStudiesBody'>
          <div className="caseContainer">
          <button className='viewCaseButton'><img src="/icons/arrow.svg"/></button>
          <NavLink to="/case/1"><button className='viewCaseButtonGlass'></button></NavLink>
            <span className='digit'>I</span>
            ARCHITECT PORTFOLIO / FRONTEND
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
            <button className='viewCaseButton'><img src="/icons/arrow.svg"/></button>
            <NavLink to="/case/2"><button className='viewCaseButtonGlass'></button></NavLink>
            <span className='digit'>II</span>
            BOOKS RATING WEBSITE / BACKEND
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
