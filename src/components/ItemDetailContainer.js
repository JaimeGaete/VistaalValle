import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify"
import { db } from './firebase'
import { collection, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{

      toast.info("Cargando detalle del producto ...")
      
      const productosCollection = collection(db, "productos")
      const queryId = doc(productosCollection, id)
      var consultaFiltro = getDoc(queryId)

      consultaFiltro
      .then((resultado) => {
        setProducto(resultado.data())
        setCargando(false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        toast.dismiss()
      })
    },[id])

  if(cargando){
    return (<p>Cargando...</p>);
  }else{
    return (
      <>
        <ItemDetail key={id} producto={producto} id={id}/>
      </>
    )
  }
}

export default ItemDetailContainer