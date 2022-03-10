import './App.css';
import { Form } from './components/molecules/form/Form';
import { PokemonForm } from './components/templates/pokemonForm/PokemonForm';
import { PokemonTable } from './components/templates/pokemonTable/PokemonTable';
import { Search } from './components/molecules/search/search';

function App() {
  return (
    <div className="App">
      <div className="BodyApp">
      <Search/>
      <PokemonTable/>
      <PokemonForm/>
      </div>
    </div>
  );
}

export default App;
