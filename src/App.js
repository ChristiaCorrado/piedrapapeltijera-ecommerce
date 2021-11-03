import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {


  return (
    <BrowserRouter>
      
      <NavBar/>

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/products">
          <ItemListContainer/>
        </Route>

        <Route exact path="/:productId">
          <ItemDetailContainer/>
        </Route>

      </Switch>
      
      
    </BrowserRouter>
  );
}

export default App;
