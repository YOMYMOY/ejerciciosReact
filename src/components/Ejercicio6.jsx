import React, { useEffect, useState } from 'react'
import { obtenerNombres } from '../services/Ej6Service';

export default function Ejercicio6() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        obtenerNombres()
            .then(data => setPersonajes(data))
    }, [])

    return (
        <div>
            <h2 className='ej2-title'>Ejercicio 6</h2>
            <div className='lista'>
                <h4>Nombres de los personajes:</h4>
                <ul>
                    {personajes.map(personaje => <li className='li' key={personaje.id}>{personaje.name}</li>)}
                </ul>
            </div>
        </div>
    )
}
