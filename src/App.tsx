import React, { useState } from 'react';
import './App.css';
import { RandomMaker } from './components/RandomMaker';
import { Header } from './components/Header';

function App() {
  const [min, setMin] = useState(4);
  const [max, setMax] = useState(8);

  return (
    <div className="App">
      <Header>Inpuuuut Min and Max</Header>
      <label>
        Min: <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Max: <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
      </label>

      <RandomMaker min={min} max={max} />

    </div>
  );
}

export default App;
