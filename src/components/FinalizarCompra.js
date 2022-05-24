import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom'
import { db } from "./firebase"
import { collection, addDoc } from 'firebase/firestore'

const FinalizarCompra = () => {

  const {cantidadTotal, precioTotal, carrito, vaciarCarrito} = useContext(contexto)
  const [idCompra, setIdCompra] = useState(null)

  const horaFecha = new Date().toLocaleString()

  const guardarCompra = () => {

    const OCCollection = collection(db, "OC")

    const OC = {
      cliente : { nombre: "Jaime", telefono: "+56912345678", email: "xxx.yyy@gmail.com" },
      items: carrito,
      fecha: horaFecha,
      cantidad: cantidadTotal,
      total: precioTotal
    }

    const consulta = addDoc(OCCollection, OC)
    consulta
    .then((resultado) => { 
        setIdCompra(resultado.id) 
        vaciarCarrito()
    }) 
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
    {idCompra !== null ? 
    (
      <div>
        <h3>Compra exitosa!</h3>
        <h4>ID: {idCompra}</h4>
        <br></br>
        <button><Link to="/">Seguir Comprando</Link></button>        
      </div>
    )
    :
    (
      <div>
        <h3>Detalle compra:</h3>
        <br></br>
        <h4>Cantidad: {cantidadTotal}</h4>
        <h4>Total USD{precioTotal}</h4>
        <br></br>
        <button onClick={()=>{guardarCompra()}}>Comprar</button>
      </div>
    )  
    }
    </>
  )
}

export default FinalizarCompra