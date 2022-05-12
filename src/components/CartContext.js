import { createContext, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])
  const [cantidadTotal, setCantidad_total] = useState(0)
  const [precioTotal, setPrecio_total] = useState(0)

  const estaEnCarrito = (id) => { return carrito.find((e) => e.id === id); }

  const vaciarCarrito = () => { setCarrito([]) }
 
  const agregarItem = (item,cantidad) => {
    
    const copiaCarrito = [...carrito]
    
    const itemEnCarrito = estaEnCarrito(item.id)
	
    // si el item ya existe, solo aumento la cantidad
    if (itemEnCarrito) {
        copiaCarrito[copiaCarrito.findIndex((prod) => prod.id === itemEnCarrito.id)].quantity += cantidad
        setCarrito(copiaCarrito)
        setPrecio_total(precioTotal + itemEnCarrito.precio)
        setCantidad_total(cantidadTotal + cantidad)
        return
    }

    // sino existe, lo agrego al carrito
    item.quantity = cantidad
    setCarrito([...copiaCarrito, item])
    setPrecio_total(precioTotal + item.precio)
    setCantidad_total(cantidadTotal + cantidad)
  }

  const eliminarItem = (item) => {
    if (!(estaEnCarrito(item.id))) {
        return
    }
    const copiaCarrito = [...carrito]
    const tmpCarro = copiaCarrito.filter((indice) => indice.id !== item.id)
    setCarrito(tmpCarro)
  }

  const valorDelContexto = {cantidadTotal, precioTotal, carrito, agregarItem ,eliminarItem ,vaciarCarrito ,estaEnCarrito}

  return (
    <Provider value={valorDelContexto} > {children} </Provider>
  )
}

export default MiCustomProvider