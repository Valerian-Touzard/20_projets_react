import React from 'react';
import './App.css';
import Acordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Acordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
