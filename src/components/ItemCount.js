import React from 'react'
import { useState } from "react"

const ItemCount = ({init,stock,onAdd}) => {
  
  const [contador,setContador] = useState(init)
  const [confirmado,setConfirmado] = useState(false)
  
  const sumar = () => 
  {
    if (contador < stock) {
        setContador(contador+1)
        stock = stock - 1     
    }
  }

  const restar = () => 
  {
    setContador(contador-1)
    stock = stock + 1
  }

  const confirmar = () => 
  {
    setConfirmado(true)
    onAdd(contador)
  }

  if(!confirmado)
  {
    return (
      <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
      </div>
    )
  }
  else
  {
    return (
      <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
        <p>Se confirmaron {contador} unidades!</p>
      </div>
    )
  }
}

export default ItemCount 