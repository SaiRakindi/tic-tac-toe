import { useState } from "react";
import ".././App.css";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, calculateWinner, getStautsMessage, resetGame } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStautsMessage}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((boardItem, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={boardItem !== null}
            >
              {boardItem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
