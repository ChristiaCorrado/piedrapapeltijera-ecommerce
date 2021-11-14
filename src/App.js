import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Home from './components/Home/Home';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


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
            <ItemListContainer/>
          </Route>

          <Route exact path="/item/:productId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/cart">
            <Cart/>
          </Route>

        </Switch>
      </CartProvider>
      
      
    </BrowserRouter>
  );
}

export default App;
