import React from 'react';
import Counter from './components/Counter';
import ColorButton from './components/ColorButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />

      <ColorButton />
    </div>
  );
}

export default App;
