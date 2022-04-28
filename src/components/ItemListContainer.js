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
     name: "Xiaomi Mi Band II",
     price: 200,
     image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-smart-band-pro/section06-02.png"
   },
   {
     id: 3,
     name: "Xiaomi Mi Band III",
     price: 300,
     image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-smart-band-pro/section06-03.png"
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