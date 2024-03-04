import React from 'react'
import LightDarkMode from '../light-dark-mode'
import TicTacToe from '../tic-tac-toe'
import RandomColor from '../random-color'
import Acordian from '../accordian'
import TreeView from '../tree-view'

const FeatureFlags = () => {
    const componentsToRender = [
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Acordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView />
        }
    ]
  return (
    <div>
        <h1>Feature Flags</h1>
    </div>
  )
}

export default FeatureFlags