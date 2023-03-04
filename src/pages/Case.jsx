import '../App.css'
import '../styles/Case.css'
import Header from '../components/Header'
import CaseDescription from '../components/CaseStudy/CaseDescription'
import { useEffect, useState, useContext } from 'react'
import { useHTMLFetch } from '../hooks/FetchHTMLHook'
import { useJSONFetch } from '../hooks/FetchCaseHook'
import { useParams, Navigate } from 'react-router-dom'

import { nCases } from '../datas/CaseDatas'

function Case(props) {

  let subDir = window.location.origin === "https://ask0ldd.github.io" ? "/P8-Folio" : ""

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { id } = useParams();
  const [currentCode, setcurrentCode] = useState(0)
  const [url, setUrl] = useState()

  if((id > nCases)||(id < 1)) return (<Navigate to={subDir + "/"} replace={true} />)

  // PASSING A CALLBACK TO ALLOW THE HOOK TO UPDATE THE STATE WHICH WILL TRIGGER A NEW HOOK
  const [isJSONLoading, JSONObject, setJSONObject, isJSONError] = useJSONFetch(window.location.origin + subDir + '/cases/case'+id+'.json', setUrl)
  const [isLoading, fetchedData, setFetchedData, isfetchError] = useHTMLFetch(window.location.origin + subDir + url)
  
  const next = async () => {
    try{
        let current
        if(currentCode+1>=JSONObject.highlights.length){
          current = 0
          setcurrentCode(0)
        }else{ 
          current = currentCode+1
          setcurrentCode(current)
        }
        setUrl(JSONObject.highlights[current].file)
        document.querySelector('.codeContainer').scrollTo(0, 0)
    }catch(error){
        console.error(error)
    }
  }

  const prev = async () => {
    try{
        let current
        if(currentCode-1<0){
          current = JSONObject.highlights.length-1
          setcurrentCode(current)
        }else{ 
          current = currentCode-1
          setcurrentCode(current)
        }
        setUrl(JSONObject.highlights[current].file)
        document.querySelector('.codeContainer').scrollTo(0, 0)
    }catch(error){
        console.error(error)
    }
  }

  if(!JSONObject) return(
    <div className="case" style={{height:"100vh"}}>
      <Header mode='backonly' items={[['ENG / FR', '/#'], ['Design Work', '/#works'], ['Dev Case Studies', '/#caseStudies'], ['Contact Me', '/#works']]} />
    </div>)

  return (
    <div className="case">
      <Header mode='backonly' items={[['ENG / FR', '/#'], ['Design Work', '/#works'], ['Dev Case Studies', '/#caseStudies'], ['Contact Me', '/#works']]} />
      <main>
        <section className='sectionSummary'>
        {JSONObject && <CaseDescription summaryTags={JSONObject.tags} captureUrl={subDir + JSONObject.screenshot} bulletPoints={JSONObject.bulletpoints} github={JSONObject.github} />}
        </section>
        <section style={{ marginTop: "4rem" }} className='sectionCode'>
          <div className='codenDescContainer'>
            {fetchedData && <div style={{ overflowY: "scroll" }} className='codeContainer' dangerouslySetInnerHTML={{ __html: fetchedData }}>
            </div>}
            <div className='descContainer' >
              <div className='description'>
                <div className='descTitleContainer'>
                  <h3 className='descTitle'>{JSONObject && JSONObject.highlights[currentCode].title}</h3>
                  <div className='arrowsContainer'>
                    <button className='arrowLeft' title="previous code snippet" onClick={prev}></button>
                    <div className='arrowsContainer_lightsep'></div>
                    <div className='arrowsContainer_darksep'></div>
                    <button className='arrowRight' title="next code snippet" onClick={next}></button>
                  </div>
                </div>
                <div className='descBody'>{JSONObject && JSONObject.highlights[currentCode].description}</div>
              </div>
              <div className='descTagsContainer'>
                {JSONObject && JSONObject.highlights[currentCode].tags.map(tag => (<div key={tag} className='descTags'>{tag}</div>))}
              </div>
            </div>
          </div>
        </section>
        <section className='caseBg'>
          <img alt="decorative banner" src={JSONObject && window.location.origin + subDir + JSONObject.banner}/>
        </section>
        <section className='sectionVerbose'>
          {JSONObject && <p className='verboseContainer' dangerouslySetInnerHTML={{ __html: JSONObject.verbose }}></p>}
        </section>
      </main>
      <footer></footer>
    </div>
  )

}

export default Case