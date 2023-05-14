const products = [
    {nombre: "Esculpidas", precio: 2000, id: 1, img: "./img/esculpidas.jpg"},
    {nombre: "Esmaltado SemiPermanente", precio: 1500, id: 2, img: "./img/esmaltado.jpg"},
    {nombre: "Kapping", precio: 1000, id: 3, img: "./img/kapping.jpg"},
   
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 2000)
    })
}