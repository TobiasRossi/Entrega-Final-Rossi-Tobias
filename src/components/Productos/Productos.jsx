import './Productos.css'
import { useState, useEffect } from 'react'
import { getDocs, collection, query, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../Services/config'

const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect( () => {
        const misProductos = query(collection(db, "inventory"))

        getDocs(misProductos)
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
    },[productos])

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "inventory", producto.id)
        const nuevoStock = producto.stock -1

        await updateDoc(productoRef, {stock: nuevoStock})
    }

    return (
        <>
            <h2>Productos</h2>
            <div className='container-productos'>
                {
                    productos.map((producto) => (
                        <div className='card-producto' key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                            <p>Stock disponible: {producto.stock}</p>
                            <button onClick={() => descontarStock(producto)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Productos
