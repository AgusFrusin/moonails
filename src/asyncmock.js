const productos = [
    {nombre: "Esculpidas", precio: 2000, id: "1", img: "./img/esculpidas.jpg", idCat:"1"},
    {nombre: "Esmaltado SemiPermanente", precio: 1500, id: "2", img: "./img/esmaltado.jpg", idCat:"1"},
    {nombre: "Kapping", precio: 1000, id: "3", img: "./img/kapping.jpg", idCat:"2"},
   
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}