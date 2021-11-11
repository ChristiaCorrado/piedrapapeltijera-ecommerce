import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import { CartProvider } from './context/CartContext';
import ItemList from './components/ItemList/ItemList';


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        
        <NavBar/>

        <Switch>

          <Route  exact path="/">
            <Home/>
          </Route>

          <Route exact path="/products">
            <ItemListContainer/>
          </Route>

          <Route exact path="/products/:categoryId">
            <ItemList/>
          </Route>

          <Route exact path="/item/:productId">
            <ItemDetailContainer/>
          </Route>

        </Switch>
      </CartProvider>
      
      
    </BrowserRouter>
  );
}

export default App;
