import logo from './logo.svg';
import { NavBar } from './Componentes/NavBar';
import { ItemListContainer } from './Componentes/ItemListContainer';
import { ItemDetailConteiner } from './Componentes/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './paginas/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < NavBar/>
        <Routes>
          <Route path='/' element={  <ItemListContainer greeting={'Bienvenidos'}/>  }/>
          <Route path='/detalle/:idItem' element={  <ItemDetailConteiner/>  }/>      
          <Route path="*" element={ <Notfound/> } />      
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
