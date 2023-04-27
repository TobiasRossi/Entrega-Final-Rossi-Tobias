import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/itemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "a La LLama Loca"/>
      <ItemCount/>
      <Vista/>
      <Mensaje/>
      </>
  );
}

export default App;
