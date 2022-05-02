import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

const App = () => {

  return (
    <div className="App">
      <NavBar sitio="Vista al Valle"/>
      <ItemListContainer />
      <ItemDetailContainer />
  </div>
  )
}

export default App;


