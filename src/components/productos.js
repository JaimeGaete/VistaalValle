export const productos = [
    {
      "id" : 0,
      "nombre" : "Spa Relajante en Pareja",
      "precio" : 100,
      "categoriaId" : 1,
      "imagen" : "https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg",
      "description" : "Spa Relajante en Pareja"
    },
    {
      "id" : 1,
      "nombre" : "Actividades en una Viña para Dos",
      "precio" : 200,
      "categoriaId" :2,
      "imagen" : "https://chileestuyo.cl/wp-content/uploads/2018/04/VinaMontGrass_instagram-768x576.jpg",
      "description" : "Actividades en una Viña para Dos"
    },
    {
      "id" : 2,
      "nombre" : "Lleva tus Vinos favoritos",
      "precio" : 25,
      "categoriaId" : 3,
      "imagen" : "https://lavinoteca.vteximg.com.br/arquivos/ids/159219-1000-1000/4987_1.jpg?v=637544672699700000",
      "description" : "Lleva tus Vinos favoritos"
    }
  ]

const getProductos = new Promise((result, reject) => {
    setTimeout(() => { result(productos)}, 2000)
})

export const getItem = () => {
    return getProductos
}
  