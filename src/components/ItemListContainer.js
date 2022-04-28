import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const catalogo = [
   {
     id: 1,
     name: "Experiencia Día de Spa",
     price: 100.000,
     image: "https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg"
   },
   {
     id: 2,
     name: "Experiencia Día en una Viña para Dos",
     price: 200.000,
     image: "https://chileestuyo.cl/wp-content/uploads/2018/04/VinaMontGrass_instagram-768x576.jpg"
   },
   {
     id: 3,
     name: "Compra tus vinos favoritos",
     price: 60.000,
     image: "https://lavinoteca.vteximg.com.br/arquivos/ids/159219-1000-1000/4987_1.jpg?v=637544672699700000"
   }
]

const ItemListContainer = () => {

   const [cargando, setCargando] = useState(true)
   const [productos, setProductos] = useState([])

   useEffect(() => {

      const prod = new Promise((res,rej)=>{
        
         setTimeout(()=>{   
            res(catalogo)
         },2000)
      })
      prod
         .then(()=>{
            setCargando(false) 
            setProductos(catalogo)
         })
         
   },[])

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