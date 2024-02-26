import React from 'react';
import './App.css';
import Acordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Acordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating Component */}
      <StarRating noOfStars={10} />

      {/* Image Slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>

      {/* Load more data */}
      <LoadMoreData />

      {/* Tree view component */}
      <TreeView menu={menus} />

      {/* QR code generator component */}
      <QrCodeGenerator />

      {/* Light Dark Mode */}
      <LightDarkMode />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}

export default App;
