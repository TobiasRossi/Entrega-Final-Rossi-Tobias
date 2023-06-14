import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import { useParams } from "react-router-dom"
import { db } from '../../Services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const {categoria} = useParams()

    useEffect( () =>{
        const misProductos = categoria ? query(collection(db, "inventory"), where("categoria", "==", categoria)) : collection(db, "inventory")
        
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(nuevosProductos)
            })
            .catch(error => console.log(error))
    },[categoria])

    return (
        <div className='divTienda'>
            <h2>Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
