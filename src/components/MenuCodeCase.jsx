import '../styles/MenuCodeCase.css'


const MenuCodeCase = (props) => {


    const codeArray = ['api', 'gallery', 'log']
    const codeContainer = document.querySelector('.codeContainer')
    const menuCodeContainer = document.querySelector('.menuCodeContainer')

    const test = async (id) => {
        try{
            const response = await fetch(window.location.origin+'/code/code'+props.codeArray[id]+'.html')
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
            <button>Gallery Management</button>
            <button onClick={() => test(2)}>Login</button>
        </div>)
}

export default MenuCodeCase