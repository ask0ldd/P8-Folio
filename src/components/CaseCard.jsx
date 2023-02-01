import '../styles/CaseCard.css'
import arrow from '/icons/arrow.svg'
import Tag from './Tag'

import { Link } from 'react-router-dom'

const CaseCard = ({caseInfos, nCases}) => {
return(
<div className="caseContainer">
    <button className='viewCaseButton' title="decorative button"><img alt="arrow" src={arrow}/></button>
    <Link aria-label='Link to the full case study' to={caseInfos.url}><button className='viewCaseButtonGlass' title='go to case study'></button></Link>
    <span className='digit'>{caseInfos.digit}</span>
    <span className='caseTitle'>{caseInfos.title}</span>
    <ul>
        {caseInfos.bulletpoints.map((bp, index) => <li key={'bp'+index+caseInfos.digit}>{bp}</li>)}
    </ul>
    <div className='tagContainer'>
        <Tag text={caseInfos.tags[0]} />
        <Tag text={caseInfos.tags[1]} />
        <Tag text={caseInfos.tags[2]} />
    </div>
    <Link aria-label='Link to the full case study' to={caseInfos.url} state={{ nCases: nCases }}><div className='textViewCaseButton'>Check out this project</div></Link>
</div>)}

export default CaseCard