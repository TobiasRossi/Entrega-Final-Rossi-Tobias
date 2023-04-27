import { useState } from "react"

const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false)

    const handleMessage = () => {
        setMensaje(!mensaje)
    }

    return (
        <div>
            <button onClick={handleMessage}> Mostrar Mensaje </button>
            {mensaje && <h2>Aparezco</h2>}
        </div>
    )
}

export default Mensaje
