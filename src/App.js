import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

const App = () => {

  return (
      <BrowserRouter>
      <NavBar sitio="Vista al Valle"/>
       <Routes>
        <Route element={<ItemListContainer />}   path="/" />
        <Route element={<ItemListContainer />}   path="/categoria/:categoriaId" />
        <Route element={<ItemDetailContainer />} path='/item/:id' />
      </Routes>
      </BrowserRouter>
  )
}

export default App;