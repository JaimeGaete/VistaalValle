import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify"
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{

      toast.info("Cargando detalle del producto ...")
      
      const productosCollection = collection(db, "productos")
      const consulta = getDocs(productosCollection)
      
      consulta
      .then((catalogo) => {
        const productos = catalogo.docs.map(doc=>{ return doc.data() } )
        if (productos.size === 0) 
        {
          console.log("No existen resultados")
          setProducto(null)
        }
        else {
          const resultado = productos.filter((item)=>{ return item.id==id })[0]
          setProducto(resultado)
        }
        setCargando(false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        toast.dismiss()
      })
    }, [id])

  if(cargando){
    return (<p>Cargando...</p>);
  }else{
    return (
      <>
        <ItemDetail key={producto.id} producto={producto}/>
      </>
    )
  }
}

export default ItemDetailContainer