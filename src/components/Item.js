import { Link } from "react-router-dom"

const Item = ({producto}) => {

return (    
  <article className="card cardDetail mx-3 mt-3 px-3" style={{ width: '25rem'  }}>
      <h3>{producto.nombre}</h3>
      <Link to={`/producto/${producto.id}`} key={producto.id}><img src={producto.imagen} alt="{producto.nombre}" style={{ width: '10rem' }}/></Link> 
      <p className="precio">USD ${producto.precio}</p>
    </article>
  )
}

export default Item