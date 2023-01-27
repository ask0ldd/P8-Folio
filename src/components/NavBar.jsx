import '../styles/NavBar.css'
import menuIcon from '/icons/menu.svg'

const NavBar = (props) => {
return(
    <nav>
        <ul>
            {props.items.map(item => <li className='textMenuItems' key={item[0]}><a href={item[1]}>{item[0]}</a></li>)}
            <li className='menuItem'><img src={menuIcon}/></li>
        </ul>
    </nav>
)
}

export default NavBar