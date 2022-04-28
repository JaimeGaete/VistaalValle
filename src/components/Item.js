const Item = ({product}) => {

  return (    
    <article className="card">
      <h3>{product.name}</h3>
      <img src={product.image} alt="{product.name}"/>    
      <p>Precio: $ {product.price} </p>
      <button>Ver detalles</button>
    </article>
  )
}

export default Item