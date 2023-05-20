
import {useState, useEffect} from 'react'
import { getProductos, getPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const {categoria} = useParams()

    useEffect( () => {

        const funcionProductos = categoria ? getPorCategoria : getProductos

        funcionProductos(categoria)
            .then(answer => setProductos(answer))
            .catch(error => console.error(error))

    }, [categoria])
    return (
        <div className='divTienda'>
            <h2>Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
