import'./CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = 'https://cdn-icons-png.flaticon.com/512/116/116356.png'
    return (
        <div>
            <img className='imgCarrito me-2' src={imagenCarrito} alt="Carrito"/>
            <strong>1</strong>
        </div>
    )
}

export default CartWidget
