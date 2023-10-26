import React, { useState } from 'react';
import './App.css';
import useOperation from './hooks/useOperation';

function App() {
  
  // nunca sacar estados de los componentes
  
  // un custom hook, siempre empieza con la palabra "use"
  // dentro de estos, podemos llamar otros hooks de react
  // un CH no usa componentes
  // el nombre de los hooks, no debeser tan descriptivo




  /*
  oraganizable por nombre,especie
  buscar nombre especie especifico
  buscar por vivo? 
   */
  const [counter, setCounter] = useOperation();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>count is {counter}</h1>
        <button onClick={() => setCounter('-')}>-</button>
        <button onClick={() => setCounter('+')}>+</button>
      </div>
    </>
  );
}

export default App;
