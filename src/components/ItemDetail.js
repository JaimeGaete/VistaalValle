import { Link } from 'react-router-dom'

const ItemDetail = ({ producto }) => {
    return (    
        <article className="card cardDetail">
          <h3>{producto.nombre}</h3>
          <img src={produco.imagen} alt="{product.nombre}"/>    
          <p>Precio: $ {producto.precio} </p>
          <button>
            <Link to="/">Terminar Compra</Link>
          </button>
        </article>
      )
    }
    
export default ItemDetail

