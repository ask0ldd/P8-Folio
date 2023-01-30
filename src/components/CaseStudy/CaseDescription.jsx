import '../../styles/CaseDescription.css'
import CaseTitle from './CaseTitle'

const CaseDescription = (props) => {
return(
<div className='summaryContainer'>
    <div role="img" aria-label="Sophie Bluel website capture screen" style={{backgroundImage:`url(${props.captureUrl})`}} className='mainSiteCapture' />
    <div className='halfSummaryContainer'>
    <CaseTitle title="NATURE DU BRIEF" />
    <div className='bulletPointsContainer'>
        <ul>
            {props.bulletPoints.map(bp => (<li key={bp} dangerouslySetInnerHTML={{ __html: bp }}></li>))}
        </ul>
    </div>
    <div className="greenTagsContainer">
        {props.summaryTags.map((tag, index) => (<div key={'tagsum' + index} className='greenTag'>{tag}</div>))}
    </div>
    <div className='genericCode'>
        <button>Github</button>
    </div>
    </div>
</div>
)}

export default CaseDescription