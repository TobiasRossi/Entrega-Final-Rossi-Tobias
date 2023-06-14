import'./CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'

const CartWidget = () => {
    const {carrito} = useContext(CarritoContext)

    const imagenCarritoItem = 'https://cdn-icons-png.flaticon.com/512/116/116356.png'


    return (
        <div>
            <Link to='/cart'>
                <img className='imgCarrito me-2' src={imagenCarritoItem} alt="Carrito"/>
                {
                    carrito > 0 && <span>{carrito}</span>
                }
        </Link>
        </div>
    )
}

export default CartWidget
