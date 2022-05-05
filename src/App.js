import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemCount from './components/ItemCount.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  return (
      <BrowserRouter>
      <NavBar sitio="Vista al Valle"/>
       <Routes>
        <Route element={<ItemListContainer />}   path="/" />
        <Route element={<ItemListContainer />}   path="/categoria/:categoriaId" />
        <Route element={<ItemDetailContainer />} path='/producto/:id' />
        <Route element={<ItemCount/>}            path="/ItemCount" />
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
  )
}

export default App