import { Link } from 'react-router-dom'
import '../styles/MenuCodeCase.css'


const MenuCodeCase = (props) => {

    let add
    add = window.location.origin === "https://ask0ldd.github.io" ? "/P8-Folio" : ""

    const codeArray = ['api', 'gallery', 'log']
    const codeContainer = document.querySelector('.codeContainer')
    const menuCodeContainer = document.querySelector('.menuCodeContainer')

    const test = async (id) => {
        try{
            const response = await fetch(window.location.origin + add + '/code/code'+props.codeArray[id]+'.html')
            const data = await response.text()
            props.setFetched(data)
            props.setActiveCode(id)
            props.codeContainer.scrollTo(0, 0)
            for (const child of menuCodeContainer.children) {
                child.className=""
            }
            menuCodeContainer.children[id].className="active"
        }catch(error){
            console.error(error)
        }
        }


    return(<div className="menuCodeContainer">
            <button className='active' onClick={() => test(0)}>API Wrapper</button>
            <button onClick={() => test(1)}>Gallery</button>
            <button onClick={() => test(2)}>Gallery Management</button>
            <button>Login</button>
            <a href={props.githubLink}><button>Github</button></a>
        </div>)
}

export default MenuCodeCase