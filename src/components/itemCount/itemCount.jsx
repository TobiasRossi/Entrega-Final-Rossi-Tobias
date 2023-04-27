import "./itemCount.css"
import { useState } from "react"


const ItemCount = () => {
    const [contador, setContador] = useState(1)

    let stock = 8

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="DivContador">
            <button onClick={incrementar}> + </button>
            <p> Contador: {contador}</p>
            <button onClick={decrementar}> - </button>
        </div>
    )
}

export default ItemCount
