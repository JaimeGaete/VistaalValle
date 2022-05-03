import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom';
import catalogo from "./productos.json"

const ItemListContainer = () => {

   const [cargando, setCargando] = useState(true)
   const [productos, setProductos] = useState([])

   const {categorias} = useParams();

   useEffect(() => {

      if(categorias===undefined){
         console.log("Pido todos los productos")
      }
      else{
         console.log("Pido los productos de la categoria: ",categorias)
      }

      const prod = new Promise((res)=>{
         setTimeout(()=>{   
            res(catalogo)},2000)
      })
      
      prod
         .then(()=>{
            setCargando(false) 
            setProductos(catalogo)
         })
         
   },[categorias])

   if (cargando) {
      return (
         <p>Cargando productos.......</p>
      )
   }else{
      return(
         <ItemList productos={productos}/>     
      )
   }
}

export default ItemListContainer