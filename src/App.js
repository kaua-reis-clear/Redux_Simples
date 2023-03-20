import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
