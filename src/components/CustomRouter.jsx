import Home from '../App';
import Case from '../pages/Case';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const CustomRouter = () => {
    return (
        <Router basename="/P8-Folio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case/:id" element={<Case />}/>
                <Route path='*' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter