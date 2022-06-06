import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'
import FinalizarCompra from './components/FinalizarCompra'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import MiCustomProvider from "./components/CartContext"

const App = () => {

  return (
      <BrowserRouter>
        <MiCustomProvider>
          <NavBar sitio="Vista al Valle"/>
          <Routes>
              <Route element={<ItemListContainer />}   path="/" />
              <Route element={<ItemListContainer />}   path="/categoria/:categoriaId" />
              <Route element={<ItemDetailContainer />} path='/producto/:id' />
              <Route element={<Carrito />}             path="/carrito" />
              <Route element={<FinalizarCompra />}     path="/finalizar" />
          </Routes>
          <ToastContainer/>
        </MiCustomProvider>
      </BrowserRouter>
  )
}

export default App