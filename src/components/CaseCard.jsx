import '../styles/CaseCard.css'
import arrow from '/icons/arrow.svg'
import Tag from './Tag'

import { NavLink, Link } from 'react-router-dom'

const CaseCard = ({caseInfos}) => {
return(
<div className="caseContainer">
    <button className='viewCaseButton' title="decorative element Bluel"><img alt="arrow" src={arrow}/></button>
    <Link aria-label='Look at Sophie Bluel case study' to={caseInfos.url}><button className='viewCaseButtonGlass' title="go to case 1"></button></Link>
    <span className='digit'>{caseInfos.digit}</span>
    <span className='caseTitle'>{caseInfos.title}</span>
    <ul>
        {caseInfos.bulletpoints.map(bp => <li>{bp}</li>)}
    </ul>
    <div className='tagContainer'>
        <Tag text={caseInfos.tags[0]} />
        <Tag text={caseInfos.tags[1]} />
        <Tag text={caseInfos.tags[2]} />
    </div>
    <Link aria-label='Look at Sophie Bluel case study' to={caseInfos.url}><div className='textViewCaseButton'>Check out this project</div></Link>
</div>)}

export default CaseCard

/* 
button title long
aria-label
button title round
digit
casetitle
bulletpoints
tags
*/