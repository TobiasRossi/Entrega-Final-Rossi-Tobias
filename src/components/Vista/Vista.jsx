import "./Vista.css"
import { useState } from "react"

const Vista = () => {
    const [colorPagina, setColorPagina] = useState(false)
    //false=claro - true=oscuro

    const cambiarColorPagina = () => {
        setColorPagina(!colorPagina)
    }

    const estilo = colorPagina ? "paginaOscuro" : "paginaClaro"

    return (
        <div className= {estilo}>
            <button onClick={ cambiarColorPagina }> {colorPagina ? "Pasar a claro" : "Pasar a oscuro"} </button>
            <h2>Color Div</h2>
            <p>Mira como cambio de color este div!</p>
        </div>
    )
}

export default Vista
