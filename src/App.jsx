import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Cart from './components/Cart/Cart'
import Chekout from './components/Checkout/Checkout';

function App() {

  return (
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/Categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/checkout' element={ <Chekout/>}/>
            <Route path='*' element={<h2>Error 404 Web not found!</h2>}/>
          </Routes> 
        </CarritoProvider>
        </BrowserRouter>
  );
}

export default App;
