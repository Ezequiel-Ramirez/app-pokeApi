import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import { PokeProvider } from './context/PokeContext';

function App() {
  return (

    <PokeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/itemDetail">
            <ItemDetail />
          </Route>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </PokeProvider>


  );
}

export default App;
