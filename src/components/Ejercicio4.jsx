import Ej4Main1 from "./Ej4Main1"
import Ej4Main2 from "./Ej4Main2"
import Ej4Navbar from "./ej4Navbar"
import { Outlet, Route, Routes } from 'react-router-dom'

export default function Ejercicio4() {
    return (
        <div className="ej2">
            <Ej4Navbar />
            <div className="ej2-main">
                <Routes>
                    <Route path="ej4Main-1" element={<Ej4Main1 />} />
                    <Route path="ej4Main-2" element={<Ej4Main2 />} />
                </Routes>
            </div>
            <Ej4Footer />
        </div>
    )
}

function Ej4Footer() {
    return (
        <footer className="ej2-footer">
            <code>Este es el footer del Ejercicio 4</code>
        </footer>
    )
}