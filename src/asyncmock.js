const productos = [
    {nombre:"Asus Prime Z690M", categoria:"1", precio:0, id:"1", img:"../img/motherboards/Asus_Prime_Z690M.png"},
    {nombre:"B560M AORUS PRO AX", categoria:"1", precio:0, id:"2", img:"../img/motherboards/B560M AORUS PRO AX.jpg"},
    {nombre:"Asus TUF Gaming B660M-PLUS", categoria:"1", precio:0, id:"3", img:"../img/motherboards/Asus_TUF_Gaming_B660M-PLUS.jpeg"},
    {nombre:"Asus Rog Strix Nvidia GeForce RTX 4080", categoria:"2", precio:0, id:"4", img:"../img/placasdevideo/Asus_Rog_Strix_Nvidia_GeForce_RTX_4080.jpg"},
    {nombre:"Asus TUF Nvidia GeForce RTX 4070TI", categoria:"2", precio:0, id:"5", img:"../img/placasdevideo/Asus_TUF_Nvidia_GeForce_RTX_4070TI.jpg"},
    {nombre:"SAPPHIRE RADEON RX 6750 XT", categoria:"2", precio:0, id:"6", img:"../img/placasdevideo/SAPPHIRE_RADEON_RX_6750_XT.jpg"},
    {nombre:"Intel Core i5 11600KF 4.9GHz", categoria:"3", precio:0, id:"7", img:"../img/procesadores/Intel_Core_i5_11600KF_4.9GHz.jpg"},
    {nombre:"AMD Ryzen 9 7900X 5.6GHz", categoria:"3", precio:0, id:"8", img:"../img/procesadores/AMD_Ryzen_9_7900X_5.6GHz.png"},
    {nombre:"AMD Ryzen 5 7600X 5.3GHz", categoria:"3", precio:0, id:"9", img:"../img/procesadores/AMD_Ryzen_5_7600X_5.3GHz.jpg"},
    {nombre:"Cooler Master 850W 80 Plus Gold", categoria:"4", precio:0, id:"10", img:"../img/fuentes/Cooler_Master_850W_80_Plus_Gold.jpg"},
    {nombre:"Thermaltake Smart Rgb 700W 80 Plus White", categoria:"4", precio:0, id:"11", img:"../img/fuentes/Thermaltake_Smart_Rgb_700W_80_Plus_White.jpeg"},
    {nombre:"Corsair CV650 650W 80 Plus Bronze", categoria:"4", precio:0, id:"12", img:"../img/fuentes/Corsair_CV650_650W_80_Plus_Bronze.jpg"}
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        }, 200)
    })
}

export const getPorCategoria = (categoria) =>{
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.categoria === categoria)
            resolve(productosCategoria)
        }, 200)
    })
}