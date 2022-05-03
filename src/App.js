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
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/productos/:categorias" element={<ItemListContainer />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;


