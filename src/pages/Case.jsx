import '../App.css'
import '../styles/Case.css'
import Header from '../components/Header'
import CaseDescription from '../components/CaseStudy/CaseDescription'
import { useEffect, useState } from 'react'
import { useHTMLFetch } from '../hooks/FetchHTMLHook'
import { useJSONFetch } from '../hooks/FetchCaseHook'
import { useParams } from 'react-router-dom'

function Case(props) {

  let subDir = window.location.origin === "https://ask0ldd.github.io" ? "/P8-Folio" : ""

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { id } = useParams();
  const [currentCode, setcurrentCode] = useState(0)
  const [url, setUrl] = useState()

  // PASSING A CALLBACK TO ALLOW THE HOOK TO UPDATE THE STATE WHICH WILL TRIGGER A NEW HOOK
  const [isJSONLoading, JSONObject, setJSONObject, isJSONError] = useJSONFetch(window.location.origin + subDir + '/cases/case'+id+'.json', setUrl)
  const [isLoading, fetchedData, setFetchedData, isfetchError] = useHTMLFetch(subDir + url)
  
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
        setUrl(window.location.origin + subDir + JSONObject.highlights[current].file)
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
        setUrl(window.location.origin + subDir + JSONObject.highlights[current].file)
        document.querySelector('.codeContainer').scrollTo(0, 0)
    }catch(error){
        console.error(error)
    }
  }

  

  return (
    <div className="case">
      <Header mode='backonly' items={[['ENG / FR', '/#'], ['Design Work', '/#works'], ['Dev Case Studies', '/#caseStudies'], ['Contact Me', '/#works']]} />
      <section className='sectionSummary'>
      {JSONObject && <CaseDescription summaryTags={JSONObject.tags} captureUrl={subDir + JSONObject.screenshot} bulletPoints={JSONObject.bulletpoints}/>}
      </section>
      <section style={{ marginTop: "4rem" }} className='sectionCode'>
        <div className='codenDescContainer'>
          {fetchedData && <div style={{ overflowY: "scroll" }} className='codeContainer' dangerouslySetInnerHTML={{ __html: fetchedData }}>
          </div>}
          <div className='descContainer' >
            <div className='description'>
              <div className='descTitleContainer'>
                <span className='descTitle'>{JSONObject && JSONObject.highlights[currentCode].title}</span>
                <div className='arrowsContainer'>
                  <button className='arrowLeft' onClick={prev}></button>
                  <div className='arrowsContainer_lightsep'></div>
                  <div className='arrowsContainer_darksep'></div>
                  <button className='arrowRight' onClick={next}></button>
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
    </div>
  )

}

export default Case