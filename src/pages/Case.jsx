import '../App.css'
import '../styles/Case.css'
import NavBar from '../components/NavBar'

function Case(props) {

  return (
    <div className="case">
        <section className='caseBody'>
            <NavBar items={[['ENG / FR', '#'], ['Design Work','../#works'], ['Dev Case Studies','../#caseStudies'], ['Contact Me','../#works']]} />
            <div className='caseBlock'>
                <div className='halfCaseBlock'>
                    <img src="/bluel/bluel1.jpg"/>
                </div>
                <div className='halfCaseBlock'></div>
            </div>
        </section>
    </div>
  )
}

export default Case