import { useState } from "react"
import Button from '@mui/material/Button'

const ItemCount = ({init, stock, onAdd}) => {
  
  const [cantidad, setCantidad] = useState(init)
  const [confirmado, setConfirmado] = useState(false)
  
  const sumar = () => 
  {
    if (cantidad <= stock) {
      setCantidad(cantidad + 1)
      stock = stock - 1     
    }
  }

  const restar = () => 
  {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
      stock = stock + 1
     }
  }

  const confirmar = () => 
  {
    if (cantidad > 0) {
      setConfirmado(true)
      onAdd(cantidad)
    }
  }

  if(!confirmado)
  {
    return (
      <div>
        <p><b>CANTIDAD</b></p>
        <button onClick={restar} className="material-icons">remove</button>
        <span className="item_agregar">&nbsp;{cantidad}&nbsp;</span>
        <button onClick={sumar} className="material-icons">add</button>
        <br></br><br></br>
        <Button variant="contained" onClick={confirmar}>Agregar al Carrito</Button>
      </div>
    )
  }
  else
  {
    return (
      <div>
        <p><b>CANTIDAD</b></p>
        <button onClick={restar} className="material-icons">remove</button>
        <span className="item_agregar">&nbsp;{cantidad}&nbsp;</span>
        <button onClick={sumar} className="material-icons">add</button>
        <br></br><br></br>
        <Button variant="contained" onClick={confirmar}>Agregar al Carrito</Button>
        <p>Se confirmaron {cantidad} unidades!</p>
      </div>
    )
  }
}

export default ItemCount 