import React from 'react'

export default function Main() {
    return (
        <div className='main'>
            <h2>Ejercicios:</h2>
            <ol className='listaMain'>
                <li>Crear un proyecto compuesto de un solo Functional Component. En dicho componente mostrar al menos dos datos, como por ejemplo titulo y subtitulo. El componente debe ser llamado desde App, a continuación, se propondrá la jerarquía del árbol de componentes y de como es el llamado desde index.js
                    <ul>
                        <li>Index.js
                            <ul>
                                <li>App
                                    <ul>
                                        <li>Ejemplo</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Crear un proyecto compuesto por tres componentes bajo la misma jerarquía. Crear un Navbar, Main y Footer.
                    <ul>
                        <li>Index.js
                            <ul>
                                <li>App
                                    <ul>
                                        <li>Navbar</li>
                                        <li>Main</li>
                                        <li>Footer</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    Necesitamos hacer que Footer, Main y Navbar muestren al menos un dato, de la misma manera que el ejercicio anterior.</li>
                <li>Crear un Componente Main el cual llame dos veces a un mismo componente, es decir, que Main anide a Hijo e Hijo.
                    <ul>
                        <li>Index.js
                            <ul>
                                <li>App
                                    <ul>
                                        <li>Main
                                            <ul>
                                                <li>Hijo</li>
                                                <li>Hijo</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    Al primer Componente anidado pasarle como props el nombre Chiquito y al segundo el nombre Filomena. Desde los componentes Hijos atrapar los valores mediante las props.</li>
                <li>Crear un proyecto compuesto por 4 componentes bajo la siguiente jerarquía.
                    <ul>
                        <li>Index.js
                            <ul>
                                <li>App
                                    <ul>
                                        <li>Navbar</li>
                                        <li>Main1 o Main2</li>
                                        <li>Footer</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    Al hacer click sobre las dos posibles opciones en el NavBar, se deberá cambiar entre Main1 y Main2 dependiendo de la navegación. Para lograrlo se deberá instalar y usar React Router Dom.</li>
                <li>Crear un proyecto compuesto de un solo componente y hacer uso de useState y mostrar el state del componente.
                Se podrá crear un contador de clicks o crear un input que mediante onChange cambie el valor del state. Cualquiera de las dos opciones, son validas para este ejercicio.</li>
                <li>Crear un proyecto compuesto de un solo componente y un servicio, quien deberá ser capaz de llamar desde el servicio, mediante la funcionalidad Fetch, a la API de Rick and Morty ( https://rickandmortyapi.com/api/character ).
                Una vez llamado los datos desde el servicio, hacer uso de useEffect en el componente creado, deberá mostrar una lista compuesta de los nombres de los 20 primeros personajes.</li>
            </ol>
        </div>
    )
}
