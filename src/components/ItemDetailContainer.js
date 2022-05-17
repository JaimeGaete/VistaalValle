import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify"

export const catalogo = [
  {
    "id" : 0,
    "nombre" : "Spa Relajante en Pareja",
    "precio" : 100,
    "categoriaId" : "spa",
    "imagen" : "https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg",
    "description" : "Nuestro Spa es es el lugar indicado para quienes buscan la relajación y el descanso absoluto en un lugar único, rodeado de las hermosas montañas del Cajón de Maipo",
    "stock" : 10
  },
  {
    "id" : 1,
    "nombre" : "Actividades para disfrutar Viña Santa Cruz en pareja",
    "precio" : 200,
    "categoriaId" : "vinas",
    "imagen" : "https://www.lunademiel.com.pe/wp-content/uploads/2018/02/pareja.jpg",
    "description" : "El turismo enológico es una gran alternativa para quienes quieren hacer actividades en pareja, vivir experiencias nuevas juntos, conocer lugares diferentes, comer rico y, sobre todo, disfrutar de buenos vinos.",
    "stock" : 10
  },
  {
    "id" : 2,
    "nombre" : "Lleva tus Vinos favoritos",
    "precio" : 25,
    "categoriaId" : "vinos",
    "imagen" : "https://lavinoteca.vteximg.com.br/arquivos/ids/159219-1000-1000/4987_1.jpg?v=637544672699700000",
    "description" : "Lleva tus Vinos favoritos",
    "stock" : 10
  },
  {
    "id" : 3,
    "nombre" : "Centros de esquí: Farellones, La Parva, El Colorado y Farellones",
    "precio" : 75,
    "categoriaId" : "nieve",
    "imagen" : "https://chileestuyo.cl/wp-content/uploads/2019/06/Copy-of-TermasdeChillan_06.jpg",
    "description" : "Centros de esquí: Farellones, La Parva, El Colorado y Farellones",
    "stock" : 10
  },
  {
    "id" : 4,
    "nombre" : "Torres del Paine y Patagonia",
    "precio" : 75,
    "categoriaId" : "paine",
    "imagen" : "https://www.gochile.cl/fotos/full/105987-istock_000044328830_medium@2x.jpg",
    "description" : "Torres del Paine y Patagonia",
    "stock" : 10
  },
  {
    "id" : 5,
    "nombre" : "Vino Seña Ensamblaje (2017) 750cc",
    "precio" : 20,
    "categoriaId" : "vinos",
    "imagen" : "https://s3-sa-east-1.amazonaws.com/buze-backoffice-product-images/823cba02-6357-452b-a6ee-4a2310a6e9c6-lg.jpg",
    "description" : "Vino Seña Ensamblaje (2017) 750cc",
    "stock" : 10
  },
  {
    "id" : 6,
    "nombre" : "CAJA VENTISQUERO VERTICE: 6x Vino Ventisquero Vértice 750cc",
    "precio" : 20,
    "categoriaId" : "vinos",
    "imagen" : "https://d1ks0wbvjr3pux.cloudfront.net/890f71d1-cd28-4fb7-9ec5-c827c4589a30-md.jpg",
    "description" : "CAJA VENTISQUERO VERTICE: 6x Vino Ventisquero Vértice 750cc",
    "stock" : 10
  },
  {
    "id" : 7,
    "nombre" : "Futangue Hotel & Spa",
    "precio" : 100,
    "categoriaId" : "spa",
    "imagen" : "https://www.rusticae.com/images/hotel/futangue-hotel-spa/1/0x768_e37eac35d6643b1ef5951a897adabc5f.jpg",
    "description" : "Futangue Hotel & Spa en Riñinahue, en las praderas cercanas al Lago Ranco se emplaza Futangue Hotel & Spa. Su arquitectura destaca las maderas nativas y se complementa con el entorno natural, asimilando los clásicos galpones y caballerizas del sur de Chile",
    "stock" : 10
  }
];

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{

      toast.info("Cargando detalle del producto ...")
      const resultado = catalogo.filter((producto)=>{ return producto.id==id })[0]
      setProducto(resultado)
      setCargando(false)
    },)

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