import React from 'react'

const ItemDetail = ({ product }) => {
    return (    
        <article className="card">
          <h3>{product.nombre}</h3>
          <img src={product.imagen} alt="{product.nombre}"/>    
          <p>Precio: $ {product.precio} </p>
          <button>Ver detalles</button>
        </article>
      )
    }
    
export default ItemDetail

