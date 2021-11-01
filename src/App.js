import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Slider from './components/Slider/Slider';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SliderImage from './components/Slider/SliderImage.json'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      
      <NavBar/>

      <Switch>

        <Route exact path="/">
          <Slider slides={ SliderImage } />
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
