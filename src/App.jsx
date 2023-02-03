import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import CaseCard from './components/CaseCard'

import ellipse from '/ellipse0.svg'
import statue from '/statue.webp'
import buste from '/buste.webp'
import miniArrow from '/icons/miniarrowdrop2.svg'

import { case1, case2, nCases } from './datas/CaseDatas'

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }

  const [animation, setAnimation]  = useState()

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {if(entry.isIntersecting) {
      setAnimation({title : 'caseTitleAnim', bps : 'caseBpsAnim', tags : 'caseTagsAnim'})
      observer.unobserve(entry.target)
    }
    })
  }
  let observer = new IntersectionObserver(observerCallback, { threshold: 0.6 })

  
  useLayoutEffect(() => {
    /*if(nRender.current === 0) {
      window.scrollTo(0, 0)
      nRender.current = 1
    }*/
  });

  useEffect(() => {
    // OBSERVE #caseStudies WHEN DOM RENDERED
    observer.observe(document.querySelector('#caseStudies'))

    // WAIT FOR THE DOM TO BE RENDERED BEFORE ADDING A LISTENER
    const dropButton = document.querySelector('.dropResume')
    dropButton.addEventListener('click', ()=>{
      document.querySelector('.sectionResume').classList.add("sectionResumeFull");
      document.querySelectorAll('.jobResume').forEach(el => {
        el.style.animation="0.4s ease-out 0.2s forwards jobresume"
      })
      document.querySelectorAll('.yearResume').forEach((el, i) => {
        el.style.animation="0.4s ease-out "+(0.6)+"s forwards yearresume"
      })
    })
  },[])

  return (
    <div className="App">
      <Header mode='fullmenu' items={[['FR', '/#'], ['Design','/P8-Folio/#works'], ['Coding','/P8-Folio/#caseStudies'], ['Parcours','/P8-Folio/#parcours']]} />
      <section className='sectionHero'>
        <img className='ellipse' alt="ellipse" src={ellipse}/>
        <img className='statue' alt="statue" src={statue}/>
        <img className='buste' alt="buste" src={buste}/>
        <div className='heroContainer'>
          <h1 className='fonction'>UI Design & Frontend Dev. Paris. France.</h1>
          <p className='identite'>Cédric ASkldd</p>
          <p className='text'>Apres avoir considéré, durant des années, le développement web & le design comme des sources de revenus secondaires; j'ai décidé en 2022 d'opérer un virage professionnel durable et de devenir ingénieur / concepteur logiciel. Première marche vers cet objectif, mon titre de développeur web est présentement en cours de validation.</p>
          <a href="#works"><button className='recentWork'>Recent Work</button></a>
          <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue velit integer viverra dignissim proin.” ― Arthur Schopenhauer</blockquote>
        </div>
      </section>
      <section className='sectionResume'>
        <button id="parcours" className='dropResume' title="drop the resume">PARCOURS</button>
        <img className='resumeArrow' alt="droparrow" src={miniArrow}/>
        <Resume/>
      </section>
      <Gallery />
      <section id="caseStudies" className='sectionCaseStudies'>
        <div className='caseStudiesBody'>
          {case1 && <CaseCard caseInfos={case1} animation={animation}/>}
          {case2 && <CaseCard caseInfos={case2} animation={animation} />}
        </div>
      </section>
    </div>
  )
}

export default App