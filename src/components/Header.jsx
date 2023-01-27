import '../styles/Header.css'
import NavBar from './NavBar'
import dribbble from '/icons/dribbble.svg'
import github from '/icons/github.svg'
import linkedin from '/icons/linkedin.svg'

const Header = (props) => {
return(
    <header>
        <div className='headerBody'>
            <NavBar items={props.items}/>
            <ul className='socialItems'>
                <li><img src={dribbble}/></li>
                <li><a href='https://github.com/ask0ldd'><img src={github}/></a></li>
                <li><img src={linkedin}/></li>
            </ul>
        </div>
    </header>
)
}

export default Header