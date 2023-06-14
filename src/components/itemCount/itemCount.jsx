import "./itemCount.css"
import { useState } from "react"


const ItemCount = ({inicial, stock, agregarAlCarrito}) => {
    const [contador, setContador] = useState(inicial)

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

    return (
        <>
            <div className="DivContador">
                <button onClick={incrementar}> + </button>
                <span> Cantidad: {contador} </span>
                <button onClick={decrementar}> - </button>
            </div>
            <button onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
