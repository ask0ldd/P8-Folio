import '../App.css'
import '../styles/Case.css'
import NavBar from '../components/NavBar'
import CaseTitle from '../components/CaseTitle'
import { useEffect, useState } from 'react'
import { useHTMLFetch } from '../hooks/FetchHTMLHook'

function Case(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [activeCode, setActiveCode] = useState(0)
  const [isLoading, fetchedData, setFetchedData, isfetchError] = useHTMLFetch(window.location.origin+'/code/codeapi.html')

  const codeArray = ['api', 'gallery', 'log']
  const codeContainer = document.querySelector('.codeContainer')

  const test = async (id) => {
    try{
      const response = await fetch(window.location.origin+'/code/code'+codeArray[id]+'.html')
      const data = await response.text()
      setFetchedData(data)
      setActiveCode(id)
      codeContainer.scrollTo(0, 0)
    }catch(error){
        console.error(error)
    }
  }

  return (
    <div className="case">
        <section className='sectionSummary'>
        <NavBar items={[['ENG / FR', '#'], ['Design Work','../#works'], ['Dev Case Studies','../#caseStudies'], ['Contact Me','../#works']]} />
            <div className='summaryContainer'>
                <img src="/bluel/bluel1.jpg" className='mainSiteCapture'/>
                <div className='halfSummaryContainer'>
                  <CaseTitle title="BRIEF KEYPOINTS"/>
                  <ul>
                    <li>Coding the <b>responsive front-end</b> of an already designed portfolio.</li>
                    <li>Implementing the <b>back-office</b> which allows to add new pictures.</li>
                    <li>Implementing the login form & dealing with the <b>sessions persistence</b>.</li>
                    <li>All this had to be done in <b>pure Javascript</b>, with the use of no library.</li>
                  </ul>
                  <div className="greenTagsContainer">
                    <div className='greenTag'>Javascript ES6</div>
                    <div className='greenTag'>HTML + SASS</div>
                    <div className='greenTag'>Figma</div>
                  </div>
                  <div className='genericCode'></div>
                </div>
            </div>
        </section>

        <section style={{marginTop: "4rem"}} className='sectionCode'>
          <div className='codenMenuContainer'>
            <div style={{overflowY: "scroll"}} className='codeContainer' dangerouslySetInnerHTML={{__html: fetchedData}}>
            </div>
            <div className="menuCodeContainer">
              <button className='active' onClick={() => test(0)}>API Wrapper</button>
              <button onClick={() => test(1)}>Gallery</button>
              <button>Gallery Management</button>
              <button onClick={() => test(2)}>Login</button>
            </div>
          </div>
        </section>
    </div>
  )

}

export default Case