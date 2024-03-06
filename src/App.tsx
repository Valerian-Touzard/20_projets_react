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
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import { FeatureFlagGlobalState } from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Acordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

      {/* Load more data */}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      {/* <TreeView menu={menus} /> */}

      {/* QR code generator component */}
      {/* <QrCodeGenerator /> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url='https://dummyjson.com/products?limit=100' /> */}

      {/* Custom tabs */}
      {/* <TabTest /> */}

      {/* Custom Modal */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Auto Complete */}
      {/* <SearchAutoComplete /> */}

      {/* TIC TAC TOE */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Use window resize Hook test */}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
