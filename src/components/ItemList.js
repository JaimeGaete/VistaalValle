import Item from "./Item"

const ItemList = ({producto}) => {

  return (
    <section className="card-container">
      {producto.map(product => {
        return (
        <Item key={product.id} producto={product} />
        )
      } )} 
    </section>
  )
}

export default ItemList