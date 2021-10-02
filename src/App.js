import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { PokeProvider } from './context/PokeContext';

function App() {
  return (
    <>
      <PokeProvider>
        <ItemListContainer />
      </PokeProvider>

    </>
  );
}

export default App;
