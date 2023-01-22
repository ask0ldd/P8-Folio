import '../App.css'
import '../styles/Case.css'
import NavBar from '../components/NavBar'
import CaseTitle from '../components/CaseTitle'

function Case(props) {

  return (
    <div className="case">
        <section className='summaryBody'>
            <NavBar items={[['ENG / FR', '#'], ['Design Work','../#works'], ['Dev Case Studies','../#caseStudies'], ['Contact Me','../#works']]} />
            <div className='summaryContainer'>
                <img src="/bluel/bluel1.jpg" className='mainSiteCapture'/>
                <div className='halfSummaryContainer'>
                  <CaseTitle title="details of the assignment"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Case