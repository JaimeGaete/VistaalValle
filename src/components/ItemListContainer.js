import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import { toast } from "react-toastify"

export const catalogo = [
  {
    "id" : 0,
    "nombre" : "Spa Relajante en Pareja",
    "precio" : 100,
    "categoriaId" : "spa",
    "imagen" : "https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg",
    "description" : "Spa Relajante en Pareja"
  },
  {
    "id" : 1,
    "nombre" : "Actividades en una Viña para Dos",
    "precio" : 200,
    "categoriaId" : "vinas",
    "imagen" : "https://chileestuyo.cl/wp-content/uploads/2018/04/VinaMontGrass_instagram-768x576.jpg",
    "description" : "Actividades en una Viña para Dos"
  },
  {
    "id" : 2,
    "nombre" : "Lleva tus Vinos favoritos",
    "precio" : 25,
    "categoriaId" : "vinos",
    "imagen" : "https://lavinoteca.vteximg.com.br/arquivos/ids/159219-1000-1000/4987_1.jpg?v=637544672699700000",
    "description" : "Lleva tus Vinos favoritos"
  }
];

const ItemListContainer = () => {

  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const {categoriaId} = useParams();

  useEffect(()=>{

    toast.info("Cargando productos...")

    const pedido = new Promise ((res)=>{
      setTimeout(()=>{
      res(catalogo)
      },500)
    })
    .then(()=>{
      if(categoriaId===undefined){
        setCargando(false)
        setProducto(catalogo)
        toast.dismiss()
        toast.success("Productos Cargados")
      } else {
        toast.info("Cargando productos...")
        setProducto(catalogo.filter(categoria=>categoria.categoriaId===categoriaId))
        setCargando(false)
        toast.dismiss()
        toast.success("Productos Cargados")
      }
    })
  },[categoriaId])

  if(cargando){
      return <p>Cargando...</p>;
  }else{
    return(
    <ItemList producto={producto}/>
    )
  }
}

  export default ItemListContainer
