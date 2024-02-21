import React from 'react';
import './App.css';
import Acordian from './components/accordian';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Acordian />

      {/* Random Color Component */}
      <RandomColor />
    </div>
  );
}

export default App;
