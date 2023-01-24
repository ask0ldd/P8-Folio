import '../styles/Header.css'
import NavBar from './NavBar'

const Header = (props) => {
return(
    <header>
        <div className='headerBody'>
            <NavBar items={props.items}/>
            <div className='socialItems'>github linkedin</div>
        </div>
    </header>
)
}

export default Header