import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { toast } from "react-toastify"
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const ItemListContainer = () => {

  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const {categoriaId} = useParams();

  useEffect(()=>{

    toast.info("Cargando productos...")

    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado) => {
        const productos = resultado.docs.map(doc=>{ 
          console.log(doc.data())
          return doc.data()
        } )
        /* inicio filtro */
        if(categoriaId===undefined){
          setProducto(productos)
        } else {
          setProducto(productos.filter(categoria=>categoria.categoriaId===categoriaId))
        }
        /* fin filtro */
        setCargando(false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        toast.dismiss()
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
