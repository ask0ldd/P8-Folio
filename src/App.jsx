import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='hero'>
        <img className='ellipse' src='/ellipse0.svg'/>
        <img className='statue' src='/statue.png'/>
        <NavBar items={['CEDRIC B-GARCIA', 'UI DESIGN', 'WEB DEV', 'ABOUT ME']} />
      </section>
      <section className='works'>
        <img src='/works.jpg'/>
      </section>
    </div>
  )
}

export default App
