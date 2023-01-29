import '../App.css'
import '../styles/Case.css'
import Header from '../components/Header'
import CaseTitle from '../components/CaseStudy/CaseTitle'
import CaseDescription from '../components/CaseStudy/CaseDescription'
import MenuCodeCase from '../components/MenuCodeCase'
import { useEffect, useState } from 'react'
import { useHTMLFetch } from '../hooks/FetchHTMLHook'
import { useJSONFetch } from '../hooks/FetchCaseHook'
import { useParams } from 'react-router-dom'

function Case(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { id } = useParams();

  let subDir = window.location.origin === "https://ask0ldd.github.io" ? "/P8-Folio" : ""
  const links = [[subDir + "/bluel/bluel1.webp", subDir + "/bluel/bluel1.webp"], [subDir + "/grimoire/grimoire1.webp", subDir + "/grimoire/grimoire2.webp"]]
  const githubs = ["https://github.com/ask0ldd/P3-OC-JS-Frontend", "https://github.com/ask0ldd/P7-Node-Express-Mongo"]

  const [activeCode, setActiveCode] = useState(0)
  const [isLoading, fetchedData, setFetchedData, isfetchError] = useHTMLFetch(window.location.origin + subDir + '/code/codeapi.html')
  const [isJSONLoading, JSONObject, setJSONObject, isJSONError] = useJSONFetch(window.location.origin + subDir + '/cases/case'+id+'.json')
  JSONObject ? console.log(JSONObject) : undefined

  return (
    <div className="case">
      <Header mode='backonly' items={[['ENG / FR', '/#'], ['Design Work', '/#works'], ['Dev Case Studies', '/#caseStudies'], ['Contact Me', '/#works']]} />
      <section className='sectionSummary'>
      {JSONObject && <CaseDescription summaryTags={JSONObject.tags} captureUrl={links[id - 1][0]} />}
      </section>
      <section style={{ marginTop: "4rem" }} className='sectionCode'>
        <div className='codenDescContainer'>
          {fetchedData && <div style={{ overflowY: "scroll" }} className='codeContainer' dangerouslySetInnerHTML={{ __html: fetchedData }}>
          </div>}
          <div className='descContainer' >
            <div className='description'>
              <div className='descTitleContainer'>
                <span className='descTitle'>API WRAPPER</span>
                <div className='arrowsContainer'>
                  <button className='arrowLeft'></button>
                  <div className='arrowsContainer_lightsep'></div>
                  <div className='arrowsContainer_darksep'></div>
                  <button className='arrowRight'></button>
                </div>
              </div>
              <div className='descBody'>Lorem ipsum dolor sit amet consectetur. Feugiat morbi id at venenatis aliquam congue cursus. Tellus nunc in ultricies risus hendrerit. Amet erat libero sit diam. Accumsan pellentesque diam cras semper diam enim sit. Ante malesuada a ut bibendum habitant lacus dictum quis turpis. Mattis et nascetur congue in et. Odio malesuada dolor at nunc amet odio.</div>
            </div>
            <div className='descTagsContainer'>
              <div className='descTags'>fetch</div><div className='descTags'>tokens</div><div className='descTags'>async / await</div><div className='descTags'>cookies</div>
              <div className='descTags'>request headers</div><div className='descTags'>formData</div><div className='descTags'>cookies</div><div className='descTags'>fetch</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default Case

/*
  <MenuCodeCase codeArray={['api', 'gallery', 'log']} githubLink={githubs[id - 1]} codeContainer={document.querySelector('.codeContainer')} setFetched={setFetchedData} setActiveCode={setActiveCode} />
*/