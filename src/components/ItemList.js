import Item from "./Item"

const ItemList = ({productos}) => {

  return (
    <section className="cardContainer">
      {productos.map(product => {
        return (
        <Item key={product.id} product={product} />
        )
      } )} 
    </section>
  )
}

export default ItemList