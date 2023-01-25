import '../App.css'
import '../styles/Case.css'
import Header from '../components/Header'
import CaseTitle from '../components/CaseTitle'
import MenuCodeCase from '../components/MenuCodeCase'
import { useEffect, useState } from 'react'
import { useHTMLFetch } from '../hooks/FetchHTMLHook'

function Case(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [activeCode, setActiveCode] = useState(0)
  const [isLoading, fetchedData, setFetchedData, isfetchError] = useHTMLFetch(window.location.origin+'/code/codeapi.html')

  return (
    <div className="case">
      <Header items={[['ENG / FR', '/#'], ['Design Work','/#works'], ['Dev Case Studies','/#caseStudies'], ['Contact Me','/#works']]} />
        <section className='sectionSummary'>
            <div className='summaryContainer'>
                <img src="/bluel/bluel1.jpg" className='mainSiteCapture'/>
                <div className='halfSummaryContainer'>
                  <CaseTitle title="BRIEF KEYPOINTS"/>
                  <div className='bulletPointsContainer'>
                    <ul>
                      <li>Coding the <b>responsive front-end</b> of an already designed portfolio.</li>
                      <li>Implementing the <b>back-office</b> which allows to add new pictures.</li>
                      <li>Implementing the login form & dealing with the <b>sessions persistence</b>.</li>
                      <li>All this had to be done in <b>pure Javascript</b>, with the use of no library.</li>
                    </ul>
                  </div>
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
            {/* createRef with a state instead + create compo menu + code */}
            <MenuCodeCase codeArray={['api', 'gallery', 'log']} codeContainer={document.querySelector('.codeContainer')} setFetched={setFetchedData} setActiveCode={setActiveCode}/>
          </div>
        </section>
    </div>
  )

}

export default Case