import { Link } from "react-router-dom"

const Item = ({producto}) => {

return (    
  <article className="card cardDetail mx-3 mt-3 px-3" style={{ width: '25rem'  }}>
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt="{producto.nombre}" style={{ width: '10rem' }}/>    
      <p>Precio: $ {producto.precio} </p>
      <Link to={`/producto/${producto.id}`} key={producto.id}>Ver Detalle</Link>
    </article>
  )
}

export default Item