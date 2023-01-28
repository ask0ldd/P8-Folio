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
                <li><a title="dribbble link" href='https://dribbble.com/C_DeSoriac'><img src={dribbble} alt="dribbble icon"/></a></li>
                <li><a title="github link" href='https://github.com/ask0ldd'><img src={github} alt="github icon"/></a></li>
                <li><img src={linkedin} alt="linkedin icon"/></li>
            </ul>
        </div>
    </header>
)
}

export default Header