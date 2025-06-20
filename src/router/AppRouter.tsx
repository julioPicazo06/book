import { Menu } from "components/GeneralMenu"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

export const AppRoutes : React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:param" element={<Menu/>}/>
                <Route path="/" element={<Menu/>}/>

                <Route path="/home/:param" element={<Menu/>}/>
                
            </Routes>
        </Router>
    )
}