import React from "react";
import './style.css'

type Props = {
  value?: string
}

const Square = ({value}: Props) => {
return (
  <button className='square'>{value}</button>
)
}

const TicTacToe = () => {
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default TicTacToe;
