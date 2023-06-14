import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='tituloProducto'>{nombre}</h3>
            <p className='precioProducto'>${precio}</p>
            <Link to={`Item/${id}`} className='btnDetalles'>Detalles</Link>
        </div>
    )
}

export default Item
