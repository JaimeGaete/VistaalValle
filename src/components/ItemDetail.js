import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import ItemCount from "./ItemCount";
import { contexto } from "./CartContext";

const ItemDetail = ({ producto }) => {

  // aca recibo la cantidad de ItemCount, y estado para ocultar el componente cuando se confirma la cantidad
  const[cantidadCounter, setCantidadCounter] = useState(0)
  const [isCounter, setIsCounter] = useState(false)
  
  const {agregarItem} = useContext(contexto)

  const onAdd = (cantidad) => { 
    setCantidadCounter(cantidad) 
    setIsCounter(true)
    agregarItem(producto, cantidad)
  }

  return (    
        <article className="card cardDetail mx-3 mt-3 px-3" style={{ width: '25rem'  }}>
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt="{producto.nombre}" style={{ width: '10rem' }}/>    
          <p>Precio: $ {producto.precio} </p>
          {isCounter ? <button><Link to="/carrito">Comprar ahora {cantidadCounter} unidades </Link></button> : <ItemCount init={1} stock={producto.stock} onAdd={onAdd} /> }
          <br></br>
          
        </article>
      )
    }
    
export default ItemDetail

