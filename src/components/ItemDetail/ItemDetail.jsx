import "./ItemDetail.css"
import ItemCount from "../itemCount/itemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"

const ItemDetail = ({nombre, id, precio, img, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarProducto} = useContext(CarritoContext)

    const cantidadHandler = (cantidad) => {
        setAgregarCantidad(cantidad)

        const item = {id, nombre, precio}
        agregarProducto(item, cantidad)
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <p className="itemInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate facere recusandae eveniet consequatur nobis, odio architecto reiciendis voluptatem neque ipsum perferendis magni quas, ex quia praesentium repellendus nulla pariatur?</p>
            <img className="logoItem" src={img} alt="{nombre}"/>
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Ir a pagar </Link>) : (<ItemCount inicial={1} stock={stock} agregarAlCarrito={cantidadHandler}/>)
            }
        </div>
    )
}

export default ItemDetail
