import'./CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = 'https://cdn-icons-png.flaticon.com/512/3394/3394009.png'
    return (
        <div>
            <img className='imgCarrito' src={imagenCarrito} alt="Carrito"/>
            <strong>1</strong>
        </div>
    )
}

export default CartWidget
