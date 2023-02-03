import '../styles/CaseCard.css'
import arrow from '/icons/arrow.svg'
import Tag from './Tag'

import { Link } from 'react-router-dom'

const CaseCard = ({caseInfos, animation}) => {
return(
<article className="caseContainer">
    <button className='viewCaseButton' title="decorative button"><img alt="arrow" src={arrow}/><div className={`btnHL ${animation?.btnHL}`}></div></button>
    <Link aria-label='Link to the full case study' to={caseInfos?.url}><button className='viewCaseButtonGlass' title='go to case study'></button></Link>
    <span className='digit'>{caseInfos?.digit}</span>
    <h3 className={`caseTitle ${animation?.title}`}>{caseInfos?.title}</h3>
    <ul className={animation?.bps}>
        {caseInfos.bulletpoints.map((bp, index) => <li key={'bp' + index+caseInfos?.digit}>{bp}</li>)}
    </ul>
    <div className={`tagContainer ${animation?.tags}`}>
        <Tag text={caseInfos.tags[0]} />
        <Tag text={caseInfos.tags[1]} />
        <Tag text={caseInfos.tags[2]} />
    </div>
    <Link aria-label='Link to the full case study' to={caseInfos.url} /*state={{ nCases: nCases }}*/><div className='textViewCaseButton'>Check out this project</div></Link>
</article>)}

export default CaseCard