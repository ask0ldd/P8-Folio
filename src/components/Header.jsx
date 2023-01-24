import '../styles/Header.css'
import NavBar from './NavBar'

const Header = (props) => {
return(
    <header>
        <div className='headerBody'>
            <NavBar items={props.items}/>
            <ul className='socialItems'><li>github</li><li>linkedin</li></ul>
        </div>
    </header>
)
}

export default Header