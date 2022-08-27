import './App.css';
import 'bulma/css/bulma.min.css'
import {FormNumRamdon} from './page/GenerarNumberPage'

function App() {
  return (
    <div className="App">
      <h1 className='title is-1 has-text-white'>Genera un numero aletorio.  </h1>
      <FormNumRamdon />
    </div>
  );
}

export default App;
