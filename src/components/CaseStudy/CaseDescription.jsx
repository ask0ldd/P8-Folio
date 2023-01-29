import '../../styles/CaseDescription.css'
import CaseTitle from './CaseTitle'

const CaseDescription = (props) => {
return(
<div className='summaryContainer'>
    <div role="img" aria-label="Sophie Bluel website capture screen" style={{backgroundImage:`url(${props.captureUrl})`}} className='mainSiteCapture' />
    <div className='halfSummaryContainer'>
    <CaseTitle title="BRIEF KEYPOINTS" />
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
    <div className='genericCode'>
        <button>Github</button>
    </div>
    </div>
</div>
)}

export default CaseDescription