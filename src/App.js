import logo from './logo.svg';
import { NavBar } from './Componentes/NavBar';
import { ItemListContainer } from './Componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </header>
    </div>
  );
}

export default App;
