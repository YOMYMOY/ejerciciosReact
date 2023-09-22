import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='link' to={'/ejercicio-1'}>Ejercicio 1</Link>
      <Link className='link' to={'/ejercicio-2'}>Ejercicio 2</Link>
      <Link className='link' to={'/ejercicio-3'}>Ejercicio 3</Link>
      <Link className='link' to={'/ejercicio-4'}>Ejercicio 4</Link>
      <Link className='link' to={'/ejercicio-5'}>Ejercicio 5</Link>
      <Link className='link' to={'/ejercicio-6'}>Ejercicio 6</Link>
    </div>
  )
}
