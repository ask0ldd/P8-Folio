import '../styles/NavBar.css'

const NavBar = (props) => {
return(
    <nav>
        <ul>
            {props.items.map(item => <li><a key={item[0]} href={item[1]}>{item[0]}</a></li>)}
        </ul>
    </nav>
)
}

export default NavBar