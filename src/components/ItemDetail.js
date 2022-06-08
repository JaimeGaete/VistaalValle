import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { contexto } from "./CartContext"
import Button from '@mui/material/Button'

const ItemDetail = ({ id, producto }) => {

  const [isCounter, setIsCounter] = useState(false)
  const {agregarItem} = useContext(contexto)

  const onAdd = (cantidad) => { 
    setIsCounter(true)
    agregarItem(id, producto, cantidad)
  }

  return (    
        <article className="card cardDetail mx-3 mt-3 px-3" style={{ width: '30rem'  }}>
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt="{producto.nombre}" style={{ width: '25rem' }}/>    
          <p>{producto.description} </p>
          <p className="precio">USD ${producto.precio} </p>
          {isCounter ? <Link to="/carrito"><Button variant="contained">COMPRAR AHORA</Button></Link> : <ItemCount init={1} stock={producto.stock} onAdd={onAdd} /> }
        </article>
      )
    }
    
export default ItemDetail

