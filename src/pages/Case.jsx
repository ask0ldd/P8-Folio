import '../App.css'
import '../styles/Case.css'
import NavBar from '../components/NavBar'
import CaseTitle from '../components/CaseTitle'
import { useLayoutEffect } from 'react'
import { useFetch } from '../hooks/FetchHook'

function Case(props) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const [isLoading, fetchedData, isfetchError] = useFetch(window.location.origin+'/code/codeapi.html')

  console.log(fetchedData)

  return (
    <div className="case">
        <section className='summaryBody'>
            <NavBar items={[['ENG / FR', '#'], ['Design Work','../#works'], ['Dev Case Studies','../#caseStudies'], ['Contact Me','../#works']]} />
            <div className='summaryContainer'>
                <img src="/bluel/bluel1.jpg" className='mainSiteCapture'/>
                <div className='halfSummaryContainer'>
                  <CaseTitle title="DETAILS OF THE BRIEF"/>
                  <ul>
                    <li>Coding the responsive front-end of an already designed portfolio.</li>
                    <li>Implementing the back-office which allows to add new pictures.</li>
                    <li>Implementing the login form & dealing with the sessions persistence.</li>
                    <li>All this had to be done in pure Javascript, with the use of no library.</li>
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

        <section style={{marginTop: "4rem"}} className='codeBody'>
            <div style={{overflowY: "scroll"}} className='codeContainer' dangerouslySetInnerHTML={{__html: fetchedData}}>
              
            </div>
        </section>
    </div>
  )
}

export default Case