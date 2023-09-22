import { Routes, Route } from 'react-router-dom'
import Ejercicio1 from './Ejercicio1'
import Ejercicio2 from './Ejercicio2'
import Ejercicio3 from './Ejercicio3'
import Ejercicio4 from './Ejercicio4'
import Ejercicio5 from './Ejercicio5'
import Ejercicio6 from './Ejercicio6'
import Main from './Main'

export default function Home() {
    return (
        <div className='home'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/ejercicio-1' element={<Ejercicio1 />} />
                <Route path='/ejercicio-2' element={<Ejercicio2 />} />
                <Route path='/ejercicio-3' element={<Ejercicio3 />} />
                <Route path='/ejercicio-4/*' element={<Ejercicio4 />} />  
                <Route path='/ejercicio-5' element={<Ejercicio5 />} />
                <Route path='/ejercicio-6' element={<Ejercicio6 />} />
            </Routes>
        </div>
    )
}
