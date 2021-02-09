import React, { Components } from "react";
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';
import Counter from "./containers/ItemCount";
import Item from "./components/Item";


let estilos = { color: 'violet', background: 'red', paddingleft: '20px' }
const App = () => {
  return (
    <div className="App">

    <Counter/>
    <NavbarComponent />
    <ItemListContainer greeting ={"Bienvenidos a React.js"}/>
    
    </div>
   );
}


export default App;
