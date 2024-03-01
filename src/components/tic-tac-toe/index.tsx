import React, { useState } from "react";
import "./style.css";

type Props = {
  value: string;
  onClick: () => void;
};

const Square = ({ value, onClick }: Props) => {
  const squareClick = () => {
    onClick();
  };

  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  /**
   * Méthode qui permet d'afficher un X ou un O lors du clique de l'utilisateur dans le carrée
   * Elle vérifie également si le carré n'est pas déjas remplis (auquel cas, la fonction s'arrête)
   * @param index number: L'index de la liste que l'on va vérifier
   * @returns unknown
   */
  const handleClick = (index: number) => {
    let cpySquares = [...squares];
    if (cpySquares[index]) return;
    cpySquares[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default TicTacToe;
