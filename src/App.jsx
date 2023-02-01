import { useState, useLayoutEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import CaseCard from './components/CaseCard'

import ellipse from '/ellipse0.svg'
import statue from '/statue.webp'
import buste from '/buste.webp'

import { case1, case2 } from './datas/CaseDatas'

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
      <Header mode='fullmenu' items={[['ENG / FR', '/#'], ['Design','/P8-Folio/#works'], ['Coding','/P8-Folio/#caseStudies'], ['Parcours','/P8-Folio/#works']]} />
      <section className='sectionHero'>
        <img className='ellipse' alt="ellipse" src={ellipse}/>
        <img className='statue' alt="statue" src={statue}/>
        <img className='buste' alt="buste" src={buste}/>
        <div className='heroContainer'>
          <p className='fonction'>UI Design & Frontend Dev. Paris. France.</p>
          <p className='identite'>Cédric ASkldd</p>
          <p className='text'>Après avoir multiplié les prestations modestes ces dernières années - design, front-end, full stack, 3D -, j'ai décidé, en 2022, de mettre un terme à ma carrière
de musicien professionnel, de manière à mieux me focaliser sur développement. Je poursuis actuellement un cursus dans l'espoir d'obtenir, à terme, le titre d'ingénieur / concepteur logiciel.</p>
          <a href="#works"><button className='recentWork'>Recent Work</button></a>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin.” ― Arthur Schopenhauer</blockquote>
        </div>
      </section>
      <section className='sectionResume'>
        <button className='dropResume' title="drop the resume">PARCOURS</button>
        <Resume/>
      </section>
      <Gallery />
      <section id="caseStudies" className='sectionCaseStudies'>
        <div className='caseStudiesBody'>
          <CaseCard caseInfos={case1} />
          <CaseCard caseInfos={case2} />
        </div>
      </section>
    </div>
  )
}

export default App

/*

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin quam vitae suspendisse. 
          Ullamcorper dictum eget non pretium molestie eu. Tortor odio sit a convallis nam. Amet, quisque quis ridiculus dolor ipsum, donec id.

*/