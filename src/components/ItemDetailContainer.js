import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db } from './firebase'
import { collection, getDoc, doc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify"
import Button from '@mui/material/Button'

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const [noExiste, setNoExiste] = useState(false)
  const {id} = useParams()

  useEffect(()=>{

      toast.info("Cargando detalle del producto ...")
      
      const productosCollection = collection(db, "productos")
      const queryId = doc(productosCollection, id)
      var consultaFiltro = getDoc(queryId)

      consultaFiltro
      .then((resultado) => {
        if (resultado.exists())
        {
          setProducto(resultado.data())
          setCargando(false)
        }
        else
        {
          setNoExiste(true)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        toast.dismiss()
      })
    },[id])


  if(cargando){
      return <p>Cargando...</p>;
  }else{
    return(
      <>
      {noExiste ? (<div>El producto seleccionado no existe. Intente con otro producto de la lista.<br></br><br></br> <Link to="/"><Button variant="contained">Seguir Comprando</Button></Link></div>) : <ItemDetail key={id} producto={producto} id={id}/>
      }
      </>
    )
  }
}

export default ItemDetailContainer