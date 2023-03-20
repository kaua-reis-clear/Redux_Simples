import logo from './logo.svg';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo>X</Intervalo>
      </div>
      <div className='linha'>
        <Media>Y</Media>
        <Soma>X</Soma>
        <Sorteio>Y</Sorteio>
      </div>
    </div>
  );
}

export default App;
