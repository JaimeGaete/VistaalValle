import { Link } from "react-router-dom"

const Item = ({producto}) => {

return (    
    <article className="card">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt="{producto.nombre}"/>    
      <p>Precio: $ {producto.precio} </p>
      <Link to={`/producto/${producto.id}`} key={producto.id}>Ver Detalle</Link>
    </article>
  )
}

export default Item