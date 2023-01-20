import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='hero'>
        <img className='ellipse' src='/ellipse0.svg'/>
        <img className='statue' src='/statue.png'/>
        <img className='buste' src='/buste.png'/>
        <div className='heroContainer'>
          <NavBar items={['ENG / FR', 'Design Work', 'Dev Case Studies', 'Contact Me']} />
          <p className='fonction'>UI Design & Front End Dev. Paris. France.</p>
          <p className='identite'>Cédric ASkldd</p>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin quam vitae suspendisse. 
          Ullamcorper dictum eget non pretium molestie eu. Tortor odio sit a convallis nam. Amet, quisque quis ridiculus dolor ipsum, donec id.</p>
          <button className='recentWork'>Recent Work</button>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin.” ― Arthur Schopenhauer</blockquote>
        </div>
      </section>
      <section className='works'>
        <img src='/works.jpg'/>
      </section>
      <section className='caseStudies'>
        <div className="caseContainer">
          ARCHITECT PORTFOLIO / FRONTEND
          <ul>
            <li>Coding the responsive front-end of an already designed portfolio.</li>
            <li>Implementing the front-end of the back-office allowing to add new pictures.</li>
            <li>Everything had to be done in pure Javascript, with the use of no library.</li>
          </ul>
        </div>
        <div className="caseContainer">
          BOOKS RATING WEBSITE / BACKEND
          <ul>
            <li>Coding the responsive front-end of an already designed portfolio.</li>
            <li>Implementing the front-end of the back-office allowing to add new pictures.</li>
            <li>Everything had to be done in pure Javascript, with the use of no library.</li>
          </ul>
          <div className='technoButtonsContainer'>
            <div className='technoButton'>Node.js</div>
            <div className='technoButton'>Express</div>
            <div className='technoButton'>MongoDB</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
