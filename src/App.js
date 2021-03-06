import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Home from './components/Home/Home';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout.jsx';
import Alert404 from './components/Alert404/Alert404.jsx';


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

          <Route exact path="/item/:productId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/products/:categoryId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/cart">
            <Cart/>
          </Route>

          <Route exact path="/checkout">
            <Checkout/>
          </Route>

          <Route exact path="*">
            <Alert404/>
          </Route>
        </Switch>

        <Footer/>
      </CartProvider>
      
      
    </BrowserRouter>
  );
}

export default App;
