import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import { getItem } from "./productos"

const ItemListContainer = () => {

   const [productos, setProductos] = useState([])
   const {categoriaId} = useParams();

   useEffect(() => {

      if(categoriaId===undefined){
         getItem().then(response => setProductos(response))
      }
      else {
         getItem().then( response => {
               setProductos(response.filter(product => product.categoria === categoriaId))
               }
            )
      }
   },[categoriaId])

   return(
      <ItemList productos={productos}/>     
   )
}

export default ItemListContainer