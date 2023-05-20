import "./ItemDetail.css"

const ItemDetail = ({nombre, precio, id, img}) => {
    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h3>{id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate facere recusandae eveniet consequatur nobis, odio architecto reiciendis voluptatem neque ipsum perferendis magni quas, ex quia praesentium repellendus nulla pariatur?</p>
            <img className="logoItem" src={img} alt="{nombre}"/>
        </div>
    )
}

export default ItemDetail
