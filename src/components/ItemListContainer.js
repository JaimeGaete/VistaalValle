import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { toast } from "react-toastify"
import { db } from './firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const {categoriaId} = useParams();

  useEffect(()=>{

    toast.info("Cargando productos...")

    const productosCollection = collection(db, "productos")

    if(categoriaId===undefined) {
      var consultaTodos = getDocs(productosCollection)
      consultaTodos
        .then((resultado) => {
          const productos = resultado.docs.map(doc=>{ 
            const productoConId = doc.data()
            productoConId.id = doc.id
            return productoConId
          } )
          setProducto(productos)
          setCargando(false)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          toast.dismiss()
        })
    }
    else {
      const queryCategoria = query(productosCollection, where("categoriaId", "==", categoriaId))
      var consultaFiltro = getDocs(queryCategoria)
        consultaFiltro
        .then((resultado) => {
          const productosFiltrados = resultado.docs.map(doc=>{ 
            const productoConId = doc.data()
            productoConId.id = doc.id
            return productoConId            
          } )
          setProducto(productosFiltrados)
          setCargando(false)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          toast.dismiss()
        })
    }
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
