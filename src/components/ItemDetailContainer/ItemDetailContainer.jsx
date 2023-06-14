import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../Services/config"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {id} = useParams()

    useEffect( () => {
        const nuevoDoc = doc(db,"productos", id)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevoProducto = {id:res.id, ...data}
                setProducto(nuevoProducto)
            })
            .catch(error => console.log(error))
    },[id])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer
