import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    if(totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Seguir Comprando</Link>
            </>
        )
    }

    return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h3>Cantidad Total: {totalCantidad}</h3>
        <h3>Total: ${total}</h3>
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
    )
}

export default Cart
