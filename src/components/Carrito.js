import { useContext } from "react";
import { contexto } from "./CartContext";

const Carrito = () => {

  const {cantidadTotal, precioTotal, carrito} = useContext(contexto)

  return (
    <div>
      <h2>Carrito</h2>
      <h3>Cantidad de productos: {cantidadTotal}</h3>      
      <h3>Precio total: ${precioTotal}</h3>
      <h3>Productos en el carrito:</h3>
        <ul>
            {carrito.map(item => {
                return (
                <li key={item.id}>
                {item.nombre} 
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Carrito