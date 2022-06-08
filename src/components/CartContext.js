import { createContext, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])
  const [cantidadTotal, setCantidadTotal] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(0)

  const estaEnCarrito = (id) => 
  { 
    return carrito.find((e) => e.id === id); 
  }

// ***** LIMPIAR CARRO
  const vaciarCarrito = () => { 
    setCarrito([]) 
    setPrecioTotal(0)
    setCantidadTotal(0) 
  }
 
// ***** AGREGAR ITEM
  const agregarItem = (id,item,cantidad) => {
    
    const copiaCarrito = [...carrito]
    
    const itemEnCarrito = estaEnCarrito(id)
	
    // si el item ya existe, solo aumento la cantidad
    if (itemEnCarrito) {
        copiaCarrito[copiaCarrito.findIndex((prod) => prod.id === itemEnCarrito.id)].cantidad += cantidad
        setCarrito(copiaCarrito)
        setPrecioTotal(precioTotal + itemEnCarrito.precio)
        setCantidadTotal(cantidadTotal + cantidad)
        return
    }

    // sino existe, lo agrego al carrito
    item.id = id
    item.cantidad = cantidad
    setCarrito([...copiaCarrito, item])
    setPrecioTotal(precioTotal + (item.precio * cantidad))
    setCantidadTotal(cantidadTotal + cantidad)
  }

// ***** ELIMINAR ITEM
  const eliminarItem = (item) => {

    if (!(estaEnCarrito(item.id))) {
        return
    }

    setPrecioTotal(precioTotal - (item.precio * item.cantidad)) 
    setCantidadTotal(cantidadTotal - item.cantidad)

    const copiaCarrito = [...carrito]
    const tmpCarro = copiaCarrito.filter((indice) => indice.id !== item.id)
    setCarrito(tmpCarro)
  }

// ***** RESTA UN ITEM DEL PRODUCTO EN EL CARRITO
  const restaUnItem = (item) => {
    const pos = carrito.indexOf(item);
    if(carrito[pos].cantidad > 1)
    {
      carrito[pos].cantidad = parseInt(carrito[pos].cantidad) - 1;
      setCarrito(carrito.concat([]));
      setPrecioTotal(precioTotal - item.precio)
      setCantidadTotal(cantidadTotal - 1)
    }
  }

  const valorDelContexto = {cantidadTotal, precioTotal, carrito, agregarItem ,eliminarItem, vaciarCarrito ,estaEnCarrito, restaUnItem}

  return (
    <Provider value={valorDelContexto} > {children} </Provider>
  )
}

export default MiCustomProvider