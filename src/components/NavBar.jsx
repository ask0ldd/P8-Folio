import '../styles/NavBar.css'

const NavBar = (props) => {
return(
    <nav>
        <ul>
            {props.items.map(item => <a key={item[0]} href={item[1]}><li>{item[0]}</li></a>)}
        </ul>
    </nav>
)
}

export default NavBar