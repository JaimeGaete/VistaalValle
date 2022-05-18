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
    const consulta = getDocs (productosCollection)

    consulta
      .then((resultado) => {
        const productos = resultado.docs.map(doc=>{ 
          console.log(doc.data())
          return doc.data()
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


    /*
    const pedido = new Promise ((res)=>{
      setTimeout(()=>{
      res(catalogo)
      },200)
    })
    .then(()=>{
      if(categoriaId===undefined){
        setCargando(false)
        setProducto(catalogo)
        toast.dismiss()
      } else {
        setProducto(catalogo.filter(categoria=>categoria.categoriaId===categoriaId))
        setCargando(false)
        toast.dismiss()
      }
      toast.success("Productos Cargados")
    })*/
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
