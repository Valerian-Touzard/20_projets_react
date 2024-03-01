import React, { useEffect, useState } from "react";
import "./style.css";

type Props = {
  value: string;
  onClick: () => void;
};

const Square = ({ value, onClick }: Props) => {

  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if(!getWinner(squares) && squares.every(item => item !== "")){
      setStatus(`This is a draw ! Please restart the game`)
    }else if(getWinner(squares)){
      setStatus(`Winner is ${getWinner(squares)}`)
    }else{
      setStatus(`Next player is ${isXTurn ? "X": "O"}`)
    }
  }, [squares, isXTurn])
  

  /**
   * Méthode qui permet d'afficher un X ou un O lors du clique de l'utilisateur dans le carrée
   * Elle vérifie également si le carré n'est pas déjas remplis (auquel cas, la fonction s'arrête)
   * @param index number: L'index de la liste que l'on va vérifier
   * @returns unknown
   */
  const handleClick = (index: number) => {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[index]) return;
    cpySquares[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  /**
   * Vérifie Si il y a un gagnant. Si il y en a un, retourne la patterne gagnant. Null sinon
   * @param squares Array<string>: Le plateau de jeux
   * @returns Le paterne gagnant, null sinon
   */
  const getWinner = (squares: Array<string>) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  /**
   * Méthode qui permet de redémarer une partie
   */
  const handleRestart = () =>{
    setIsXTurn(true);
    setSquares(Array(9).fill(""))
  }

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
      <h1>{status}</h1>
      <button onClick={() => handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
