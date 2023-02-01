import '../../styles/CaseDescription.css'
import CaseTitle from './CaseTitle'
import github from '/icons/github.svg'

const CaseDescription = (props) => {
return(
<div className='summaryContainer'>
    <div role="img" aria-label="Sophie Bluel website capture screen" style={{backgroundImage:`url(${props.captureUrl})`}} className='mainSiteCapture' />
    <div className='halfSummaryContainer'>
    <CaseTitle title="NATURE DU BRIEF" />
    <div className='bulletPointsContainer'>
        <ul>
            {props.bulletPoints.map((bp, index) => (<li key={'bp' + index} dangerouslySetInnerHTML={{ __html: bp }}></li>))}
        </ul>
    </div>
    <div className="greenTagsContainer">
        {props.summaryTags.map((tag, index) => (<div key={'tagsum' + index} className='greenTag'>{tag}</div>))}
    </div>
    <div className='genericCode'>
        <a title="github link to this project" href={props.github}><button><span>Consulter sur Github</span><img alt='github icon' src={github}/></button></a>
    </div>
    </div>
</div>
)}

export default CaseDescription