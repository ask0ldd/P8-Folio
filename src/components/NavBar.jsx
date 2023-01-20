import '../styles/NavBar.css'

const NavBar = (props) => {
return(
    <nav>
        <ul>
            {props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </nav>
)
}

export default NavBar