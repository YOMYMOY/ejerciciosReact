import { Link } from 'react-router-dom'

export default function Ej2Navbar() {

    const title = "Ejercicio 2";

    return (
        <div className='ej2-navbar'>
            <h2 className='ej2-title'>{title}</h2>
            <Link to={'/ejercicio-1'}>Ejercicio 1</Link>
            <Link to={'/ejercicio-2'}>Ejercicio 2</Link>
            <Link to={'/ejercicio-3'}>Ejercicio 3</Link>
            <Link to={'/ejercicio-4'}>Ejercicio 4</Link>
            <Link to={'/ejercicio-5'}>Ejercicio 5</Link>
            <Link to={'/ejercicio-6'}>Ejercicio 6</Link>
        </div>
    )
}
