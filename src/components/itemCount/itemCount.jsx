import "./itemCount.css"
import { useState, useEffect } from "react"


const ItemCount = ({inicial, stock}) => {
    const [contador, setContador] = useState(inicial)
    const [colorMinimo, setColorMinimo] = useState("white")
    const [colorMaximo, setColorMaximo] = useState("white")


    useEffect(() => {
        if (contador === inicial) {
            setColorMinimo("red")
        } else if (contador != inicial) {
            setColorMinimo("gainsboro")
        }
    }, [contador])

    useEffect(() => {
        if (contador === stock) {
            setColorMaximo("red")
        } else if (contador != stock) {
            setColorMaximo("gainsboro")
        }
    }, [contador])

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Se ha agregado ${contador} item al carrito`)
    }

    return (
        <div className="DivContador">
            <button id="maximo" onClick={incrementar} style={{backgroundColor: colorMaximo}} > + </button>
            <span> Cantidad: {contador} </span>
            <button id="minimo" onClick={decrementar} style={{backgroundColor: colorMinimo}}> - </button>
            <br /><br />
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
