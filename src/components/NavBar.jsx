import '../styles/NavBar.css'
import menuIcon from '/icons/menu.svg'
import backArrow from '/icons/backarrow.svg'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

return(
    <nav>
        <ul>
            {props.mode==='fullmenu' && props.items.map(item => <li className='textMenuItems' key={item[0]}><a href={item[1]}>{item[0]}</a></li>)}
            {props.mode==='backonly' && <Link to={'..'}><div><img className='backArrow' alt="back" src={backArrow}/>BACK</div></Link>}
            {props.mode==='fullmenu' && <li className='menuItem'><img src={menuIcon} alt="menu"/></li> /* regroup */}
        </ul>
    </nav>
)
}

export default NavBar