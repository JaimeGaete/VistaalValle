import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from 'react-router-dom'

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
                <li key={item.id}> {item.nombre} &nbsp; ${item.precio} &nbsp;&nbsp;
                <button onClick={()=>{restaUnItem(item)}}>-</button>&nbsp;&nbsp;
                {item.cantidad}&nbsp;&nbsp;
                <button onClick={()=>{agregarItem(item,1)}}>+</button>
                &nbsp;&nbsp;
                <button onClick={()=>{eliminarItem(item,1)}}>Eliminar Item</button>
                </li>
              ))}
          </ul>
          <br></br>
          <h4>Cantidad de productos: {cantidadTotal}</h4>      
          <h4>Total: ${precioTotal}</h4>
          <br></br>
          <button onClick={()=>{vaciarCarrito()}}>Limpiar carrito</button>
      </div>
    )
    :
    (
      <div>
      <h3>No existen productos en el carro.</h3>
      <br></br> 
      <button><Link to="/">Seguir Comprando</Link></button>
      </div>
    )  
    }
    </>
  )
}


export default Carrito