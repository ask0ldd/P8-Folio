import '../styles/Header.css'
import NavBar from './NavBar'

const Header = (props) => {
return(
    <header>
        <div className='headerBody'>
            <NavBar items={props.items}/>
            <ul className='socialItems'>
                <li><img src="/icons/dribbble.svg"/></li>
                <li><a href='https://github.com/ask0ldd'><img src="/icons/github.svg"/></a></li>
                <li><img src="/icons/linkedin.svg"/></li>
            </ul>
        </div>
    </header>
)
}

export default Header