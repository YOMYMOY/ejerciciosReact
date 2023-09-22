import { useState } from "react"

export default function Ejercicio5() {

    const [darkMode, setDarkMode] = useState(false);

    const lightStyles = {
        backgroundColor: '#FFF',
        color: '#000',
    };

    const darkStyles = {
        backgroundColor: '#000',
        color: '#FFF',
    };

    const currentStyles = darkMode ? darkStyles : lightStyles;

    function handleClick() {
        setDarkMode(!darkMode)
    }

    return (
        <div className="ej5" style={currentStyles}>
            <h2 className='ej2-title'>Ejercicio 5</h2>
            <button onClick={handleClick}><i className="fa-solid fa-circle-half-stroke"></i></button>
        </div>
    )
}
