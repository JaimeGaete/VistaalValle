import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {

  return (
    <div className="App">
      <NavBar sitio="Vista al Valle"/>  
      <ItemListContainer />
      
  </div>
  )
}

export default App;


