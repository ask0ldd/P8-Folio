import Home from '../App';
/*import Page404 from '../pages/Page404';
import CaseStudy from '../pages/CaseStudy';
import Rental from '../pages/Rental';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const CustomRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*
                <Route path='*' element={<Page404 />} />
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<APropos />}/>
                <Route path="/case/:id" element={<CaseStudy />}/>
                */}
            </Routes>
        </Router>
    )
}

export default CustomRouter