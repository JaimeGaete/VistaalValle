import { useState } from "react"

const ItemCount = ({init, stock, onAdd}) => {
  
  const [cantidad, setCantidad] = useState(init)
  const [confirmado, setConfirmado] = useState(false)
  
  const sumar = () => 
  {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
      stock = stock - 1     
    }
  }

  const restar = () => 
  {
    setCantidad(cantidad - 1)
    stock = stock + 1
  }

  const confirmar = () => 
  {
    setConfirmado(true)
    onAdd(cantidad)
  }

  if(!confirmado)
  {
    return (
      <div>
        <p>Cantidad : {cantidad}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>Confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
      </div>
    )
  }
  else
  {
    return (
      <div>
        <p>Cantidad : {cantidad}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>Confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
        <p>Se confirmaron {cantidad} unidades!</p>
      </div>
    )
  }
}

export default ItemCount 