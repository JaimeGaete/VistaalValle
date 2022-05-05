import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify"

export const catalogo = [
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
];


const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{

    toast.info("Cargando detalle del producto ...")

     const detalleProducto = catalogo.filter((producto)=>{
      return producto.id===id
    })[0]

    const pedidoDeDetalle = new Promise ((res)=>{
      setTimeout(()=>{
      res(detalleProducto)
      },2000)
    })

      .then(()=>{
        setCargando(false)
        setProducto(detalleProducto)
        toast.dismiss()
        toast.success("Detalle de Producto Cargado")
      })
  })

  if(cargando){
    return <p>Cargando...</p>;
  }else{
    return (
      <>
        <ItemDetail key={producto.id} producto={producto}/>
      </>
    )
  }
}

export default ItemDetailContainer

