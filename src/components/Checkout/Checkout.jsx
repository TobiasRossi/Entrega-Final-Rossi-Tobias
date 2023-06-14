import { useContext, useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../Services/config"
import { collection, addDoc } from "firebase/firestore"

const Chekout = () => {
  const {carrito, vaciarCarrito} = useContext(CarritoContext)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirm] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  const submitHandler = (event) => {
    event.preventDefault()
    if(!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por favor complete los campos")
      return
    }

    if(email !== emailConfirm) {
      setError("Los emails no coinciden")
      return
    }

    const orden = {
      items: carrito.map(producto => ({
        id:producto.item.id,
        nombre:producto.item.nombre,
        cantidad:producto.cantidad,
      })),
      total: carrito.reduce((total,producto) => total + producto.item.precio * producto.cantidad,0),
      nombre,
      apellido,
      telefono,
      email
    }

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef)=> {
        setOrdenId(docRef.id)
        vaciarCarrito()
      })
      .catch((error) => {
        console.log("Error al crear la orden", error)
        setError("Se produjo un error al crear la orden, vuelva a intentar mas tarde")
      })
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={submitHandler}>
        {carrito.map(producto => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre} x {producto.cantidad}</p>
            <p>Precio: ${producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <hr />
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input type="email" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Confirmar Email</label>
          <input type="text" value={emailConfirm} onChange={(e)=> setEmailConfirm(e.target.value)}/>
        </div>

        {
          error && <p className="mensajeError">{error}</p>
        }

        <button type="submit">Finalizar Orden</button>

      {
        ordenId && (
          <strong>Gracias por confiar en La LLama Loca!!! segui el envio con este codigo de compra: {ordenId}</strong>
        )
      }

      </form>
    </div>
  )
}

export default Chekout