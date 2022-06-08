import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Carrito = () => {

  const {cantidadTotal, precioTotal, carrito, agregarItem, restaUnItem, eliminarItem, vaciarCarrito} = useContext(contexto)

  return (
    <>
    {cantidadTotal >0 ? 
    (
      <div>
        <h2>Carro de Compras:</h2>
        <br></br>
          <ul>
              {carrito.map(item => (
                <li key={item.id}> {item.nombre} &nbsp;<span className="precio">USD ${item.precio}</span>&nbsp;&nbsp;
                <button onClick={()=>{restaUnItem(item)}}>-</button>&nbsp;&nbsp;
                {item.cantidad}&nbsp;&nbsp;
                <button onClick={()=>{agregarItem(item.id,item,1)}}>+</button>
                &nbsp;&nbsp;
                <Button variant="contained" onClick={()=>{eliminarItem(item,1)}}>Eliminar Item</Button>
                </li>
              ))}
          </ul>
          <br></br>
          <h4>Productos: {cantidadTotal}</h4>      
          <h4><span className="precio">Total: USD ${precioTotal}</span></h4>
          <br></br>
          <Button variant="contained" onClick={()=>{vaciarCarrito()}}>Limpiar carrito</Button>
          <br></br><br></br>
          <Link to="/finalizar"><Button variant="contained">Terminar Compra</Button></Link>
      </div>
    )
    :
    (
      <div>
      <h3>No existen productos en el carro.</h3>
      <br></br> 
      <Link to="/"><Button variant="contained">Seguir Comprando</Button></Link>
      </div>
    )  
    }
    </>
  )
}

export default Carrito